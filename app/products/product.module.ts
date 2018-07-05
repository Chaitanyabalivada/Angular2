import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'

import { ProductComponent } from './product.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGaurd } from './product-gaurd.Service';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id',canActivate:[ProductGaurd], component:ProductDetailComponent}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductFilterPipe,
        ProductDetailComponent,
    ],
    providers:[
        ProductService,
        ProductGaurd
    ]
})

export class ProductModule{
    
}