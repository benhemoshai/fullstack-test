import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PublishersContainerComponent} from "./components/publishers-container/publishers-container.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PublishersContainerComponent, HttpClientModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
