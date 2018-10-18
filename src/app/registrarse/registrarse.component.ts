import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServidorService } from "../servicios/http-servidor.service";
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';




@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  public usuario="";
  public contrasena="";

  constructor(private http:HttpServidorService,public router:Router) { }

 /*openDialog(texto): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: {texto: texto}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl("/");  
    });
  }*/

  ngOnInit() {
  }

  Registrarse(){

    console.log(this.usuario+" "+this.contrasena);
    this.http.Registrarse({usuario:this.usuario,contrasena:this.contrasena}).subscribe(data=>{
      console.log(this.usuario+" "+this.contrasena);
      console.log(data);
      //this.openDialog("Registro Exitoso");
      
    },
    err=>{
      alert("ERROR");
    });
  }

  Prueba(){
    console.log(this.usuario+" "+this.contrasena);
    this.http.Prueba().subscribe(data=>{
      console.log(data);
      //this.openDialog("Registro Exitoso");   
    },
    err=>{
      alert("ERROR");
    });
  }
  Volver(){
    this.router.navigateByUrl("/login");

  }

}
