import { motion } from "framer-motion";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "@/hooks/use-language";

const socials = [
  { icon: Mail, label: "Email", value: "vintodhammandaa@gmail.com", href: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=vintodhammandaa@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Vinto Dhammanda", href: "https://linkedin.com/in/vinto-dhammanda" }, // Ganti link ini dengan profil LinkedIn Anda
  { icon: Github, label: "GitHub", value: "Vinto Dhammanda", href: "https://github.com/VintoDSW" }, // Ganti link ini dengan profil GitHub Anda
  { icon: Instagram, label: "Instagram", value: "@vinto.dham", href: "https://www.instagram.com/vinto.dham/" }, // Ganti link ini dengan profil Instagram Anda
];

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} description={t("contact.desc")} />

        <div className="mt-16 mx-auto max-w-lg space-y-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="glass group flex items-center justify-between rounded-2xl p-5"
            >
              <div className="flex items-center gap-4">
                <div className="glass grid h-11 w-11 place-items-center rounded-xl">
                  <s.icon className="h-4 w-4 text-ink" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">{s.label}</div>
                  <div className="font-display text-lg text-ink">{s.value}</div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
