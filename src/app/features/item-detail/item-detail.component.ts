import {
  Component,
  ChangeDetectionStrategy,
  inject,
  Input,
  signal,
  OnInit,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemService } from "../../core/services/item.service";
import { RecentItem } from "../../core/models/recent-item.model";
import { firstValueFrom } from "rxjs";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-item-detail",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./item-detail.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailComponent implements OnInit {
  @Input() id: string = "";

  private itemService = inject(ItemService);

  item = signal<RecentItem | null>(null);
  isZoomed = signal(false);
  placeholderUrl = "https://via.placeholder.com/400x300";

  ngOnInit() {
    if (this.id) {
      this.loadItem(this.id);
    }
  }

  toggleZoom() {
    this.isZoomed.set(!this.isZoomed());
  }

  private async loadItem(id: string) {
    try {
      const data = await firstValueFrom(this.itemService.getItemById(id));
      this.item.set(data || null);
    } catch (error) {
      console.error("Error loading item", error);
    }
  }
}
