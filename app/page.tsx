import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div className="min-h-[80vh]">
      <Hero />
      <Projects title="Top Projects" />
    </div>
  );
}
