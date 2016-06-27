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
var StarComponent = (function () {
    function StarComponent() {
        this.ratingClicked = new core_1.EventEmitter();
    }
    StarComponent.prototype.onClick = function () {
        this.ratingClicked.emit("The rating " + this.rating + " was clicked");
    };
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
    ], StarComponent.prototype, "ratingClicked", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'ai-star',
            templateUrl: './assets/star.component.html',
            styleUrls: ['./assets/star.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], StarComponent);
    return StarComponent;
    var _a;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=star.component.js.map