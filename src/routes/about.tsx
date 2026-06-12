import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vinto" },
      {
        name: "description",
        content:
          "About Vinto — a Computer Technology student exploring AI, interface design, and modern web development.",
      },
      { property: "og:title", content: "About — Vinto" },
      {
        property: "og:description",
        content: "Designer, developer, and student with a quiet obsession for the details.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <About />
    </div>
  ),
});
