import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { BookListComponent } from './books/book-list.component';
import { BookDetailComponent } from './books/book-detail.component';
import { BookService } from './books/book.service';


@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='header'>
            <div class='container-fluid'>
                <h1><a class='navbar-brand' [routerLink]="['/']">{{pageTitle}}</a></h1>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Dashboard</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/books']">Book List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService,
                BookService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@Routes([
    { path: '/', component: WelcomeComponent },
    { path: '/welcome', component: WelcomeComponent },
    { path: '/products', component: ProductListComponent },
    { path: '/product/:id', component: ProductDetailComponent },
    { path: '/books', component: BookListComponent },
    { path: '/book/:id', component: BookDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Angular 2 Demo';
}