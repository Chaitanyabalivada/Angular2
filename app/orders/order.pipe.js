"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrderPipeFilter = /** @class */ (function () {
    function OrderPipeFilter() {
    }
    OrderPipeFilter.prototype.transform = function (orders, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        if (filterBy != null) {
            orders = orders.filter(function (order) {
                return order.orderName.toLowerCase().indexOf(filterBy) !== -1;
            });
        }
        return orders;
    };
    OrderPipeFilter = __decorate([
        core_1.Pipe({
            name: "OrderFilter"
        })
    ], OrderPipeFilter);
    return OrderPipeFilter;
}());
exports.OrderPipeFilter = OrderPipeFilter;
//# sourceMappingURL=order.pipe.js.map