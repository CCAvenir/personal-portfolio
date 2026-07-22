import React from "react";
import Link from "next/link";
import Container from "./Container";
import { navigationData } from "@/data/navigation";
import { contactData } from "@/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <Container className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Brand & Quick Bio */}
          <div className="space-y-2">
            <p className="text-lg font-bold">{navigationData.brandName}</p>
            <p className="text-xs">Web Developer | Portfolio Architecture Template</p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap gap-4">
            {navigationData.items.map((item) => (
              item.href.startsWith("/") ? (
                <Link key={item.name} href={item.href} className="text-xs font-medium">
                  {item.name}
                </Link>
              ) : (
                <a key={item.name} href={item.href} className="text-xs font-medium">
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {contactData.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium"
                aria-label={social.label}
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t pt-4 text-xs gap-4">
          <p>&copy; {currentYear} {navigationData.brandName}. All rights reserved.</p>
          <a href="#home" className="font-medium">
            Back to Top &uarr;
          </a>
        </div>
      </Container>
    </footer>
  );
}
