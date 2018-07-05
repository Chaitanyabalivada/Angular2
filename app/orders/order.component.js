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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService) {
        this.orderService = orderService;
        this.title = "Order List";
        this.hide = "Hide image";
        this.show = "Show image";
        this.button = true;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (products) { return _this.orders = products; }, function (error) { return _this.errroMessage = error; });
    };
    OrdersComponent.prototype.showOrHideImage = function () {
        this.button = !this.button;
    };
    OrdersComponent.prototype.captureRatingMessage = function (order, message) {
        order.starRating = message;
        this.title = "Order List - My rating for " + order.orderName + " is :: " + message;
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'pm-order',
            templateUrl: 'app/orders/order.component.html',
            styleUrls: ['app/orders/order.component.css']
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=order.component.js.map