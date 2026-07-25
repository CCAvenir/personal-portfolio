"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const pillRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [activeItem, setActiveItem] = useState(navigationData.items[0].name);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function updatePill(name: string, smooth = true) {
    const btn = btnRefs.current[name];
    const pill = pillRef.current;
    if (!btn || !pill) return;

    pill.style.transition = smooth
      ? "transform .5s cubic-bezier(.34,1.2,.64,1), width .5s cubic-bezier(.34,1.2,.64,1)"
      : "none";
    pill.style.width = `${btn.offsetWidth}px`;
    pill.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  useEffect(() => {
    const t = setTimeout(() => updatePill(activeItem, false), 50);
    const onResize = () => updatePill(activeItem, false);
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(name: string) {
    setActiveItem(name);
    updatePill(name, true);
  }

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
    setTimeout(() => updatePill(activeItem, true), 100);
  }

  return (
    <header className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        onMouseMove={handleMouseMove}
        className="dock-nav flex items-center gap-1 px-2 py-2"
      >
        <div className="dock-glare-container">
          <div ref={glareRef} className="dock-glare" />
        </div>

        <div className="relative flex items-center gap-1 z-[3]">
          <div ref={pillRef} className="dock-pill" />

          {navigationData.items.map((item) => {
            const Icon = ICONS[item.name] ?? Home;
            const isActive = item.name === activeItem;

            return (
              
                key={item.name}
                href={item.href}
                ref={(el) => {
                  btnRefs.current[item.name] = el;
                }}
                onClick={() => handleSelect(item.name)}
                className={`dock-btn ${isActive ? "dock-btn-active" : ""}`}
              >
                <span className="dock-btn-content">
                  <Icon className="w-5 h-5" strokeWidth={2.25} />
                  <span>{item.name}</span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="dock-divider" />

        <button
          type="button"
          aria-label="Toggle Dark Mode"
          onClick={toggleTheme}
          className="dock-theme-btn"
        >
          {theme === "light" ? (
            <Sun className="w-5 h-5" strokeWidth={2.2} />
          ) : (
            <Moon className="w-5 h-5" strokeWidth={2.2} />
          )}
        </button>
      </nav>
    </header>
  );
}