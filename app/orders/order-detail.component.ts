import {Component,OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { MyOrder } from './order';


@Component({
    templateUrl:'app/orders/order-detail.component.html'
})

export class OrderDetailComponent implements OnInit{
   
    title:string = 'Order Detail';
    imageUrl:string;
    myorderID:string;
    constructor(private _router:ActivatedRoute,private _route:Router){

    }
    ngOnInit(): void {
       
         this.myorderID = this._router.snapshot.params['id'];
         this.title=this.title+' '+this.myorderID;
    }
    onBack():void{
        this._route.navigate(['/orders']);
    }
}