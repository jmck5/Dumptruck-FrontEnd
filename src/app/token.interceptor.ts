//This class based on Angular University's "Angular Security - Authentication With JSON Web Tokens (JWT): The Complete Guide" and Ryan Chenkie's "Angular Authentication: Using the Http Client and Http Interceptors"

import {Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService){}

    intercept(request: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
        console.log("intercepting")
        const idToken = localStorage.getItem("accessToken");
        console.log(idToken);
        console.log(request);
        if(idToken){
        const cloned = request.clone({
            setHeaders: {Authorization: `Bearer ${ idToken }`}
        });
        console.log(cloned);
        return next.handle(cloned)
    }
    else
    {
        return next.handle(request);
    }
}
}