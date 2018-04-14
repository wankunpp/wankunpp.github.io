import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


 
@Injectable()
export class AuthenticationService {
    loggedIn=true;
    StatusChanged= new Subject<boolean>();

    constructor() { }
    
    isAuthenticated(){
       const promise = new Promise(
           (resolve,reject)=>{
               setTimeout(
                   ()=>{
                       resolve(this.loggedIn)
                   },800);
           }
       )
       return promise;
    }

    login(){
        this.loggedIn = true;
    }
    
    logout(){
        this.loggedIn= false;
    }
}