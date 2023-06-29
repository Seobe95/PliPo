import { Footer, Header } from "@/components/common";
import { layoutContainer, wrapContent} from "./layout.css";
import localFont from 'next/font/local'

const titleFont = localFont({
  src: '../KyoboHandwriting2022khn.woff2',
  display : "swap"
})
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <div className={layoutContainer}>
          <Header titleFont={titleFont} isLogin={false} />
          <section className={wrapContent}>{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
