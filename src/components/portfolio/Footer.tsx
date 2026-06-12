import { ArrowUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
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

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative border-t border-hairline py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl text-ink">Vinto</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {t(l.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <span className="text-xs text-ink-muted">© {new Date().getFullYear()} Vinto</span>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t("common.backToTop")}
            className="glass grid h-10 w-10 place-items-center rounded-full transition-transform hover:scale-105"
          >
            <ArrowUp className="h-4 w-4 text-ink" />
          </button>
        </div>
      </div>
    </footer>
  );
}
