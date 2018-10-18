import { Component, OnInit,Input } from '@angular/core';
import { HttpServidorService } from "../servicios/http-servidor.service";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario="";
  public contrasena="";
  constructor(private http:HttpServidorService,public router:Router) { }

  ngOnInit() {
  }

  Ingresar(){
    /*
    this.http.ConToken({usuario:this.usuario,contrasena:this.contrasena}).subscribe(data=>{
      console.log(this.usuario+" "+this.contrasena);
      console.log(data);
      localStorage.setItem("token",data["token"]);
      this.router.navigateByUrl("/");
    },
    err=>{
      console.log("ERROR");
    });*/
    this.router.navigateByUrl("");
  }

  Registrarse(){
    this.router.navigateByUrl("/registrarse");
  }

  Prueba(){
    this.http.Listado().subscribe(data=>{
      console.log(data);
      console.log(localStorage.getItem("token"));
      //localStorage.setItem("token",data["token"]);
    },
    err=>{
      console.log("ERROR");
      console.log(localStorage.getItem("token"));
    });
  }
}
