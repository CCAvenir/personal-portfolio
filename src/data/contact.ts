import { ContactInfo, ContactFormField } from "@/types/contact";

export const contactData: ContactInfo = {
  email: "christian.avenir@example.com",
  phone: "+63 900 000 0000",
  location: "Philippines",
  github: "https://github.com/christian-avenir",
  linkedin: "https://linkedin.com/in/christian-avenir",
  facebook: "https://facebook.com/christian-avenir",
  portfolio: "https://christianavenir.dev",
  jobs180: "https://jobs180.com/profile/christian-avenir",
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/christian-avenir",
      label: "GitHub Profile",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/christian-avenir",
      label: "LinkedIn Profile",
    },
    {
      platform: "Facebook",
      url: "https://facebook.com/christian-avenir",
      label: "Facebook Profile",
    },
    {
      platform: "Jobs180",
      url: "https://jobs180.com/profile/christian-avenir",
      label: "Jobs180 Profile",
    },
  ],
};

export const contactFormFields: ContactFormField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Your Full Name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Subject of message",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Your message content...",
    required: true,
  },
];
