import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  public mostrarBoton=true;
  public mostrarJuego=false;
  public ppt=["PIEDRA","PAPEL","TIJERA"];
  public eleccionUsuario=-1;
  public eleccionMaquina=-1;
  public score=0;


  constructor() { }

  ngOnInit() {
  }

  Empezar(){
    this.mostrarBoton=false;
    this.mostrarJuego=true;
  }

  Resultado():number{
    let retorno;
    if(this.eleccionUsuario==this.eleccionMaquina)
    {
      retorno=0;
    }
    else{
      if(this.eleccionUsuario==0)
      {
        if(this.eleccionMaquina==1)
        {
          retorno=-1;
        }
        else if(this.eleccionMaquina==2)
        {
          retorno=1;
        }
      }
      else if(this.eleccionUsuario==1)
      {
        if(this.eleccionMaquina==2)
        {
          retorno=-1;
        }
        else if(this.eleccionMaquina==0)
        {
          retorno=1;
        }
      }
      else if(this.eleccionUsuario==2)
      {
        if(this.eleccionMaquina==0)
        {
          retorno=-1;
        }
        else if(this.eleccionMaquina==1)
        {
          retorno=1;
        }
      }
    }
    return retorno;
  }

  Piedra(){
    this.eleccionMaquina=-1;
    this.eleccionMaquina=Math.floor((Math.random() * this.ppt.length));
    this.eleccionUsuario=0;
    this.MostrarResultado(this.Resultado());
  }
  Papel(){
    this.eleccionMaquina=Math.floor((Math.random() * this.ppt.length));
    this.eleccionUsuario=1;
    this.MostrarResultado(this.Resultado());
  }
  Tijera(){
    this.eleccionMaquina=Math.floor((Math.random() * this.ppt.length));
    this.eleccionUsuario=2;
    this.MostrarResultado(this.Resultado());
    
  }

  MostrarResultado(resultado)
  {
    if(resultado==1){
      alert("GANASTE");
      
      this.score++;
    }
    else if(resultado==0)
    {
      alert("PARDA");
      
    }else if(resultado==-1)
    {
      alert("PERDISTE\nPuntuacion Final="+this.score);
      
      this.score=0;
    }
  }
}
