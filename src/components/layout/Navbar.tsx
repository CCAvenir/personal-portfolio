import React from "react";
import Link from "next/link";
import Container from "./Container";
import { navigationData } from "@/data/navigation";
import { resumeData } from "@/data/resume";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b">
      <Container>
        <nav aria-label="Main Navigation" className="flex items-center justify-between py-4">
          {/* Brand Logo / Name */}
          <Link href="#home" className="text-xl font-bold">
            {navigationData.brandName}
          </Link>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationData.items.map((item) => {
              const isInternalPage = item.href.startsWith("/");
              return isInternalPage ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium"
                >
                  {item.name}
                </a>
              );
            })}

            {/* Resume Button Link */}
            <a
              href={resumeData.downloadUrl || navigationData.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="border px-3 py-1.5 text-sm font-medium"
              aria-label="Download Resume"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Toggle Placeholder */}
          <button
            type="button"
            aria-label="Toggle Mobile Navigation Menu"
            className="md:hidden border px-3 py-1.5 text-xs font-medium"
          >
            Menu
          </button>
        </nav>
      </Container>
    </header>
  );
}
