import {Component,Input,OnChanges,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'rate',
    templateUrl:'app/orders/rating.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class RatingComponent implements OnChanges{
    @Input() rating:number;
    ratingWidth:number;
    @Output() ratingMessage:EventEmitter<string> = new EventEmitter<string>();
ngOnChanges():void{
    this.ratingWidth = this.rating*86/5;
}
changeRating(rate:number):void{
    this.rating=rate;    
    this.ratingMessage.emit(`${this.rating}`);
}
}