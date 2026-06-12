export function GradientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute -top-32 left-1/4 h-[36rem] w-[36rem] rounded-full bg-ink/5 blur-3xl animate-float-slow dark:bg-white/5" />
      <div className="absolute -bottom-32 right-1/4 h-[40rem] w-[40rem] rounded-full bg-ink/[0.04] blur-3xl animate-float-slower dark:bg-white/[0.04]" />
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
