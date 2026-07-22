import React, { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-12 border-b ${className}`}>
      <Container>
        {title && (
          <header className="mb-6 space-y-1">
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="text-sm font-medium">{subtitle}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
