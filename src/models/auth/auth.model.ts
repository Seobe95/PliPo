import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { signToken } from "@/lib/session";

interface IUser extends Document {
  id: string;
  username: string;
  nickname: string;
  hashedPassword?: string;
  setPassword: (password: string | Buffer) => Promise<void>;
  checkPassword: (password: string | Buffer) => Promise<boolean>;
  serialize: () => Record<string, any>;
  generateToken: () => Promise<string>;
}

interface IUserModel extends Model<IUser> {
  findByUsername: (username: string) => Promise<boolean>;
  findByNickname: (nickname: string) => Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  nickname: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

UserSchema.methods.setPassword = async function (
  this: IUser,
  password: string | Buffer
) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (
  this: IUser,
  password: string | Buffer
) {
  const result = await bcrypt.compare(password, this.hashedPassword as string);
  return result;
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = async function () {
  const token = await signToken({
    data: { _id: this.id, username: this.username, nickname: this.nickname },
    expiresIn: "7d",
  });

  return token
};

UserSchema.statics.findByUsername = async function (
  this: Model<IUser>,
  username: string
) {
  const user = await this.findOne({ username });

  return !!user;
};

UserSchema.statics.findByNickname = async function (
  this: Model<IUser>,
  nickname: string
) {
  const user = await this.findOne({ nickname });
  return !!user;
};

let User: IUserModel;
if (mongoose.models.User) {
  User = mongoose.model<IUser, IUserModel>("User");
} else {
  User = mongoose.model<IUser, IUserModel>("User", UserSchema);
}

export default User;
