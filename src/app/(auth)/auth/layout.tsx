import { authContainer } from "@/app/(default)/layout.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
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
