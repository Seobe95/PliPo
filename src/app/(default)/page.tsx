import DefaultPage from "@/components/base/DefaultPage";
import dynamic from "next/dynamic";

const ClientWriteBox = dynamic(() => import("@/components/write/WriteBox"), {
  ssr: false,
  loading: () => <p>loading...</p>,
});

export default async function Home() {
  return (
    <DefaultPage>
      <ClientWriteBox />
    </DefaultPage>
  );
}

export const runtime = "edge";

export const metadata = {
  title: "홈 | 플리포",
};
