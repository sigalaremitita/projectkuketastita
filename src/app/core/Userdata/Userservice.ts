import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usersales } from "./User";

@Injectable(
    {
        providedIn:'root'
    }
)
export class Userservice{

constructor(private http: HttpClient){ }
usersales!:Usersales
addUsersFron (namee: string, email: string,passwor: string,role: string ){ 
 this.usersales.name=namee;
 this.usersales.email=email;
 this.usersales.passwor=passwor;
 this.usersales.roles=role;

 //this.http.post<Usersales>(`http://localhost:8080/addusers`,this.usersales)
}
}