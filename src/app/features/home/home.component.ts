import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ItemService } from '../../core/services/item.service';
import { PLACEHOLDER_IMAGE_URL } from '../../core/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styles: `
    .masonry-grid {
        column-count: 1;
        column-gap: 1.5rem;
    }
    @media (min-width: 640px) {
        .masonry-grid {
            column-count: 2;
        }
    }
    @media (min-width: 1024px) {
        .masonry-grid {
            column-count: 4;
        }
    }
    .masonry-item {
        break-inside: avoid;
        margin-bottom: 1.5rem;
    }
    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private itemService = inject(ItemService);
  recentItems = toSignal(this.itemService.getItems(), { initialValue: [] });
  placeholderUrl = PLACEHOLDER_IMAGE_URL;
}