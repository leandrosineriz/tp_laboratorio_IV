import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpm',
  templateUrl: './tpm.component.html',
  styleUrls: ['./tpm.component.css']
})
export class TpmComponent implements OnInit {

  public mostrarBoton=true;
  public mostrarJuego=false;
  public score=0;
  public tiempo;
  public termino=false;
  public temporizadorObject;
  public teclaElegida;
  public inputLetra="";
  public teclas=["A","Q","W","E","R","T","Y","U","I","O","P","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0"];


  constructor() { }

  ngOnInit() {
  }

  Empezar(){
    this.mostrarBoton=false;
    this.mostrarJuego=true;
    this.termino=false;
    if(this.temporizadorObject)
    {
      clearInterval(this.temporizadorObject);
    }
    this.Temporizador();
    this.CambiarTecla();
  }

  Temporizador(){
    
    this.tiempo=60;
    this.temporizadorObject=setInterval(()=>{
     if(!this.termino)
     {
       if(this.tiempo<1)
       {
         this.termino=true;
         alert("JUEGO TERMINADO, PUNTUACION FINAL="+this.score);
         this.score=0;
       }else{
         this.tiempo--;
       }
     }
     },1000);
   
   }

   onKeydown(event) {
    if (event.key.toLowerCase() === this.teclaElegida.toLowerCase()) { 
      this.score++;
      this.CambiarTecla();
      this.inputLetra=""; 
    }
    else{
      alert("Te Equivocaste!!");
      this.inputLetra=""; 
      this.tiempo=0;
    }
  }

  CambiarTecla(){
    let pos=Math.floor((Math.random() * this.teclas.length));
    this.teclaElegida=this.teclas[pos];

  }

  VolverAJugar(){
    this.Empezar();
  }
}
