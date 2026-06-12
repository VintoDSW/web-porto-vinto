import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "@/hooks/use-language";

const links = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/skills", key: "nav.skills" },
  { to: "/portfolio", key: "nav.portfolio" },
  { to: "/more", key: "nav.more" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const matchRoute = useMatchRoute();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2 transition-all duration-500",
          scrolled ? "glass-strong" : "glass",
        )}
      >
        <Link to="/" className="flex items-center gap-2 px-3 py-1">
          <span className="font-display text-2xl text-ink">Vinto</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = !!matchRoute({ to: l.to, fuzzy: false });
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm transition-colors",
                    active ? "text-ink" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-ink/10 dark:bg-white/10"
                    />
                  )}
                  {t(l.key)}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="glass grid h-10 w-10 place-items-center rounded-full md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={t("nav.menu")}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong absolute left-4 right-4 top-20 rounded-3xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => {
                const active = !!matchRoute({ to: l.to, fuzzy: false });
                return (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm transition-colors",
                        active
                          ? "bg-ink/10 text-ink dark:bg-white/10"
                          : "text-ink-muted hover:text-ink",
                      )}
                    >
                      {t(l.key)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
