import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function LanguageToggle() {
  const { lang, toggle, mounted } = useLanguage();
  return (
    <button
      onClick={toggle}
      aria-label="Switch language"
      className="glass relative grid h-10 w-10 place-items-center rounded-full text-[11px] font-medium uppercase tracking-wider text-ink transition-transform hover:scale-105"
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={lang}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
          >
            {lang.toUpperCase()}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
