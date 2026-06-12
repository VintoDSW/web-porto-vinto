import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { MoreInfo } from "@/components/portfolio/MoreInfo";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinto — Building Digital Experiences with AI & Technology" },
      {
        name: "description",
        content:
          "Personal portfolio of Vinto — Computer Technology student crafting digital experiences through AI, UI/UX design, and modern web development.",
      },
      { property: "og:title", content: "Vinto — Digital Experiences with AI & Technology" },
      {
        property: "og:description",
        content: "AI · UI/UX · Web Development · Prompt Engineering.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <MoreInfo />
      <Contact />
    </>
  );
}
