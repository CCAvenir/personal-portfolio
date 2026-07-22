import React from "react";
import Section from "@/components/layout/Section";
import { certificationsData } from "@/data/certifications";

export default function Certificate() {
  return (
    <Section id="certificate" title="Certifications & Credentials">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="border p-4 space-y-2 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="text-base font-bold">{cert.title}</h3>
              <p className="text-xs font-semibold">{cert.issuer}</p>
              <p className="text-xs">{cert.year}</p>
            </div>
            {cert.credentialUrl && (
              <div className="pt-2">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border px-3 py-1 text-xs font-medium inline-block"
                >
                  Verify Credential
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
