import { Injectable } from "@angular/core";
import { MyOrder } from "./order";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IProduct } from "../products/product";

@Injectable()

export class OrderService{
    private orderURL = './api/orders/orders.json';
    constructor(private http:Http){}
    getOrders():Observable<MyOrder[]>{
      return this.http.get(this.orderURL)
      .map((response:Response)=><MyOrder[]>response.json())
      .catch(this.handleError);
    }
   
    private handleError(error:Response){
        return Observable.throw(error.json().error||"server error")
    }
}