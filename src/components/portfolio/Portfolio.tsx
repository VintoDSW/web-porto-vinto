import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";

type Cat = "All" | "Web" | "Mobile" | "UI/UX" | "AI";

const filters: Cat[] = ["All", "Web", "Mobile", "UI/UX", "AI"];

export function Portfolio() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Cat>("All");

  const projects: { titleKey: string; descKey: string; stack: string[]; cat: Exclude<Cat, "All">; img: string }[] = [
    {
      titleKey: "proj.sikom.title",
      descKey: "proj.sikom.desc",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      cat: "Web",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&sat=-100",
    },
    {
      titleKey: "proj.mobile.title",
      descKey: "proj.mobile.desc",
      stack: ["Figma", "Prototyping", "Design System"],
      cat: "Mobile",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&sat=-100",
    },
    {
      titleKey: "proj.ai.title",
      descKey: "proj.ai.desc",
      stack: ["AI", "React", "LLMs"],
      cat: "AI",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&sat=-100",
    },
    {
      titleKey: "proj.innov.title",
      descKey: "proj.innov.desc",
      stack: ["UX Research", "Prototype", "AI"],
      cat: "UI/UX",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop&sat=-100",
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
                "relative rounded-full px-4 py-2 text-sm transition-colors",
                active === f ? "text-background" : "glass text-ink-muted hover:text-ink",
              )}
            >
              {active === f && (
                <motion.span
                  layoutId="filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
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
                        href="#"
                        className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-105"
                      >
                        {t("portfolio.live")} <ArrowUpRight className="h-3 w-3" />
                      </a>
                      <a
                        href="#"
                        className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-ink transition-transform hover:scale-105"
                      >
                        <Github className="h-3 w-3" /> {t("portfolio.github")}
                      </a>
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
