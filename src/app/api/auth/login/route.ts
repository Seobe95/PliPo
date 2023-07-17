import connectMongo from "@/api/connectMongo";
import { auth } from "@/controllers/auth/auth.ctrl";

export async function POST(request: Request) {
  await connectMongo();
  const response = await auth.login(request);
  return response;
}
