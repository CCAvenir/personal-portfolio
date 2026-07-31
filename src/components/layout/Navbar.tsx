"use client";

import React, { useRef, useState } from "react";
import {
  Home,
  HouseHeart,
  User,
  UserStar,
  Folder,
  FolderOpen,
  Mail,
  MailOpen,
  Sun,
  Moon,
} from "lucide-react";
import { navigationData } from "@/data/navigation";

const ICONS: Record<
  string,
  {
    Default: React.ElementType;
    Hover: React.ElementType;
  }
> = {
  Home: {
    Default: Home,
    Hover: HouseHeart,
  },
  About: {
    Default: User,
    Hover: UserStar,
  },
  Projects: {
    Default: Folder,
    Hover: FolderOpen,
  },
  Contact: {
    Default: Mail,
    Hover: MailOpen,
  },
};

const THEME_KEY = "__theme__";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [spinCounts, setSpinCounts] = useState<Record<string, number>>({});

  const allNames = [...navigationData.items.map((i) => i.name), THEME_KEY];

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

    handleItemClick(THEME_KEY);
  }

  function resetIcons() {
    allNames.forEach((name) => {
      const el = iconRefs.current[name];

      if (el) {
        el.style.transform = "scale(1) translateY(0px)";
      }
    });
  }

  function focusIcon(hoverIndex: number) {
    resetIcons();

    const transformations = [
      { idx: hoverIndex - 2, scale: 1.1, translateY: 0 },
      { idx: hoverIndex - 1, scale: 1.25, translateY: -4 },
      { idx: hoverIndex, scale: 1.5, translateY: -8 },
      { idx: hoverIndex + 1, scale: 1.25, translateY: -4 },
      { idx: hoverIndex + 2, scale: 1.1, translateY: 0 },
    ];

    transformations.forEach(({ idx, scale, translateY }) => {
      const name = allNames[idx];
      const el = name ? iconRefs.current[name] : null;

      if (el) {
        el.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    });
  }

  function handleItemClick(name: string) {
    setSpinCounts((prev) => ({
      ...prev,
      [name]: (prev[name] ?? 0) + 1,
    }));
  }

  return (
    <header className="fixed bottom-8 inset-x-0 z-50 flex justify-center px-4">
      <nav
        ref={navRef}
        aria-label="Main Navigation"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetIcons}
        className="dock-nav flex items-end gap-5 px-6 py-2"
      >
        <div className="dock-glare-container">
          <div ref={glareRef} className="dock-glare" />
        </div>

        <div className="relative flex items-end gap-5 z-[3]">
          {navigationData.items.map((item, index) => {
            const {
              Default: DefaultIcon,
              Hover: HoverIcon,
            } = ICONS[item.name] ?? {
              Default: Home,
              Hover: HouseHeart,
            };

            const spinCount = spinCounts[item.name] ?? 0;

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
                  <span key={spinCount} className="dock-icon-yaw">
                    <span className="dock-icon-swap">
                      <DefaultIcon
                        className="icon-base icon-default w-7 h-7"
                        strokeWidth={2}
                      />

                      <HoverIcon
                        className="icon-base icon-hover w-7 h-7"
                        strokeWidth={2}
                      />
                    </span>
                  </span>
                </span>
              </a>
            );
          })}

          <button
            type="button"
            aria-label="Toggle Dark Mode"
            onMouseEnter={() => focusIcon(navigationData.items.length)}
            onClick={toggleTheme}
            className="dock-item dock-theme-item"
          >
            <span className="dock-tooltip">Theme</span>

            <span
              ref={(el) => {
                iconRefs.current[THEME_KEY] = el;
              }}
              className="dock-icon-wrap dock-theme-wrap"
            >
              <span
                key={spinCounts[THEME_KEY] ?? 0}
                className="dock-icon-yaw"
              >
                <span className="dock-theme-swap">
                  <Sun className="sun-icon w-6 h-6" strokeWidth={2.2} />
                  <Moon className="moon-icon w-6 h-6" strokeWidth={2.2} />
                </span>
              </span>
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}