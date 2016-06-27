System.register(['@angular/core', '@angular/router', './book.service', '../shared/star.component'], function(exports_1, context_1) {
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
    var core_1, router_1, book_service_1, star_component_1;
    var BookDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_service_1_1) {
                book_service_1 = book_service_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            BookDetailComponent = (function () {
                function BookDetailComponent(_bookService, _router) {
                    this._bookService = _bookService;
                    this._router = _router;
                    this.pageTitle = 'Book Details';
                }
                BookDetailComponent.prototype.routerOnActivate = function (curr) {
                    var id = curr.getParam('id');
                    this.getBook(id);
                };
                BookDetailComponent.prototype.getBook = function (id) {
                    var _this = this;
                    this._bookService.getBook(id)
                        .subscribe(function (book) { return _this.book = book; }, function (error) { return _this.errorMessage = error; });
                };
                BookDetailComponent.prototype.onBack = function () {
                    this._router.navigate(['/books']);
                };
                BookDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/books/book-detail.component.html',
                        styleUrls: ['app/books/book-detail.component.css'],
                        directives: [star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [book_service_1.BookService, router_1.Router])
                ], BookDetailComponent);
                return BookDetailComponent;
            }());
            exports_1("BookDetailComponent", BookDetailComponent);
        }
    }
});
//# sourceMappingURL=book-detail.component.js.map