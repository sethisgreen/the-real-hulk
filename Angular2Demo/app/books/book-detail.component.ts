import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IBook } from './book';
import { BookService } from './book.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/books/book-detail.component.html',
    styleUrls: ['app/books/book-detail.component.css'],
    directives: [StarComponent]
})
export class BookDetailComponent implements OnActivate {
    pageTitle: string = 'Book Details';
    book: IBook;
    errorMessage: string;

    constructor(private _bookService: BookService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = curr.getParam('id');
        this.getBook(id);
    }

    getBook(id: string) {
        this._bookService.getBook(id)
            .subscribe(
            book => this.book = book,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/books']);
    }

}