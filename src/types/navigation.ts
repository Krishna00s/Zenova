export interface NavLinkItem {
  label: string;
  href: string;
  badge?: string;
  isExternal?: boolean;
}

export interface NavSection {
  title: string;
  items: NavLinkItem[];
}
