"use client";

import dynamic from "next/dynamic";
import { layoutContainer } from "./layout.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import localFont from "next/font/local";
import { Footer, Header } from "@/components/common";
config.autoAddCss = false;

const titleFont = localFont({
  src: "../KyoboHandwriting2022khn.woff2",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const HeaderClient = dynamic(() => import("@/components/common/ClientHeader"), {
  ssr: false,
  loading: () => <p>loading...</p>
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <div className={layoutContainer}>
          <Header titleFont={titleFont}>
            <HeaderClient />
          </Header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
