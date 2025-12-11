export interface RecentItem {
  id: string;
  status: 'FOUND' | 'LOST';
  imageUrl: string;
  mainImageUrl: string;
  mapImageUrl: string;
  title: string;
  time: string;
  description: string;
  location: string;
  verified?: boolean;
  ctaText?: string;
  imageAlt: string;
  minHeight?: string;
  dateFound: string;
  category: string;
  color: string;
  aiConfidence?: number;
}