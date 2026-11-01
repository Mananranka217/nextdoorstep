import FadeUp from "./FadeUp";

type Props = {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
  id?: string;
};

export default function SectionHeader({ eyebrow, title, accent, sub, id }: Props) {
  return (
    <FadeUp className="communities-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>
        {title}
        {accent ? <> <span>{accent}</span></> : null}
      </h2>
      {sub ? <p className="communities-subhead">{sub}</p> : null}
    </FadeUp>
  );
}
