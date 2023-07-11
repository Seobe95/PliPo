import { wrapContent } from "@/app/(default)/layout.css";
import { container } from "@/app/(default)/page.css";

interface DefaultPageProps {
  children: React.ReactNode;
}

export default function DefaultPage({ children }: DefaultPageProps) {
  return (
    <section className={wrapContent}>
      <div className={container}>{children}</div>
    </section>
  );
}
