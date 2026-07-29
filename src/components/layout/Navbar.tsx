"use client";

import React, { useRef, useState } from "react";
import { Home, User, FolderKanban, Mail, Sun, Moon } from "lucide-react";
import { navigationData } from "@/data/navigation";

const ICONS: Record<string, React.ElementType> = {
  Home: Home,
  About: User,
  Projects: FolderKanban,
  Contact: Mail,
};

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [spinningItem, setSpinningItem] = useState<string | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const nav = navRef.current;
    const glare = glareRef.current;
    if (!nav || !glare) return;
    const rect = nav.getBoundingClientRect();
    glare.style.setProperty("--x", `${e.clientX - rect.left}px`);
    glare.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }

  // ---- Dock magnification effect ----
  function resetIcons() {
    navigationData.items.forEach((item) => {
      const el = iconRefs.current[item.name];
      if (el) el.style.transform = "scale(1) translateY(0px)";
    });
  }

  function focusIcon(hoverIndex: number) {
    resetIcons();
    const names = navigationData.items.map((i) => i.name);

    const transformations = [
      { idx: hoverIndex - 2, scale: 1.1, translateY: 0 },
      { idx: hoverIndex - 1, scale: 1.25, translateY: -4 },
      { idx: hoverIndex, scale: 1.5, translateY: -8 },
      { idx: hoverIndex + 1, scale: 1.25, translateY: -4 },
      { idx: hoverIndex + 2, scale: 1.1, translateY: 0 },
    ];

    transformations.forEach(({ idx, scale, translateY }) => {
      const name = names[idx];
      const el = name ? iconRefs.current[name] : null;
      if (el) {
        el.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    });
  }

  function handleItemClick(name: string) {
    setSpinningItem(name);
  }

  return (
    <header className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetIcons}
        className="dock-nav flex items-end gap-2 px-3 py-2"
      >
        <div className="dock-glare-container">
          <div ref={glareRef} className="dock-glare" />
        </div>

        <div className="relative flex items-end gap-2 z-[3]">
          {navigationData.items.map((item, index) => {
            const Icon = ICONS[item.name] ?? Home;
            const isSpinning = spinningItem === item.name;

            return (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => focusIcon(index)}
                onClick={() => handleItemClick(item.name)}
                className="dock-item"
              >
                <span className="dock-tooltip">{item.name}</span>
                <span
                  ref={(el) => {
                    iconRefs.current[item.name] = el;
                  }}
                  className="dock-icon-wrap"
                >
                  <Icon
                    className={`w-6 h-6 ${isSpinning ? "dock-icon-spin" : ""}`}
                    strokeWidth={2}
                    onAnimationEnd={() => setSpinningItem(null)}
                  />
                </span>
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
          className="dock-theme-btn"
        >
          <Sun className="sun-icon w-5 h-5" strokeWidth={2.2} />
          <Moon className="moon-icon w-5 h-5" strokeWidth={2.2} />
        </button>
      </nav>
    </header>
  );
}