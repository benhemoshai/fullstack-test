import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {Domain} from "../../../types";

@Component({
    selector: 'app-domain-card',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './domain-card.component.html',
    styleUrl: './domain-card.component.css'
})
export class DomainCardComponent {
    @Input() domain!: Domain;

    constructor() {
    }

    ngOnInit(): void {
    }
}
