import { Component, ChangeDetectionStrategy, inject, input, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { ItemService } from '../../core/services/item.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PLACEHOLDER_IMAGE_URL } from '../../core/constants';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './item-detail.component.html',
  styles: `
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
export class ItemDetailComponent {
  private itemService = inject(ItemService);
  
  id = input<string>();
  placeholderUrl = PLACEHOLDER_IMAGE_URL;
  isZoomed = signal(false);

  private item$ = toObservable(this.id).pipe(
    switchMap(id => {
      if (id) {
        return this.itemService.getItemById(id);
      }
      return of(undefined);
    })
  );

  item = toSignal(this.item$);

  toggleZoom(): void {
    this.isZoomed.update(v => !v);
  }
}