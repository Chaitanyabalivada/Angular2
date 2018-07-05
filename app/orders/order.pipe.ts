import {Pipe} from '@angular/core';
import {MyOrder} from './order';
@Pipe({
    name:"OrderFilter"
})

export class OrderPipeFilter{


transform(orders:MyOrder[],filterBy:string):MyOrder[]{
filterBy = filterBy?filterBy.toLocaleLowerCase():null;
if(filterBy!=null){
    
orders=orders.filter((order:MyOrder)=> 
order.orderName.toLowerCase().indexOf(filterBy)!== -1);
}
return orders;
}
}
