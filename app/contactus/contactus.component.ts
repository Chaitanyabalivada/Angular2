import {Component, Input} from '@angular/core';

@Component({
    templateUrl:'/app/contactus/contactus.component.html'
})

export class ContactUsComponent{
    title:string='Contact us';
   firstName:string;
    email:string;
    mobile:number;
    reason:string;
    submit:string='Click here'

    contactUS():void{
     console.log(this.firstName+' '+this.email+' '+this.mobile+' '+this.reason);
    }
}