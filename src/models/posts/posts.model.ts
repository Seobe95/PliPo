import mongoose, { Document, Model } from "mongoose";

interface IPostSchema extends Document {
  contents: string;
  youtubeLink: string;
  publishedDate: {
    type: string;
    default: string;
  };
}

interface IPostSchemaModel extends Model<IPostSchema> {

}

const { Schema } = mongoose;

const PostSchema = new Schema({
  contents: String,
  youtubeLink: String,
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

let Post: IPostSchemaModel;
if (mongoose.models.Post) {
  Post = mongoose.model<IPostSchema, IPostSchemaModel>("Post");
} else {
  Post = mongoose.model<IPostSchema, IPostSchemaModel>("Post", PostSchema);
}

export default Post;
