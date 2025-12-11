import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Notification } from '../models/notification.model';

const today = new Date();
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const olderDate = new Date();
olderDate.setDate(olderDate.getDate() - 2);


const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'ai-match',
    title: "Match found for 'Lost Keys'",
    description: "Our AI has identified an item found near Central Park that strongly resembles your lost keys description.",
    time: '2h ago',
    date: today,
    read: false,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY4Aqh4JxmbH0cwdxIJjM7b7JN5EcNqrxRntBJY7-zf4mfxbBnv4ZvnCwxQmw9co12Ely_9ODreyVmx8F4mLpO7zpkowq5zMX2QjlPxGwdFlH1jsnT_oLhPhLgQw8MZYTMyh-8ZlRLBVmB5lNNEMJ-TEtcEiHC6ZOJ9Ys7EgWXElI9eDocgbYp8LScSrEflDbVoxZm3F_9Cye4ZJP5z2FLCZorxRclao_7-RxyMpA9xG9LWjjWwqQGpFk4sdG4z18AMr21Gc8HaY4',
    matchConfidence: 98,
    actionText: 'View Details'
  },
  {
    id: '2',
    type: 'success',
    title: 'Item Posted Successfully',
    description: 'Your listing for "Blue Backpack" is now live. We\'ll notify you when we find a match.',
    time: '5h ago',
    date: today,
    read: false,
  },
  {
    id: '3',
    type: 'warning',
    title: 'Photo Quality Issue',
    subtitle: 'Found Cat Listing',
    description: 'The image you uploaded is blurry. Clear photos increase match accuracy by 60%.',
    time: 'Yesterday',
    date: yesterday,
    read: false,
    actionText: 'Upload New Photo'
  },
  {
    id: '4',
    type: 'info',
    title: 'Search Tip',
    description: 'Adding a precise location pin to your lost item post increases recovery chances significantly.',
    time: 'Yesterday',
    date: yesterday,
    read: true,
  },
  {
    id: '5',
    type: 'welcome',
    title: 'Welcome to Lost&Found AI',
    description: 'Your profile is set up. Let AI help you connect with your community.',
    time: 'Oct 24',
    date: olderDate,
    read: true,
  }
];

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  getNotifications(): Observable<Notification[]> {
    return of(MOCK_NOTIFICATIONS);
  }
}
