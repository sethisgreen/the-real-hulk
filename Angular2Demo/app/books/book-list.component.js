System.register(['@angular/core', '@angular/router', './book-filter.pipe', '../shared/star.component', './book.service'], function(exports_1, context_1) {
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
    var core_1, router_1, book_filter_pipe_1, star_component_1, book_service_1;
    var BookListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_filter_pipe_1_1) {
                book_filter_pipe_1 = book_filter_pipe_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (book_service_1_1) {
                book_service_1 = book_service_1_1;
            }],
        execute: function() {
            BookListComponent = (function () {
                function BookListComponent(_bookService) {
                    this._bookService = _bookService;
                    this.pageTitle = 'Book List';
                    this.imageWidth = 195;
                    this.imageMargin = 2;
                    this.showImage = false;
                }
                BookListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._bookService.getBooks()
                        .subscribe(function (books) { return _this.books = books; }, function (error) { return _this.errorMessage = error; }),
                        function () { return console.log("Finished"); };
                };
                BookListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/books/book-list.component.html',
                        styleUrls: ['app/books/book-list.component.css'],
                        pipes: [book_filter_pipe_1.BookFilterPipe],
                        directives: [star_component_1.StarComponent, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [book_service_1.BookService])
                ], BookListComponent);
                return BookListComponent;
            }());
            exports_1("BookListComponent", BookListComponent);
        }
    }
});
//# sourceMappingURL=book-list.component.js.map