import { motion } from "framer-motion";
import { GraduationCap, Heart, Target } from "lucide-react";
import portrait from "@/assets/profil-stikom-vinto.png";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/hooks/use-language";

export function About() {
  const { t } = useLanguage();
  const items = [
    { icon: GraduationCap, title: t("about.cards.education.title"), body: t("about.cards.education.body") },
    { icon: Heart, title: t("about.cards.interests.title"), body: t("about.cards.interests.body") },
    { icon: Target, title: t("about.cards.goals.title"), body: t("about.cards.goals.body") },
  ];
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} align="left" />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-strong overflow-hidden rounded-3xl p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={portrait}
                  alt="Vinto"
                  loading="lazy"
                  width={896}
                  height={1152}
                  className="h-full w-full object-cover object-top grayscale"
                />
              </div>
              <div className="px-4 py-4">
                <div className="font-display text-2xl text-ink">Vinto</div>
                <div className="text-sm text-ink-muted">{t("about.role")}</div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-2xl leading-snug text-balance text-ink sm:text-3xl"
            >
              {t("about.lead")}
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {items.map((it, i) => (
                <motion.div
                  key={it.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <GlassCard className="h-full p-5">
                    <it.icon className="h-5 w-5 text-ink" />
                    <div className="mt-4 font-display text-lg text-ink">{it.title}</div>
                    <p className="mt-1 text-sm text-ink-muted">{it.body}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
