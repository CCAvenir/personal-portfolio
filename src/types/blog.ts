export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  isComingSoon?: boolean;
}
