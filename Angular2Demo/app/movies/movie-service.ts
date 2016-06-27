import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IMovie } from './movie';


@Injectable()
export class MovieService {
    constructor(private _http: Http) { }

    getMovies(): Observable<IMovie[]> {
        return this._http.get('http://api.themoviedb.org/3/account/2fcce248918927f2307b6217ef08d33a/favorite/movies')
            .map(response => response.json())
            .catch(this.handleError);
    }

    getMovie(id: string): Observable<IMovie> {
        return this._http.get('https://api.themoviedb.org/3/movie/550?api_key=2fcce248918927f2307b6217ef08d33a')
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}