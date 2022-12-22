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
router.delete("/:id", deleteUser);

//get a user
router.get("/:id", getUser);

//subscribe a user
router.put("/sub/:id", subscribe);

//unsubscribe a user
router.put("/unsub/:id", unsubscribe);

//like a video
router.put("/like/:videoId", like);

//dislike a video
router.put("/dislike/:videoId", subscribe);

export default router;
