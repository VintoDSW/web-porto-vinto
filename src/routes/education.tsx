import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/portfolio/Education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Vinto" },
      {
        name: "description",
        content:
          "Education history and academic journey of Vinto — from elementary school to university.",
      },
      { property: "og:title", content: "Education — Vinto" },
      {
        property: "og:description",
        content: "The academic path that shapes who I am.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <Education />
    </div>
  ),
});
