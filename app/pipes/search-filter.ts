import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/books';

@Pipe({
    name: 'searchpipe'
})

export class SearchPipe implements PipeTransform {
    transform(books: Book[], args: any): Book[] {
        if (args != undefined) {
            let resultantBooks = books.filter(book => book.bookTitle.toUpperCase().indexOf(args.toUpperCase()) !== -1);
            return resultantBooks;

        }
        else {
            return books;
        }
    }
}

