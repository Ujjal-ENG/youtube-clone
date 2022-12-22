import express from "express";
import mongoose from "mongoose";

const app = express();

const connect = () => {
  mongoose.connect("mongodb://localhost:27017", () => {
    console.log("DB is Connected");
  });
};

app.listen(3001, () => {
  connect();
  console.log(`Server is running at http://localhost:${3001}`);
});
