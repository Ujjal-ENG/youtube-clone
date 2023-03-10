import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";
import commentRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";

import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

//Database connection are setUp Here
const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/youtubeclone", {
      useUnifiedTopology: true,
    })

    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.log("Error Is: ", error);
    });
  mongoose.set("strictQuery", true);
};

//This here setup the router route
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

//middleware setup

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went Wrong!!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

//here app mainly listen
app.listen(3001, () => {
  connect();
  console.log(`Server is running at http://localhost:${3001}`);
});
