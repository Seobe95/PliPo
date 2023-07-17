import connectMongo from "@/api/connectMongo";
import { posts } from "@/controllers/posts/posts.ctrl";

/**GET /api/posts */
export async function GET() {
  const result = await posts.list();
  return result
}

/**
 * POST /api/posts
 * {
 *  contents: "내용",
 *  youtubeLink: "유튜브 링크",
 * }
 */
export async function POST(request: Request) {
  await connectMongo();
  const result = await posts.write(request);
  return result;
}
