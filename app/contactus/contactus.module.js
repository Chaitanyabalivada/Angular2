"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var contactus_component_1 = require("./contactus.component");
var ContactUSModule = /** @class */ (function () {
    function ContactUSModule() {
    }
    ContactUSModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'contactus', component: contactus_component_1.ContactUsComponent }
                ])
            ],
            declarations: [
                contactus_component_1.ContactUsComponent
            ],
            providers: []
        })
    ], ContactUSModule);
    return ContactUSModule;
}());
exports.ContactUSModule = ContactUSModule;
//# sourceMappingURL=contactus.module.js.map