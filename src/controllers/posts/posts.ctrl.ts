import Post from "@/models/posts/posts.model";
import { PostDataParams } from "@/types/types";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

const {ObjectId} = mongoose.Types

const list = async () => {
  try {
    const posts = await Post.find().exec();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "포스트 리스트 조회 실패" },
      { status: 500 }
    );
  }
};

const write = async (request: Request) => {
  const { contents, youtubeLink }: PostDataParams = await request.json();
  const post = new Post({
    contents,
    youtubeLink,
  });

  try {
    await post.save();
    return NextResponse.json({ post }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "포스팅 실패", error: e },
      { status: 500 }
    );
  }
};

const read = async (request: Request) => {
  const url = request.url;
  const id = url.split("posts/")[1];
  if(!ObjectId.isValid(id)) {
    return NextResponse.json({message: "id가 일치하지 않습니다."}, {status: 400})
  }
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      return NextResponse.json(
        { message: "개별 포스트 조회 실패 - 포스트가 존재하지 않습니다." },
        { status: 404 }
      );
    }
    return NextResponse.json({ post }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "개별 포스트 조회 실패", error: e },
      { status: 500 }
    );
  }
};

const remove = async (request: Request) => {
  const url = request.url;
  const id = url.split("posts/")[1];
  if(!ObjectId.isValid(id)) {
    return NextResponse.json({message: "id가 일치하지 않습니다."}, {status: 400})
  }

  try {
    await Post.findByIdAndRemove(id).exec();
    const response = new NextResponse(undefined, { status: 204 });
    return response;
  } catch (e) {
    return NextResponse.json(
      { message: "포스트 삭제 에러", error: e },
      { status: 500 }
    );
  }
};

const update = async (request: Request) => {
  const url = request.url;
  const id = url.split("posts/")[1];

  if(!ObjectId.isValid(id)) {
    return NextResponse.json({message: "id가 일치하지 않습니다."}, {status: 400})
  }

  const { contents, youtubeLink }: PostDataParams = await request.json();

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { contents, youtubeLink },
      { new: true }
    ).exec();
    if (!post) {
      return NextResponse.json(
        { message: "포스트가 존재하지 않습니다." },
        { status: 404 }
      );
    }
    return NextResponse.json({ post }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "포스트 업데이트 에러" },
      { status: 500 }
    );
  }
};

export const posts = {
  list,
  read,
  write,
  remove,
  update,
};
