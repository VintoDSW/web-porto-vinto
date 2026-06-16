import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import portrait from "@/assets/vinto-profil.png";
import { GradientBackdrop } from "./GradientBackdrop";
import { useLanguage } from "@/hooks/use-language";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.1 + i * 0.08, ease: EASE },
  }),
};

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <GradientBackdrop />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-hairline glass px-3 py-1 text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            <Sparkles className="h-3 w-3" />
            {t("hero.eyebrow")}
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 font-display text-5xl leading-[1.02] text-balance text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            {t("hero.titleA")} <em className="italic text-ink-muted">{t("hero.titleEm")}</em> {t("hero.titleB")}
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 max-w-xl text-balance text-base text-ink-muted sm:text-lg"
          >
            {t("hero.desc")}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px] hover:shadow-ink/40"
            >
              {t("hero.ctaPortfolio")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1G4wCZhU1RnkLCMQe-p_9VBH93wHnLrtB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-background transition-all hover:scale-[1.02] hover:shadow-[0_10px_40px_-10px] hover:shadow-ink/40"
            >
              {t("hero.ctaCv")}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://wa.me/6282342720005"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-all hover:scale-[1.02]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              {t("hero.ctaContact")}
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-ink-muted"
          >
            <span className="flex items-center gap-2">
              <span className="h-px w-8 bg-hairline" />
              {t("hero.available")}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <motion.div
              className="glass-strong relative overflow-hidden rounded-[2rem] p-3"
            >
              <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-sheen)" }} />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-ink/5 pointer-events-none">
                <img
                  src={portrait}
                  alt="Vinto portrait"
                  width={896}
                  height={1152}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">{t("hero.basedIn")}</div>
                    <div className="font-display text-xl">{t("hero.basedInValue")}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-[0.3em] opacity-70">{t("hero.focus")}</div>
                    <div className="font-display text-xl">AI · UI/UX</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:block z-10"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <motion.div
                className="glass rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-3 pointer-events-none">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">{t("hero.status")}</div>
                    <div className="text-sm font-medium text-ink">{t("hero.statusValue")}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-muted"
      >
        <Link to="/about" aria-label={t("hero.scroll")}>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
