import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IBook } from './book';


@Injectable()
export class BookService {
    constructor(private _http: Http) { }

    getBooks(): Observable<IBook[]> {
        return this._http.get('https://www.googleapis.com/books/v1/users/116941227462318405068/bookshelves/1001/volumes?maxResults=40')
            .map(response => response.json())
            .catch(this.handleError);
    }

    getBook(id: string): Observable<IBook> {
        return this._http.get('https://www.googleapis.com/books/v1/volumes/' + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}