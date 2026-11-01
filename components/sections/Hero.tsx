import HeroImage from "@/components/ui/HeroImage";
import HeroSearch from "@/components/ui/HeroSearch";
import HeroCopy from "./HeroCopy";

// To use a real photograph: save it as public/assets/hero/source.jpg (or .png) and run `npm run images`.
const HERO_IMAGE_BASE = "/assets/hero/generated/hero";

/** Server component: the picture is plain HTML, only the text and the search form are client-side. */
export default function Hero() {
  return (
    <section className="hx" aria-labelledby="hero-heading">
      <div className="hx-bg" aria-hidden="true">
        <HeroImage base={HERO_IMAGE_BASE} />
      </div>
      <div className="hx-overlay" aria-hidden="true" />
      <HeroCopy />
      <HeroSearch delay={0.35} />
    </section>
  );
}
