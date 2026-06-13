import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

export function LanguageToggle() {
  const { lang, setLang, mounted } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);

  if (!mounted) return <div className="h-10 w-[72px]" />;

  return (
    <div
      className="glass relative flex h-10 w-[72px] cursor-pointer items-center rounded-full p-1"
      onClick={() => {
        if (!isDragging) {
          setLang(lang === "en" ? "id" : "en");
        }
      }}
    >
      <motion.div
        className="absolute left-1 z-0 h-8 w-8 rounded-full bg-ink"
        initial={false}
        animate={{
          x: lang === "en" ? 0 : 32,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 32 }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(e, info) => {
          setTimeout(() => setIsDragging(false), 50);

          if (info.offset.x > 16 && lang === "en") {
            setLang("id");
          } else if (info.offset.x < -16 && lang === "id") {
            setLang("en");
          }
        }}
      />

      <div className="pointer-events-none relative z-10 flex w-full justify-between">
        <span
          className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-medium uppercase tracking-wider transition-colors ${
            lang === "en" ? "text-paper" : "text-ink-muted"
          }`}
        >
          EN
        </span>
        <span
          className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-medium uppercase tracking-wider transition-colors ${
            lang === "id" ? "text-paper" : "text-ink-muted"
          }`}
        >
          ID
        </span>
      </div>
    </div>
  );
}
