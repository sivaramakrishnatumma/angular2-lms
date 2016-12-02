import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { InventoryService } from '../../providers/inventory.service';

import { Book } from '../../models/books';
 
@Component({
    moduleId: module.id,
    selector: 'inventory',
    templateUrl: 'inventory.component.html',
    styleUrls: ['inventory.component.css'],
    providers: [InventoryService]
})
export class InventoryComponent implements OnInit {
    private books: Book[];
    private sortByKey: string;
    constructor(private inventoryService:InventoryService, private router: Router) { }

    ngOnInit() { 
        this.sortByKey = "bookId";
        // this.inventoryService.loadInventoryUsingPromise().then(response => {
        //     this.books = response;
        // })

        this.inventoryService.loadInventoryUsingObservable().subscribe(books => {
            this.books = books;
        }, error => {});
    }

    openDetails(id: number){
        this.router.navigate(['/reports']);
    }
}