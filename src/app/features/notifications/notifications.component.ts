import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs/interop';
import { NotificationService } from '../../core/services/notification.service';
import { Notification } from '../../core/models/notification.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './notifications.component.html',
  styles: `
    :host {
      display: block;
    }
    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  private notificationService = inject(NotificationService);
  
  notifications = toSignal(this.notificationService.getNotifications(), { initialValue: [] });

  groupedNotifications = computed(() => {
    const notifications = this.notifications();
    const groups: { label: string; notifications: Notification[] }[] = [];

    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const todayNotifications = notifications.filter(n => n.date.toDateString() === today.toDateString());
    const yesterdayNotifications = notifications.filter(n => n.date.toDateString() === yesterday.toDateString());
    const olderNotifications = notifications.filter(n => 
        n.date.toDateString() !== today.toDateString() && 
        n.date.toDateString() !== yesterday.toDateString()
    );

    if (todayNotifications.length > 0) {
      groups.push({ label: 'Today', notifications: todayNotifications });
    }
    if (yesterdayNotifications.length > 0) {
      groups.push({ label: 'Yesterday', notifications: yesterdayNotifications });
    }
    if (olderNotifications.length > 0) {
      groups.push({ label: 'Older', notifications: olderNotifications });
    }
    
    return groups;
  });
}