import {Component, Input} from '@angular/core';
import {DomainCardComponent} from "../domain-card/domain-card.component";
import {CommonModule} from "@angular/common";
import {Publisher} from "../../../types";

@Component({
  selector: 'app-publisher-card',
  standalone: true,
  imports: [
    DomainCardComponent,
    CommonModule
  ],
  templateUrl: './publisher-card.component.html',
  styleUrl: './publisher-card.component.css'
})
export class PublisherCardComponent {
  @Input() publisher!: Publisher;

  constructor() {
  }
}
