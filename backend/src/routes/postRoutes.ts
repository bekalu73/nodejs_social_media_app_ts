import { Router } from "express";
import {
  createPost,
  updatePost,
  deletePost,
  likeOrDislikePost,
  getPostById,
  getAllposts,
} from "../controllers/postController";

const router: Router = Router();

router.get("/", getAllposts);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likeOrDislikePost);
router.get("/:id", getPostById);

export default router;
