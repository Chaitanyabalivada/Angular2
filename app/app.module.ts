import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import { NotFoundComponent } from './notFound.component';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';
import { ContactUSModule } from './contactus/contactus.module';
import { HomeComponent } from './home/home.component';

  

@NgModule({
  imports: [
    BrowserModule,
    ProductModule,
    FormsModule,
    HttpModule,
    OrderModule,
    ContactUSModule,
    RouterModule.forRoot([
      {path:'home', component:HomeComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'**', component:NotFoundComponent}
    ])
  ],
  declarations: [
    AppComponent,  
    HomeComponent,  
    NotFoundComponent,
    
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule { }
