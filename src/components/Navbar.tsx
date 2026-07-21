import React from "react";

// ==================================================
// TYPES & DATA
// ==================================================
interface NavItem {
  name: string;
  href: string;
}

const navigation: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
];

// ==================================================
// NAVBAR COMPONENT
// ==================================================
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b">
      <nav aria-label="Main Navigation" className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#home" className="text-xl font-bold">
          Christian Avenir
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium"
            >
              {item.name}
            </a>
          ))}

          {/* Resume Button Placeholder */}
          <a
            href="#resume"
            className="border px-3 py-1.5 text-sm font-medium"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button Placeholder */}
        <button
          type="button"
          aria-label="Toggle Navigation Menu"
          className="md:hidden border px-3 py-1.5 text-xs font-medium"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
