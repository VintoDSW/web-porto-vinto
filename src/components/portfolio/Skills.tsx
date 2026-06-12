import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { useLanguage } from "@/hooks/use-language";

const tools = ["Figma", "Lovable", "Bolt.new", "Vercel", "GitHub", "VS Code"];

export function Skills() {
  const { t } = useLanguage();
  const technical = [
    { name: t("skill.ai"), level: 85 },
    { name: t("skill.web"), level: 90 },
    { name: t("skill.uiux"), level: 88 },
    { name: t("skill.frontend"), level: 92 },
    { name: t("skill.prompt"), level: 95 },
    { name: t("skill.vibe"), level: 90 },
  ];
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          description={t("skills.desc")}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <GlassCard className="p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-2xl text-ink">{t("skills.technical")}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-ink-muted">{t("skills.disciplines")}</span>
            </div>
            <ul className="space-y-5">
              {technical.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-sm font-medium text-ink">{s.name}</span>
                    <span className="text-xs text-ink-muted">{s.level}%</span>
                  </div>
                  <div className="h-[3px] w-full overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-ink"
                    />
                  </div>
                </motion.li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-8">
            <div className="mb-6 flex items-baseline justify-between">
              <h3 className="font-display text-2xl text-ink">{t("skills.tools")}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-ink-muted">{t("skills.daily")}</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -3 }}
                  className="glass flex items-center justify-between rounded-xl px-4 py-4"
                >
                  <span className="font-display text-lg text-ink">{tool}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-muted">
              {t("skills.toolsNote")}
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
