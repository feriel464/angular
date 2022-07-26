
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
providedIn: 'root'
})

export class ApiService {

baseUrl:string = "http://localhost/mobelite/php";
@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    
    redirectUrl: string | undefined;
    
constructor(private httpClient : HttpClient) { }
public userlogin(email, password) {
 return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
.pipe(map(Users => {
this.setToken(Users[0].name);
this.getLoggedInName.emit(true);
return Users;
}));
}

public userregistration(name,email,pwd) {
return this.httpClient.post<any>(this.baseUrl + '/register.php', { name,email, pwd })
.pipe(map(Users => {
return Users;
}));
}

//token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true
}
return false;
}
}



//import { Injectable } from '@angular/core';

//@Injectable({
  //providedIn: 'root'
//})
//export class ApiService {
 // redirectUrl: any;
  //userlogin(email: any, password: any) {
   // throw new Error('Method not implemented.');
 // }

  //constructor() { }}

