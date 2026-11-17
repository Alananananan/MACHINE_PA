import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300 selection:bg-red-600 selection:text-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}