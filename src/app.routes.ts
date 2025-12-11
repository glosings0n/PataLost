import { Routes } from '@angular/router';
import { HomeComponent } from './app/features/home/home.component';
import { ItemDetailComponent } from './app/features/item-detail/item-detail.component';
import { AuthComponent } from './app/features/auth/auth.component';
import { MainLayoutComponent } from './app/layout/main-layout/main-layout.component';
import { NotificationsComponent } from './app/features/notifications/notifications.component';

export const routes: Routes = [
    { path: 'login', component: AuthComponent, title: 'PataLost - Welcome' },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent, title: 'PataLost - Home' },
            { path: 'item/:id', component: ItemDetailComponent, title: 'PataLost - Item Detail' },
            { path: 'notifications', component: NotificationsComponent, title: 'PataLost - Notifications' }
        ]
    }
];
