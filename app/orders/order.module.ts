import {NgModule} from '@angular/core';
import { OrdersComponent } from './order.component';
import { OrderPipeFilter } from './order.pipe';
import { OrderDetailComponent } from './order-detail.component';
import { OrderGaurdService } from './order-gaurd.service';
import { OrderService } from './order.service';
import {RouterModule} from '@angular/router';

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { RatingComponent } from './rating.component';
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path:'orders', component:OrdersComponent},
            {path:'orders/:id',canActivate:[OrderGaurdService],component:OrderDetailComponent}
        ])
    ],
    declarations:[OrdersComponent,
        OrderPipeFilter,
        OrderDetailComponent,
        RatingComponent,
    ],
    providers:[OrderService,
        OrderGaurdService]
})

export class OrderModule{

}