import { layoutContainer } from "./layout.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import { Footer, Header } from "@/components/common";
import ClientHeader from "@/components/common/ClientHeader";
import { cookies } from "next/headers";
import { UserInfo } from "@/zustand/useAuthManegement";
config.autoAddCss = false;

const titleFont = localFont({
  src: "../KyoboHandwriting2022khn.woff2",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

// const HeaderClient = dynamic(() => import("@/components/common/ClientHeader"), {
//   ssr: false,
//   loading: () => <p>loading...</p>
// });

interface GetUserData {
  user: UserInfo
  isLogin: boolean
}

async function getUserData<T>() {
  const cookie = cookies();
  const token = cookie.get("access_token");
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.LOCAL_API_URL
      : process.env.DEPLOY_API_URL;
  const result = await fetch(`${url}api/auth/check`, {
    headers: {
      authorization: token ? `Bearer ${token.value}` : "",
    },
  });

  return result.json() as T;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getUserData<GetUserData>();

  return (
    <html lang="ko">
      <body>
        <div className={layoutContainer}>
          <Header titleFont={titleFont}>
            <ClientHeader users={data.user} />
          </Header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
