import connectMongo from "@/api/connectMongo";
import { posts } from "@/controllers/posts/posts.ctrl";

export async function GET(request: Request) {
  await connectMongo();
  const result = await posts.read(request);
  return result;
}

export async function DELETE(request: Request) {
  await connectMongo();
  const result = await posts.remove(request);
  return result;
}

export async function PATCH(request: Request) {
  await connectMongo();
  const result = await posts.update(request);
  return result;
}
