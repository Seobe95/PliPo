import { tempStyle } from "./layout.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={tempStyle} lang="ko">
      <body>{children}</body>
    </html>
  );
}
