import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  

  constructor(public router:Router) {
    
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if(localStorage.getItem("token"))
    {
      console.log(helper.decodeToken(localStorage.getItem("token")));
      return true;
    }else{
      this.router.navigateByUrl("/login");

      return false;
    }
  }
  
}
