import DefaultPage from "@/components/base/DefaultPage";
import SkeletonWriteBox from "@/components/skeleton/SkeletonWriteBox";
import dynamic from "next/dynamic";

const ClientWriteBox = dynamic(() => import("@/components/write/WriteBox"), {
  ssr: false,
  loading: () => <SkeletonWriteBox />
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
