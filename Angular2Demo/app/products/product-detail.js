"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular2/core');
var router_1 = require('angular2/router');
var product_service_1 = require('./product.service');
var star_component_1 = require('./star.component');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_productService, _router, _routeParams) {
        this._productService = _productService;
        this._router = _router;
        this._routeParams = _routeParams;
        this.pageTitle = 'Product Detail';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        if (!this.product) {
            var id = +this._routeParams.get('id');
            // this.pageTitle += `: ${id}`;
            this.getProduct(id);
        }
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        var _this = this;
        this._productService.getProduct(id)
            .subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
    };
    ProductDetailComponent.prototype.onBack = function () {
        this._router.navigate(['Products']);
    };
    ProductDetailComponent.prototype.editProduct = function () {
        this.edit = !this.edit;
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            templateUrl: './products/product-detail.component.html',
            color: '',
            edit: false,
            directives: [star_component_1.StarComponent]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.RouteParams !== 'undefined' && router_1.RouteParams) === 'function' && _b) || Object])
    ], ProductDetailComponent);
    return ProductDetailComponent;
    var _a, _b;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.js.map