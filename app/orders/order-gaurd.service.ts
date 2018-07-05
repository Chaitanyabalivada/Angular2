import {Injectable} from '@angular/core';
import { Router,ActivatedRouteSnapshot,CanActivate } from '@angular/router';

@Injectable()

export class OrderGaurdService{

    constructor(private _router:Router){
        
    }
canActivate(route:ActivatedRouteSnapshot):boolean{
let id = +route.url[1].path;
if(isNaN(id) || id<1){
    alert('invalid id');
this._router.navigate(['/orders']);
return false;
}
return true;
}

}