import Hero from '../../components/Hero';
import Cta from '../../components/Cta';

export default function HomePage() {
  return (
    <>
      <section id="hero" className="scroll-mt-16">
        <Hero />
      </section>
      <section id="cta" className="scroll-mt-16">
        <Cta />
      </section>
    </>
  );
}