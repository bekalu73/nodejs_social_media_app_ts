"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = exports.likeOrDislikePost = exports.deletePost = exports.updatePost = exports.createPost = exports.getAllposts = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
//get all posts
const getAllposts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allpost = yield postModel_1.default.find();
        return res.status(200).json(allpost);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getAllposts = getAllposts;
// Create a post
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = new postModel_1.default(Object.assign(Object.assign({}, req.body), { date: new Date() }));
    try {
        const savedPost = yield newPost.save();
        return res.status(200).json(savedPost);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.createPost = createPost;
// Update a post
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.default.findById(req.params.id);
        // Check if the post exists
        if (!post) {
            return res.status(404).json("Post not found");
        }
        // Check if the userId matches
        if (post.userId === req.body.userId) {
            yield post.updateOne({ $set: req.body });
            return res.status(200).json("The post has been updated");
        }
        else {
            return res.status(403).json("You can update only your post");
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.updatePost = updatePost;
// Delete a post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.default.findById(req.params.id);
        // Check if the post exists
        if (!post) {
            return res.status(404).json("Post not found");
        }
        // Check if the userId matches
        if (post.userId === req.body.userId) {
            yield post.deleteOne();
            return res.status(200).json("The post has been deleted");
        }
        else {
            return res.status(403).json("You can delete only your post");
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.deletePost = deletePost;
// Like or dislike a post
const likeOrDislikePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.default.findById(req.params.id);
        // Check if the post exists
        if (!post) {
            return res.status(404).json("Post not found");
        }
        // Like or dislike logic
        if (!post.likes.includes(req.body.userId)) {
            yield post.updateOne({ $push: { likes: req.body.userId } });
            return res.status(200).json("The post has been liked");
        }
        else {
            yield post.updateOne({ $pull: { likes: req.body.userId } });
            return res.status(200).json("The post has been disliked");
        }
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.likeOrDislikePost = likeOrDislikePost;
// Get a post by ID
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield postModel_1.default.findById(req.params.id);
        // Check if the post exists
        if (!post) {
            return res.status(404).json("Post not found");
        }
        return res.status(200).json(post);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.getPostById = getPostById;
