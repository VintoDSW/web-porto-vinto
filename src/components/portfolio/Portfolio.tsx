import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Palette, Figma } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";
import n8nImg from "@/assets/n8n1_portfolio_vinto.png";
import hsoImg from "@/assets/HSO ICE CREAM CNY26_portofolio_vinto.png";
import flutterImg from "@/assets/flutter1_portfolio_vinto.png";
import webImg from "@/assets/webporto1-vinto.png";
import uiuxImg from "@/assets/uiux1_carelora_astungkarahoki.png";

type Cat = "All" | "Web" | "Mobile" | "UI/UX" | "AI" | "Design";

const filters: Cat[] = ["All", "Web", "Mobile", "UI/UX", "AI", "Design"];

export function Portfolio() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Cat>("All");

  const projects: { titleKey: string; descKey: string; stack: string[]; cat: Exclude<Cat, "All">; img: string; liveLink?: string; liveLabelKey?: string; githubLink?: string; canvaLink?: string; figmaLink?: string }[] = [
    {
      titleKey: "proj.sikom.title",
      descKey: "proj.sikom.desc",
      stack: ["website", "front-end", "landing page"],
      cat: "Web",
      img: webImg,
      liveLink: "https://portofolio1vinto.netlify.app/",
      githubLink: "https://github.com/VintoDSW/website-portfolio-pertama",
    },
    {
      titleKey: "proj.mobile.title",
      descKey: "proj.mobile.desc",
      stack: ["mobile", "front-end", "flutter"],
      cat: "Mobile",
      img: flutterImg,
      liveLabelKey: "portfolio.viewUI",
      liveLink: "https://drive.google.com/drive/folders/12qgGjjT-7jMvWK6nf-Znnr0ZDFG5RL6w?usp=sharing",
      githubLink: "https://github.com/VintoDSW/Tukareen_project",
    },
    {
      titleKey: "proj.ai.title",
      descKey: "proj.ai.desc",
      stack: ["AI Automation", "n8n", "telegram"],
      cat: "AI",
      img: n8nImg,
      liveLink: "https://t.me/Devfest_Vinto_Automation_bot",
    },
    {
      titleKey: "proj.innov.title",
      descKey: "proj.innov.desc",
      stack: ["UI/UX", "prototype", "team competition"],
      cat: "UI/UX",
      img: uiuxImg,
      liveLabelKey: "portfolio.viewUI",
      liveLink: "https://drive.google.com/drive/folders/12vyuse30jx_kkrgVaL-UeTcE35hIiQq2",
      figmaLink: "https://www.figma.com/design/XPlgZsePwDk9sIuP0NO65V/PROJECT-INVENTION-UNUD-2025--Copy-?node-id=537-2746&p=f",
    },
    {
      titleKey: "proj.hso.title",
      descKey: "proj.hso.desc",
      stack: ["Graphic Design", "Product Tag", "Seal"],
      cat: "Design",
      img: hsoImg,
      liveLink: "https://drive.google.com/drive/folders/1hW_n9BZxJtVoI6V_TzhGn754JTedxW0J",
      liveLabelKey: "portfolio.viewDesign",
      canvaLink: "https://www.canva.com/design/DAG-fmmzZoQ/c6u5vBFC0P5D4RJS1q3Gpw/edit",
    },
  ];

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);
  const label = (f: Cat) => (f === "All" ? t("portfolio.filter.all") : f);

  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          description={t("portfolio.desc")}
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition-colors",
                active === f ? "bg-ink text-background" : "glass text-ink-muted hover:text-ink",
              )}
            >
              {label(f)}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.titleKey}
                layout
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
              >
                <GlassCard interactive className="group h-full overflow-hidden p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.img}
                      alt={t(p.titleKey)}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">{p.cat}</div>
                        <h3 className="mt-1 font-display text-2xl text-ink">{t(p.titleKey)}</h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                    </div>
                    <p className="mt-3 text-sm text-ink-muted">{t(p.descKey)}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-hairline px-3 py-1 text-xs text-ink-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex gap-2">
                      <a
                        href={p.liveLink || "#"}
                        target={p.liveLink ? "_blank" : undefined}
                        rel={p.liveLink ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
                      >
                        {t(p.liveLabelKey || "portfolio.live")} <ArrowUpRight className="h-3 w-3" />
                      </a>
                      {p.figmaLink !== undefined ? (
                        <a
                          href={p.figmaLink || "#"}
                          target={p.figmaLink && p.figmaLink !== "#" ? "_blank" : undefined}
                          rel={p.figmaLink && p.figmaLink !== "#" ? "noopener noreferrer" : undefined}
                          className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-ink transition-transform hover:scale-105"
                        >
                          <Figma className="h-3 w-3" /> Figma
                        </a>
                      ) : p.canvaLink !== undefined ? (
                        <a
                          href={p.canvaLink || "#"}
                          target={p.canvaLink && p.canvaLink !== "#" ? "_blank" : undefined}
                          rel={p.canvaLink && p.canvaLink !== "#" ? "noopener noreferrer" : undefined}
                          className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-ink transition-transform hover:scale-105"
                        >
                          <Palette className="h-3 w-3" /> Canva
                        </a>
                      ) : (
                        <a
                          href={p.githubLink || "#"}
                          target={p.githubLink ? "_blank" : undefined}
                          rel={p.githubLink ? "noopener noreferrer" : undefined}
                          className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-ink transition-transform hover:scale-105"
                        >
                          <Github className="h-3 w-3" /> {t("portfolio.github")}
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
