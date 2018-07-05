import {Component,OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product.compmonent.html',
   // styles:['thead{color:red}']
   styleUrls:['app/products/product.component.css']
})

export class ProductComponent implements OnInit{
    title:string="**Product List**";
    imageWidth:number=50;
    numberStar:number=3.5
    listFilter:string;
    showImage:boolean=false;
    products:IProduct[];
    errroMessage:string;

        constructor(private _productSerivce:ProductService){}
        toggleImage():void{
            this.showImage = !this.showImage
        }

        ngOnInit(): void{
           this._productSerivce.getProducts()
            .subscribe(products=>this.products=products,
                error=>this.errroMessage=<any>error)
        }

        onRatingClicked(message:string): void{
            this.title = "**Product List** ::: "+message
        }
        
}
