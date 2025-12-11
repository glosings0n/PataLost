import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { ItemService } from "../../core/services/item.service";
import { PLACEHOLDER_IMAGE_URL } from "../../core/constants";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private itemService = inject(ItemService);
  recentItems = toSignal(this.itemService.getItems(), { initialValue: [] });
  placeholderUrl = PLACEHOLDER_IMAGE_URL;
}
