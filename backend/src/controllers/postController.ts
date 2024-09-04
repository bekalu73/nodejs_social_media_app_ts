import { Request, Response } from "express";
import Post from "../models/postModel";

//get all posts

export const getAllposts = async (req: Request, res: Response) => {
  try {
    const allpost = await Post.find();
    return res.status(200).json(allpost);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Create a post
export const createPost = async (req: Request, res: Response) => {
  const newPost = new Post({
    ...req.body,
    date: new Date(),
  });
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Update a post
export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post exists
    if (!post) {
      return res.status(404).json("Post not found");
    }

    // Check if the userId matches
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      return res.status(200).json("The post has been updated");
    } else {
      return res.status(403).json("You can update only your post");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Delete a post
export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post exists
    if (!post) {
      return res.status(404).json("Post not found");
    }

    // Check if the userId matches
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("The post has been deleted");
    } else {
      return res.status(403).json("You can delete only your post");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Like or dislike a post
export const likeOrDislikePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post exists
    if (!post) {
      return res.status(404).json("Post not found");
    }

    // Like or dislike logic
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Get a post by ID
export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post exists
    if (!post) {
      return res.status(404).json("Post not found");
    }

    return res.status(200).json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
};
