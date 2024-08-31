import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publisher } from "./types";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class HttpService {
    private apiUrl = 'http://localhost:4300/api';
    
    constructor(private http: HttpClient) {}

    getPublishers(): Observable<Publisher[]> {
        return this.http.get<Publisher[]>(`${this.apiUrl}/publishers`);
    }

    addPublisher(publisher: Publisher): Observable<Publisher> {
        return this.http.post<Publisher>(`${this.apiUrl}/publishers`, publisher);
    }
}