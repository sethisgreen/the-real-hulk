import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { IBook } from './book';
import { BookFilterPipe } from './book-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { BookService } from './book.service';

@Component({
    templateUrl: 'app/books/book-list.component.html',
    styleUrls: ['app/books/book-list.component.css'],
    pipes: [BookFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class BookListComponent implements OnInit {
    pageTitle: string = 'Book List';
    imageWidth: number = 195;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;
    books: IBook[];

    constructor(private _bookService: BookService) {}

    ngOnInit(): void {
        this._bookService.getBooks()
            .subscribe(
            books => this.books = books,
            error => this.errorMessage = <any>error),
            () => console.log("Finished");
    }
}