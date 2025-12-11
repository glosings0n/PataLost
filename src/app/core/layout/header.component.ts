import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-header",
  template: `
    <header class="app-header" [class.mobile-nav-open]="isMobileNavOpen">
      <div class="header-content">
        <a class="logo" routerLink="/">
          <img src="assets/logo.svg" alt="Logo" />
          <span>PataLost</span>
        </a>
        <nav class="main-nav">
          <a routerLink="/home">Home</a>
          <a routerLink="/items">My Items</a>
          <a routerLink="/community">Community</a>
          <a routerLink="/support">Support</a>
        </nav>
        <div class="user-actions">
          <button class="notification-btn">
            <span class="material-symbols-outlined">notifications</span>
            <span class="notification-dot"></span>
          </button>
          <button class="signin-btn">Sign In</button>
          <button class="menu-btn" (click)="toggleMobileNav()">
            <span class="material-symbols-outlined">{{ isMobileNavOpen ? 'close' : 'menu' }}</span>
          </button>
        </div>
      </div>
      <div class="mobile-nav">
        <a routerLink="/home">Home</a>
        <a routerLink="/items">My Items</a>
        <a routerLink="/community">Community</a>
        <a routerLink="/support">Support</a>
      </div>
    </header>
  `,
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class HeaderComponent {
  isMobileNavOpen = false;

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
}
