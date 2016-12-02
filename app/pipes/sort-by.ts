import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/books';

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    transform(books: Book[], args: any): Book[] {
        // checks array is defined or not
        if (books != undefined) {
            //sort the array based on sortPredicate
            books.sort(function (a, b) {
                if (a[args] < b[args])
                    return -1;
                if (a[args] > b[args])
                    return 1;
                return 0;
            });
        }
        return books;
    }
}