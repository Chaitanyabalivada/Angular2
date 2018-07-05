import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ContactUsComponent } from './contactus.component';
@NgModule({
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path:'contactus', component:ContactUsComponent}
        ])
    ],
    declarations:[
        ContactUsComponent 
       ],
    providers:[]
})

export class ContactUSModule{

}