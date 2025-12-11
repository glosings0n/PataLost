import { Routes } from '@angular/router';
import { HomeComponent } from './app/features/home/home.component';
import { ItemDetailComponent } from './app/features/item-detail/item-detail.component';
import { NotificationsComponent } from './app/features/notifications/notifications.component';
import { AuthComponent } from './app/features/auth/auth.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'auth', component: AuthComponent },
  { path: '**', redirectTo: '' }
];
