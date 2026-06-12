import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vinto" },
      {
        name: "description",
        content:
          "Get in touch with Vinto for collaborations, projects, or a quick hello.",
      },
      { property: "og:title", content: "Contact — Vinto" },
      {
        property: "og:description",
        content: "Open to collaborations and new projects.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Contact />
    </div>
  ),
});
