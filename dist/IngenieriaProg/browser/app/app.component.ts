import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalMenuComponent } from "./Components/global-menu/global-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'IngenieriaProg';
}
