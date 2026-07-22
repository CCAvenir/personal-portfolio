"use client";

import React from "react";
import Section from "@/components/layout/Section";
import { contactData, contactFormFields } from "@/data/contact";

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold border-b pb-2">Contact Details</h3>

          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a href={`mailto:${contactData.email}`} className="underline">
                {contactData.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {contactData.phone}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {contactData.location}
            </p>
          </div>

          {/* All Links */}
          <div className="space-y-2 pt-2 border-t text-xs">
            <span className="font-semibold block">Profiles & Portfolios:</span>
            <ul className="space-y-1">
              <li>
                GitHub:{" "}
                <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="underline">
                  {contactData.github}
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="underline">
                  {contactData.linkedin}
                </a>
              </li>
              <li>
                Facebook:{" "}
                <a href={contactData.facebook} target="_blank" rel="noopener noreferrer" className="underline">
                  {contactData.facebook}
                </a>
              </li>
              <li>
                Portfolio:{" "}
                <a href={contactData.portfolio} target="_blank" rel="noopener noreferrer" className="underline">
                  {contactData.portfolio}
                </a>
              </li>
              <li>
                Jobs180:{" "}
                <a href={contactData.jobs180} target="_blank" rel="noopener noreferrer" className="underline">
                  {contactData.jobs180}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Placeholder Contact Form */}
        <div className="space-y-4 border p-4">
          <h3 className="text-lg font-semibold border-b pb-2">Send a Message</h3>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            {contactFormFields.map((field) => (
              <div key={field.name} className="space-y-1">
                <label htmlFor={field.name} className="block text-xs font-semibold">
                  {field.label} {field.required && "*"}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    rows={4}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full border p-2 text-sm"
                  />
                ) : (
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    className="w-full border p-2 text-sm"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="border px-4 py-2 text-sm font-medium w-full"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
