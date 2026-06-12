import { createFileRoute } from "@tanstack/react-router";
import { MoreInfo } from "@/components/portfolio/MoreInfo";

export const Route = createFileRoute("/more")({
  head: () => ({
    meta: [
      { title: "More — Vinto" },
      {
        name: "description",
        content:
          "Education, certifications, achievements, organizations, and interests of Vinto.",
      },
      { property: "og:title", content: "More — Vinto" },
      {
        property: "og:description",
        content: "Beyond the work — credentials, communities, and hobbies.",
      },
    ],
  }),
  component: () => (
    <div className="pt-24">
      <MoreInfo />
    </div>
  ),
});
