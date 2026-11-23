import Link from "next/link";
import { Fragment } from "react";

// Renders article text with inline [label](/path) internal links.
export default function Rich({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    parts.push(<Link key={m.index} href={m[2]}>{m[1]}</Link>);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => <Fragment key={i}>{p}</Fragment>)}</>;
}

/** Plain text (links stripped) — for schema and meta. */
export const plain = (text: string) => text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1");
