import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { BOOKS } from '../data/books-mock';
import { Book } from '../models/books';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class InventoryService {

    constructor(private http: Http) {
    }

    loadInventory() {
        return BOOKS;
    }

    loadInventoryUsingPromise(): Promise<Book[]> {
        return new Promise(resolve =>
            setTimeout(resolve, 2000))
            .then(() => {
                return this.http.get('app/data/books.json').toPromise().then(response => response.json());
            });
    }
    loadInventoryUsingObservable(): Observable<Book[]> {
        return this.http.get('app/data/books.json').map(res => res.json());
    }
    getBookById(id: number){
        return this.loadInventory().find(book => book.bookId == id);
    }
}