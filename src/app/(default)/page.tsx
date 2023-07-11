import DefaultPage from "@/components/base/DefaultPage";

export default async function Home() {
  return <DefaultPage>초기 페이지</DefaultPage>;
}

export const runtime = "edge";

export const metadata = {
  title: "홈 | 플리포"
}