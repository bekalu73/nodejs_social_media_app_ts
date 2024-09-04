import { Schema, model, Document } from "mongoose";

// Define the interface for the Post document
interface IPost extends Document {
  id: number;
  desc?: string;
  photo?: string;
  date: Date;
  userId: number;
  likes: string[];
  comment: number;
}

// Define the Post schema
const PostSchema = new Schema<IPost>(
  {
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
  },
  { timestamps: true }
);

// Export the model
export default model<IPost>("Post", PostSchema);
