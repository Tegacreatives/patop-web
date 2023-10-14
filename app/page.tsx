import Hero from "@/components/Hero";
import HeroBanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div>
      <Hero />
      <Projects title="Top Projects" />
    </div>
  );
}
