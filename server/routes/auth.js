import express from "express";
import { google, signin, signup } from "../controllers/auth.js";

const router = express.Router();

//Create a User
router.post("/signup", signup);

//Sign IN
router.post("/signin", signin);

//Google AUTH
router.post("/google", google);

export default router;
