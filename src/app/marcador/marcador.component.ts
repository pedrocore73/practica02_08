import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  locales = [
    {nombre: 'Isaiah Thomas', puntos: 0, imagen: 'assets/thomas.png'},
    {nombre: 'Kyle Kuzma', puntos: 0, imagen: 'assets/kuzma.png'},
    {nombre: 'Julius Randle', puntos: 0, imagen: 'assets/randle.png'},
    {nombre: 'Brandom Ingram', puntos: 0, imagen: 'assets/ingram.png'},
    {nombre: 'Brook López', puntos: 0, imagen: 'assets/lopez.png'},
  ];

  visitantes = [
    {nombre: 'Kaadem Allen', puntos: 0, imagen: 'assets/allen.png'},
    {nombre: 'Aron Bynes', puntos: 0, imagen: 'assets/bynes.png'},
    {nombre: 'Jabari Bird', puntos: 0, imagen: 'assets/bird.png'},
    {nombre: 'Jaylen Brown', puntos: 0, imagen: 'assets/brown.png'},
    {nombre: 'Jonathan Gibson', puntos: 0, imagen: 'assets/gibson.png'},
  ];

  jugadoresTop: any;

  equipoLocal = 'lakers';
  equipoVisitante = 'celtics';

  puntosLocal = 0;
  puntosVisitante = 0;
  tresCh = false;  // Detecta si un equipo tiene > 100 pts
  tresChJugadores = false; // Detecta si un jugador idem

  constructor() { }

  ngOnInit() { 
    this.jugadoresTop = this.locales.concat(this.visitantes);
  }

  getCanastas(canasta) {
    if (canasta.equipo === this.equipoLocal) {
      this.puntosLocal += canasta.puntos;
      this.locales.forEach( jugador =>{
        if(canasta.nombre === jugador.nombre){
          jugador.puntos += canasta.puntos;
          if (jugador.puntos > 99) { this.tresChJugadores = true; }
        }
      })
    } else if (canasta.equipo === this.equipoVisitante) {
      this.puntosVisitante += canasta.puntos;
      this.visitantes.forEach( jugador =>{
        if(canasta.nombre === jugador.nombre){
          jugador.puntos += canasta.puntos;
          if (jugador.puntos > 99) { this.tresChJugadores = true; }
        }
      })
    }
    this.setJugadoresTop();
    if (this.puntosLocal > 99 || this.puntosVisitante > 99) {
      this.tresCh = true;
    }
  }

  setJugadoresTop() {
    this.jugadoresTop = this.locales.concat(this.visitantes);
    this.jugadoresTop.sort((a, b)=>{
      return (b.puntos - a.puntos); // Sentido descendente por el valor de puntos
    })
  }


}
