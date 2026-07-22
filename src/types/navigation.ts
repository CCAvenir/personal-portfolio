export interface NavigationItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

export interface NavigationData {
  brandName: string;
  items: NavigationItem[];
  resumeHref: string;
}
