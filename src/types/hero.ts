export interface HeroAction {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroInfo {
  name: string;
  title: string;
  shortIntroduction: string;
  currentStatus: string;
  profileImagePlaceholder: string;
  actions: {
    primary: HeroAction;
    secondary: HeroAction;
    resume: HeroAction;
  };
}
