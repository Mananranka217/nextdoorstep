import Link from "next/link";
import type { ReactNode } from "react";
import { faqGroups } from "@/content/faqs";

// Turns <nexus>text</nexus> in an answer into a link to the Nexus page.
function Answer({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /<nexus>(.*?)<\/nexus>/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    parts.push(text.slice(last, m.index));
    parts.push(
      <Link key={m.index} href="/nexus">
        {m[1]}
      </Link>,
    );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return <p>{parts}</p>;
}

export default function FaqGroups() {
  return (
    <div className="faq-groups">
      {faqGroups.map((group) => (
        <div className="faq-group" key={group.title}>
          <h3>{group.title}</h3>
          {group.items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <Answer text={item.a} />
            </details>
          ))}
        </div>
      ))}
    </div>
  );
}
