import { authContainer } from "@/app/(default)/layout.css";

interface layoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: layoutProps) {
  return (
    <html>
      <body>
        <section className={authContainer}>{children}</section>
      </body>
    </html>
  );
}
