import { Component, inject, OnInit } from '@angular/core';
import { PublisherCardComponent } from './publisher-card/publisher-card.component';
import { CommonModule } from '@angular/common';
import { Domain, Publisher } from '../../types';
import { HttpService } from '../../http.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-publishers-container',
    standalone: true,
    imports: [PublisherCardComponent, CommonModule, FormsModule],
    templateUrl: './publishers-container.component.html',
    styleUrl: './publishers-container.component.css',
})
export class PublishersContainerComponent implements OnInit {
    constructor(private httpService: HttpService) {}

    publishers: Array<Publisher> = [];
    newPublisherName : string = "";
    newPublisherDomains: { url: ''; desktopAds: 0; mobileAds: 0; } | undefined;

    ngOnInit(): void {
        this.fetchData();
    }

    fetchData(){
        this.httpService.getPublishers().subscribe((data: Publisher[]) => {
            this.publishers = data;
        });
    }

    addPublisher() {
        if (this.newPublisherName.length != 0){
            const newPublisher: Publisher = {
                publisher : this.newPublisherName,
                domains : []
            };
            this.httpService.addPublisher(newPublisher).subscribe({
                next: (addedPublisher: Publisher) => {
                    this.publishers.push(addedPublisher);
                    console.log('Publisher added successfully:', addedPublisher);
                },
                error: (error) => {
                    console.error('Error adding publisher:', error);
                }
            });
        }
    }
        
    
    
}
