import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visible = new Map<string, number>();

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible.set(id, entry.intersectionRatio);
          let topId = ids[0];
          let topRatio = 0;
          visible.forEach((ratio, key) => {
            if (ratio > topRatio) {
              topRatio = ratio;
              topId = key;
            }
          });
          if (topRatio > 0) setActive(topId);
        },
        { threshold: [0.2, 0.4, 0.6], rootMargin: "-80px 0px -40% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}
