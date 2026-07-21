import React from "react";

// ==================================================
// TYPES & DATA
// ==================================================
interface ContactDetail {
  label: string;
  value: string;
  link?: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

const contactDetails: ContactDetail[] = [
  { label: "Email", value: "avenirchristian22@gmail.com", link: "mailto:avenirchristian22@gmail.com" },
  { label: "Phone", value: "0966-952-3502", link: "tel:09669523502" },
  { label: "Location", value: "San Fernando, Pampanga, Philippines" },
  { label: "Portfolio", value: "https://tempport-avenir.carrd.co/", link: "https://tempport-avenir.carrd.co/" },
  { label: "Jobs180", value: "https://avenirchristian.jobs180.com/", link: "https://avenirchristian.jobs180.com/" },
];

const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/CCAvenir" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/christian-avenir-043257299/" },
  { platform: "Facebook", url: "https://facebook.com" },
  { platform: "Email", url: "mailto:avenirchristian22@gmail.com" },
];

// ==================================================
// FOOTER COMPONENT
// ==================================================
export default function Footer() {
  return (
    <footer id="contact" className="space-y-6 pt-4 pb-12 border-t">
      {/* Resume Section Anchor Placeholder */}
      <div id="resume" className="space-y-2">
        <h2 className="text-2xl font-bold">Contact & Resume</h2>
        <p className="text-sm">
          Resume Download Placeholder:{" "}
          <a href="#resume" className="underline font-medium">
            Download Christian Avenir&apos;s Resume
          </a>
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-2">
        {contactDetails.map((detail) => (
          <p key={detail.label} className="text-sm">
            <span className="font-semibold">{detail.label}: </span>
            {detail.link ? (
              <a href={detail.link} className="underline">
                {detail.value}
              </a>
            ) : (
              detail.value
            )}
          </p>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap gap-4 pt-2">
        {socialLinks.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            aria-label={`${social.platform} link`}
            className="border px-3 py-1.5 text-xs font-medium"
          >
            {social.platform}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-xs pt-4 border-t">
        © {new Date().getFullYear()} Christian Avenir. All rights reserved.
      </p>
    </footer>
  );
}
