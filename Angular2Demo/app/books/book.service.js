System.register(['@angular/core', '@angular/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var BookService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            BookService = (function () {
                function BookService(_http) {
                    this._http = _http;
                }
                BookService.prototype.getBooks = function () {
                    return this._http.get('https://www.googleapis.com/books/v1/users/116941227462318405068/bookshelves/1001/volumes?maxResults=40')
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                BookService.prototype.getBook = function (id) {
                    return this._http.get('https://www.googleapis.com/books/v1/volumes/' + id)
                        .map(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                BookService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                BookService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BookService);
                return BookService;
            }());
            exports_1("BookService", BookService);
        }
    }
});
//# sourceMappingURL=book.service.js.map