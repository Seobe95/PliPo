import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface YoutubeResponse {
  items: {
    snippet: {
      title: string;
    };
  }[];
}

export async function POST(request: NextRequest) {
  const { videoId } = (await request.json()) as { videoId: string };
  const youtubeKey = process.env.YOUTUBE_API_KEY;

  try {
    const { data } = await axios.get<YoutubeResponse>(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${youtubeKey}&part=snippet`
    );

    const title = data.items[0].snippet.title;

    return NextResponse.json({ title }, { status: 200 });
  } catch (e) {
    return NextResponse.json({message: "유효하지 않은 video id입니다."}, {status: 500})
  }
}
