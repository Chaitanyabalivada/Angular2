import {Component} from '@angular/core';
import { MyOrder } from './order';
import { OrderService } from './order.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector:'pm-order',
    templateUrl:'app/orders/order.component.html',
    styleUrls:['app/orders/order.component.css']
})


export class OrdersComponent implements OnInit{
    
    title:string="Order List";
    hide:string="Hide image";
    show:string="Show image";
    button:boolean=true;
    orders:MyOrder[];
    errroMessage:string;

    constructor(private orderService:OrderService){}
    
    ngOnInit(): void {
        this.orderService.getOrders().subscribe(products=>this.orders=products,
            error=>this.errroMessage=<any>error)
    }
    showOrHideImage():void{
        this.button = !this.button;
    }
    captureRatingMessage(order:MyOrder,message:number):void{
        order.starRating=message;
        this.title=`Order List - My rating for ${order.orderName} is :: `+message;
    }
}