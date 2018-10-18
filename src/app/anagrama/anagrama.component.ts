import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})

export class AnagramaComponent implements OnInit {

  public mostrarBoton=true;
  public mostrarJuego=false;
  public palabras=["MATERIAL","CABALLO","COMPUTADORA","TELEVISION","COMERCIO","FUTBOL","RUGBY","TERMO","TELEFONO","INTERNET","CAJA",
  "ESPADA","LANZA","FRASCO","LECHUGA","CARPETA","WINDOWS","LINUX","TABLET","ESCRITORIO","VENTILADOR","PULSERA",
"CARGADOR","HOJA","ARBOL","PERRO","ARGENTINA","PERU","PERA","BRASIL","ECUADOR","COLOMBIA","FRANCIA","ESPAÑA","PLATO","CEPILLO"];
  public palabraAOrdenar:string;
  public palabraDesordenada:Array<string>=new Array<string>();
  public inputPalabra="";
  public score=0;
  public tiempo;
  public termino=false;
  public temporizadorObject;

  constructor() {
    
   }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      if(this.palabraAOrdenar.toLowerCase()==this.inputPalabra.toLowerCase())
      {
        this.score++;
        this.CambiarPalabra();
        this.inputPalabra="";
      }
      else{
        this.inputPalabra="";
        this.tiempo=0;
      }
    }
  }
  
  Temporizador(){
    
   this.tiempo=60;
   this.temporizadorObject=setInterval(()=>{
    if(!this.termino)
    {
      if(this.tiempo<1)
      {
        this.termino=true;
        alert("JUEGO TERMINADO!!\nLA palabra era="+this.palabraAOrdenar+",\n PUNTUACION FINAL="+this.score);
      }else{
        this.tiempo--
      }
    }
    },1000);
  
  }

  CambiarPalabra(){
    this.ElegirPalabra();
    this.DesordenarPalabra();
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
    this.ElegirPalabra();
    this.DesordenarPalabra();
  }

  ElegirPalabra(){
    let pos=Math.floor((Math.random() * this.palabras.length));
    console.log(pos);
    this.palabraAOrdenar=this.palabras[pos];
  }

  DesordenarPalabra(){
    this.palabraDesordenada=[];
    for (let i = 0; i < this.palabraAOrdenar.length; i++) {
      this.palabraDesordenada.push(this.palabraAOrdenar.slice(i,i+1));
    }
    this.palabraDesordenada=this.palabraDesordenada.sort(function() {return Math.random() - 0.5});
  }

  VolverAJugar(){
    this.Empezar();
  }

  Rendirse(){
    this.tiempo=0;
  }

}
