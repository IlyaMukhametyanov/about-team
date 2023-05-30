import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor(
      private auth:AuthService,
      private roter: Router,
   ){}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(this.auth.isAuthenticated()){
         req = req.clone({
            setParams:{
               auth: this.auth.token || "1"
            }
         })
      }

      return next.handle(req)
   }
   
}


