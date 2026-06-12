import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Lightbulb,
  Music,
  Users,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GlassCard } from "./GlassCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLanguage } from "@/hooks/use-language";

export function MoreInfo() {
  const { t } = useLanguage();
  const cards = [
    { icon: GraduationCap, title: t("more.cards.education.title"), text: t("more.cards.education.body") },
    { icon: Award, title: t("more.cards.certs.title"), text: t("more.cards.certs.body") },
    { icon: Users, title: t("more.cards.orgs.title"), text: t("more.cards.orgs.body") },
    { icon: Lightbulb, title: t("more.cards.achv.title"), text: t("more.cards.achv.body") },
    { icon: BookOpen, title: t("more.cards.interests.title"), text: t("more.cards.interests.body") },
    { icon: Music, title: t("more.cards.hobbies.title"), text: t("more.cards.hobbies.body") },
  ];
  const stats = [
    { label: t("more.stats.projects"), value: 24, suffix: "+" },
    { label: t("more.stats.tech"), value: 30, suffix: "+" },
    { label: t("more.stats.years"), value: 3, suffix: "" },
    { label: t("more.stats.certs"), value: 8, suffix: "" },
  ];

  return (
    <section id="more" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={t("more.eyebrow")} title={t("more.title")} />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <GlassCard interactive className="h-full p-6">
                <div className="glass grid h-11 w-11 place-items-center rounded-xl">
                  <c.icon className="h-5 w-5 text-ink" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{c.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <GlassCard className="mt-16 p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="font-display text-5xl text-ink sm:text-6xl">
                  <AnimatedCounter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-ink-muted">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
