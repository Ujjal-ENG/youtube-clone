import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  deleteUser,
  getUser,
  like,
  subscribe,
  unsubscribe,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

//update user
router.patch("/:id", verifyToken, updateUser);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get a user
router.get("/:id", verifyToken, getUser);

//subscribe a user
router.patch("/sub/:id", verifyToken, subscribe);

//unsubscribe a user
router.patch("/unsub/:id", verifyToken, unsubscribe);

//like a video
router.patch("/like/:videoId", verifyToken, like);

//dislike a video
router.patch("/dislike/:videoId", verifyToken, subscribe);

export default router;
