import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { forwardRef, type ReactNode } from "react";

type Props = HTMLMotionProps<"div"> & { interactive?: boolean; children?: ReactNode };

export const GlassCard = forwardRef<HTMLDivElement, Props>(
  ({ className, interactive, children, ...rest }, ref) => (
    <motion.div
      ref={ref}
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={cn(
        "glass relative overflow-hidden rounded-2xl",
        interactive && "cursor-pointer",
        className,
      )}
      {...rest}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-sheen)" }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  ),
);
GlassCard.displayName = "GlassCard";
