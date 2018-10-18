import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const config={
  headers:new HttpHeaders({
    //token:localStorage.getItem("token")
  })
}

@Injectable({
  providedIn: 'root'
})
export class HttpServidorService {

  constructor(public http:HttpClient) {
    //console.log(http.get("http://192.168.2.57:3000/"));
   }

   SinToken(){
    return this.http.get("http://192.168.2.57:3000/sintoken");
   }

   ConToken(datos:object){
     return this.http.post("http://192.168.2.57:3000/token",{user:datos});
    
   }

   Registrarse(datos:object){
    return this.http.post("http://localhost/api/registrarse",{usuario:datos});
   }

   Prueba(){
    return this.http.get("api/prueba");
   }

   Listado(){
    return this.http.get("http://192.168.2.57:3000/listado",config);
   }
}
