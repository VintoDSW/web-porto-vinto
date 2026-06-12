import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Vinto" },
      {
        name: "description",
        content:
          "Technical proficiencies and tools Vinto uses across AI, UI/UX, and web development.",
      },
      { property: "og:title", content: "Skills — Vinto" },
      {
        property: "og:description",
        content: "A curated stack of technologies and design tools.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Skills />
    </div>
  ),
});
