import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { useLanguage } from "@/hooks/use-language";

const entries = [
  { key: "entry4", current: true },
  { key: "entry3", current: false },
  { key: "entry2", current: false },
  { key: "entry1", current: false },
];

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/more"
            className="group mb-12 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("education.backToMore")}
          </Link>
        </motion.div>

        <SectionHeading
          eyebrow={t("education.eyebrow")}
          title={t("education.title")}
          description={t("education.desc")}
        />

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-hairline md:left-1/2 md:block" />

          <div className="flex flex-col gap-12">
            {entries.map((entry, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={entry.key}
                  initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Desktop layout — alternating sides */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-8">
                    {/* Left column */}
                    <div className={isEven ? "flex justify-end" : ""}>
                      {isEven ? (
                        <TimelineCard entry={entry} t={t} />
                      ) : (
                        <div className="flex h-full items-center justify-end pr-4 pt-4">
                          <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                            {t(`education.${entry.key}.period`)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div className="relative flex flex-col items-center">
                      <div className={`grid h-10 w-10 place-items-center rounded-full ${entry.current ? "bg-ink dark:bg-white" : "glass border border-hairline"}`}>
                        <GraduationCap className={`h-4 w-4 ${entry.current ? "text-background" : "text-ink"}`} />
                      </div>
                    </div>

                    {/* Right column */}
                    <div className={!isEven ? "" : ""}>
                      {!isEven ? (
                        <TimelineCard entry={entry} t={t} />
                      ) : (
                        <div className="flex h-full items-center pl-4 pt-4">
                          <span className="text-xs uppercase tracking-[0.18em] text-ink-muted">
                            {t(`education.${entry.key}.period`)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout — single column */}
                  <div className="md:hidden">
                    <TimelineCard entry={entry} t={t} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  entry,
  t,
}: {
  entry: { key: string; current: boolean };
  t: (k: string) => string;
}) {
  return (
    <GlassCard className="max-w-lg p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-ink">
            {t(`education.${entry.key}.school`)}
          </h3>
          <p className="mt-1 text-sm font-medium text-ink-muted">
            {t(`education.${entry.key}.degree`)}
          </p>
        </div>
        {entry.current && (
          <span className="shrink-0 rounded-full bg-ink/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink dark:bg-white/10">
            {t("education.current")}
          </span>
        )}
      </div>

      <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted md:hidden">
        <MapPin className="h-3 w-3" />
        {t(`education.${entry.key}.period`)}
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        {t(`education.${entry.key}.desc`)}
      </p>
    </GlassCard>
  );
}
