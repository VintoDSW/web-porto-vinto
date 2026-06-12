import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { GlassCard } from "@/components/portfolio/GlassCard";
import { GradientBackdrop } from "@/components/portfolio/GradientBackdrop";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Vinto" },
      {
        name: "description",
        content:
          "Stories, ideas, and knowledge from Vinto — practical insights on AI, technology, design, and lifestyle.",
      },
      { property: "og:title", content: "Blog — Vinto" },
      {
        property: "og:description",
        content: "Practical insights, inspiring stories, and guides that help you grow.",
      },
    ],
  }),
  component: BlogPage,
});

type CatKey = "all" | "aiTools" | "technology" | "design" | "lifestyle" | "culture";

const categoryKeys: Exclude<CatKey, "all">[] = ["aiTools", "technology", "design", "lifestyle", "culture"];

const categoryImages: Record<Exclude<CatKey, "all">, string> = {
  aiTools: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&sat=-100",
  technology: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&sat=-100",
  design: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&h=500&fit=crop&sat=-100",
  lifestyle: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=500&fit=crop&sat=-100",
  culture: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=500&fit=crop&sat=-100",
};

type Post = {
  id: string;
  date: string;
  readMin: number;
  category: Exclude<CatKey, "all">;
  image: string;
};

const posts: Post[] = [
  { id: "1", date: "2026-06-12", readMin: 6, category: "design", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=700&fit=crop&sat=-100" },
  { id: "2", date: "2026-06-02", readMin: 8, category: "aiTools", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=700&fit=crop&sat=-100" },
  { id: "3", date: "2026-05-24", readMin: 5, category: "design", image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&h=700&fit=crop&sat=-100" },
  { id: "4", date: "2026-05-14", readMin: 7, category: "technology", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=700&fit=crop&sat=-100" },
  { id: "5", date: "2026-05-02", readMin: 4, category: "lifestyle", image: "https://images.unsplash.com/photo-1495197359483-d092478c170a?w=1200&h=700&fit=crop&sat=-100" },
  { id: "6", date: "2026-04-18", readMin: 6, category: "culture", image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=700&fit=crop&sat=-100" },
];

function BlogPage() {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState<CatKey>("all");
  const [sort, setSort] = useState<"latest" | "oldest">("latest");

  const filtered = useMemo(() => {
    const list = active === "all" ? posts : posts.filter((p) => p.category === active);
    return [...list].sort((a, b) => {
      const da = new Date(a.date).getTime();
      const db = new Date(b.date).getTime();
      return sort === "latest" ? db - da : da - db;
    });
  }, [active, sort]);

  const catLabel = (c: CatKey) => (c === "all" ? t("portfolio.filter.all") : t(`blog.cat.${c}`));
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === "id" ? "id-ID" : "en-US", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div className="relative pt-28">
      {/* HERO */}
      <section className="relative overflow-hidden pb-24 pt-12">
        <GradientBackdrop />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-hairline glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            <span className="h-1 w-1 rounded-full bg-ink" />
            {t("blog.eyebrow")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 font-display text-5xl text-balance text-ink sm:text-6xl md:text-7xl"
          >
            {t("blog.heroA")} <em className="italic text-ink-muted">{t("blog.heroEm")}</em> {t("blog.heroB")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-base text-ink-muted sm:text-lg"
          >
            {t("blog.heroDesc")}
          </motion.p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative py-12 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow={t("blog.categoriesEyebrow")} title={t("blog.categoriesTitle")} align="left" />
        </div>
        <div className="mt-10 flex w-max gap-4 pr-4 animate-marquee hover:[animation-play-state:paused]">
          {[...categoryKeys, ...categoryKeys, ...categoryKeys, ...categoryKeys].map((c, i) => (
            <motion.button
              key={`${c}-${i}`}
              onClick={() => setActive(c)}
              className={cn(
                "group relative w-[280px] aspect-[4/3] flex-shrink-0 overflow-hidden rounded-3xl border border-hairline transition-transform hover:-translate-y-1",
                active === c && "ring-1 ring-ink",
              )}
            >
              <img
                src={categoryImages[c]}
                alt={catLabel(c)}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <div className="font-display text-2xl text-white">{catLabel(c)}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* LIST */}
      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl text-ink sm:text-5xl">{t("blog.listTitle")}</h2>
              <p className="mt-3 text-ink-muted">{t("blog.listDesc")}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {(["all", ...categoryKeys] as CatKey[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setActive(c)}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs transition-colors",
                      active === c
                        ? "bg-ink text-background"
                        : "glass text-ink-muted hover:text-ink",
                    )}
                  >
                    {catLabel(c)}
                  </button>
                ))}
              </div>
              <label className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-ink-muted">
                {t("blog.sort")}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as "latest" | "oldest")}
                  className="bg-transparent text-ink outline-none"
                >
                  <option value="latest">{t("blog.latest")}</option>
                  <option value="oldest">{t("blog.oldest")}</option>
                </select>
              </label>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <GlassCard interactive className="group h-full overflow-hidden p-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={t(`post.${p.id}.title`)}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="glass-strong absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">
                      {catLabel(p.category)}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-ink-muted">
                      <span>{formatDate(p.date)}</span>
                      <span className="h-1 w-1 rounded-full bg-ink-muted/60" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {p.readMin} {t("blog.minRead")}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-ink">{t(`post.${p.id}.title`)}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{t(`post.${p.id}.excerpt`)}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-ink/10 grid place-items-center text-xs font-medium text-ink">
                          V
                        </div>
                        <span className="text-sm text-ink">Vinto</span>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-sm text-ink transition-transform group-hover:translate-x-0.5"
                      >
                        {t("blog.read")} <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-16 text-center text-ink-muted">
              {t("blog.empty")}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
