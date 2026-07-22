import React from "react";
import Section from "@/components/layout/Section";
import { heroData } from "@/data/hero";
import { contactData } from "@/data/contact";

export default function Hero() {
  return (
    <Section id="home">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Info Column */}
        <div className="space-y-4 flex-1">
          <div className="inline-block border px-2.5 py-1 text-xs font-semibold">
            Status: {heroData.currentStatus}
          </div>

          <h1 className="text-4xl font-bold">{heroData.name}</h1>
          <p className="text-xl font-semibold">{heroData.title}</p>
          <p className="text-base leading-relaxed">{heroData.shortIntroduction}</p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a href={heroData.actions.primary.href} className="border px-4 py-2 text-sm font-medium">
              {heroData.actions.primary.label}
            </a>
            <a href={heroData.actions.secondary.href} className="border px-4 py-2 text-sm font-medium">
              {heroData.actions.secondary.label}
            </a>
            <a href={heroData.actions.resume.href} className="border px-4 py-2 text-sm font-medium">
              {heroData.actions.resume.label}
            </a>
          </div>

          {/* Social Links Placeholder */}
          <div className="pt-4 border-t flex flex-wrap gap-4">
            <span className="text-xs font-semibold">Connect:</span>
            {contactData.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 border flex items-center justify-center shrink-0">
          <img
            src={heroData.profileImagePlaceholder}
            alt={`${heroData.name} Profile Placeholder`}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
