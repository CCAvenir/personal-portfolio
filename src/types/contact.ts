export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  facebook: string;
  portfolio: string;
  jobs180: string;
  socialLinks: SocialLink[];
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}
