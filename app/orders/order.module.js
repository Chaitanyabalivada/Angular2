"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_component_1 = require("./order.component");
var order_pipe_1 = require("./order.pipe");
var order_detail_component_1 = require("./order-detail.component");
var order_gaurd_service_1 = require("./order-gaurd.service");
var order_service_1 = require("./order.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var rating_component_1 = require("./rating.component");
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'orders', component: order_component_1.OrdersComponent },
                    { path: 'orders/:id', canActivate: [order_gaurd_service_1.OrderGaurdService], component: order_detail_component_1.OrderDetailComponent }
                ])
            ],
            declarations: [order_component_1.OrdersComponent,
                order_pipe_1.OrderPipeFilter,
                order_detail_component_1.OrderDetailComponent,
                rating_component_1.RatingComponent,
            ],
            providers: [order_service_1.OrderService,
                order_gaurd_service_1.OrderGaurdService]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map