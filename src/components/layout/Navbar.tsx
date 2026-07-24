import React from "react";
import Link from "next/link";
import Container from "./Container";
import { navigationData } from "@/data/navigation";
// import { resumeData } from "@/data/resume";

export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav
        aria-label="Main Navigation"
        className="
          flex items-center justify-between
          w-full max-w-4xl
          rounded-full
          border border-white/20
          bg-white/60
          backdrop-blur-xl
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          px-4 py-2
          md:px-6 md:py-3
        "
      >
        {/* Brand Logo / Name */}
        <Link href="#home" className="text-base md:text-lg font-semibold tracking-tight">
          {navigationData.brandName}
        </Link>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-1">
          {navigationData.items.map((item) => {
            const isInternalPage = item.href.startsWith("/");
            const linkClasses =
              "text-sm font-medium px-3 py-1.5 rounded-full transition-colors hover:bg-black/5";

            return isInternalPage ? (
              <Link key={item.name} href={item.href} className={linkClasses}>
                {item.name}
              </Link>
            ) : (
              <a key={item.name} href={item.href} className={linkClasses}>
                {item.name}
              </a>
            );
          })}

          {/* Resume Button Link
          
            href={resumeData.downloadUrl || navigationData.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-black text-white px-4 py-1.5 text-sm font-medium"
            aria-label="Download Resume"
          >
            Resume
          </a> */}
        </div>

        {/* Mobile Navigation Toggle Placeholder */}
        <button
          type="button"
          aria-label="Toggle Mobile Navigation Menu"
          className="md:hidden rounded-full border border-white/30 px-3 py-1.5 text-xs font-medium bg-white/40"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}