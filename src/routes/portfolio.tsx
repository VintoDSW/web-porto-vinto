import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Vinto" },
      {
        name: "description",
        content:
          "Selected projects by Vinto across web, mobile, UI/UX, and AI — carefully crafted.",
      },
      { property: "og:title", content: "Portfolio — Vinto" },
      {
        property: "og:description",
        content: "Selected work spanning web, mobile, design, and AI.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Portfolio />
    </div>
  ),
});
