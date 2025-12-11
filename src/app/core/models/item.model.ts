export interface Item {
  id?: string;
  ownerId: string;
  category: string;
  name: string;
  description: string;
  imageUrl?: string;
  location?: string;
  status: 'pending' | 'public' | 'rejected' | 'claimed';
  createdAt: any; // Or Date
  searchTags?: string[];
  aiAnalysis?: {
    isSafe: boolean;
    reason?: string;
  };
}
