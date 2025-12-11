import { Component, inject, signal, computed } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotificationService } from "../../core/services/notification.service";
import { Notification } from "../../core/models/notification.model";

@Component({
  selector: "app-notifications",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./notifications.component.html",
})
export class NotificationsComponent {
  private notificationService = inject(NotificationService);

  // Signals
  notifications = this.notificationService.notifications; // Assuming this is a signal in service

  // FIX 1: Create the computed signal that was missing
  groupedNotifications = computed(() => {
    const list = this.notifications();
    if (!list) return [];
    // Simple grouping logic (example: just return list for now to fix error)
    return [{ label: "Recent", items: list }];
  });

  // FIX 2: Use '!n.read' instead of 'n.unread'
  unreadCount = computed(() => {
    return (
      this.notifications()?.filter((n: Notification) => !n.read).length ?? 0
    );
  });

  readCount = computed(() => {
    return (
      this.notifications()?.filter((n: Notification) => n.read).length ?? 0
    );
  });

  markAllRead() {
    // FIX 3: Ensure this method exists in your service (see next step)
    this.notificationService.markAllAsRead();
  }
}
