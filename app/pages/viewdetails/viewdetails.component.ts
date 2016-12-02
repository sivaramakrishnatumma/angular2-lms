import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Book } from '../../models/books';
import { InventoryService } from '../../providers/inventory.service';

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'viewdetails.component.html',
    styleUrls: ['viewdetails.component.css'],
    providers: [InventoryService]
})
export class ViewDetailsComponent implements OnInit {
    private book: Book;
    private bookId: number;
    constructor(private router: Router, private route: ActivatedRoute, private inventoryService: InventoryService) { }

    ngOnInit() { 
        this.route.params
            .map((params: Params) => this.inventoryService.getBookById(params['id']))
            .subscribe((book: Book) => this.book = book);
    }
}