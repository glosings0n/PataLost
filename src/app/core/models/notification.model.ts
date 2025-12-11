export interface Notification {
  id: string;
  type: 'ai-match' | 'success' | 'warning' | 'info' | 'welcome';
  title: string;
  description: string;
  time: string;
  date: Date;
  read: boolean;
  imageUrl?: string;
  matchConfidence?: number;
  actionText?: string;
  subtitle?: string;
}
