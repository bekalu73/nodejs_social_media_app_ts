"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the Post schema
const PostSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        max: 500,
    },
    photo: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: Number,
        required: true,
    },
    likes: {
        type: [String],
        default: [],
    },
    comment: {
        type: Number,
        default: 0,
    },
}, { timestamps: true });
// Export the model
exports.default = (0, mongoose_1.model)("Post", PostSchema);
