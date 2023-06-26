interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return <section>{children}</section>;
}
