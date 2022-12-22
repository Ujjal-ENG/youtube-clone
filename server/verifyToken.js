import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not AUthenticated"));

  jwt.verify(
    token,
    "hferuiwa892q471298e903274209478032jhfdsjkf",
    (err, user) => {
      if (err) return next(createError(403, "Token is not valid!!"));
      req.user = user;
      next();
    }
  );
};
