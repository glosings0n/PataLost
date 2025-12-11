import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  template: `
    <footer class="app-footer">
      <div class="footer-content">
        <span class="copyright">
          © 2025 PataLost. AI-Powered Community Lost & Found.
        </span>
        <nav class="footer-links">
          <a routerLink="/privacy">Privacy</a>
          <a routerLink="/terms">Terms</a>
          <a routerLink="/ai-moderation" class="ai-moderation-link">
            <span class="material-symbols-outlined">auto_awesome</span>
            AI Moderation
          </a>
        </nav>
      </div>
    </footer>
  `,
  standalone: true,
  imports: [RouterLink],
})
export class FooterComponent {}
