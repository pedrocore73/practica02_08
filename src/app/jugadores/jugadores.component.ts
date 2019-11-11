import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  @Input() jugadores;
  @Input() equipo;
  @Output() canasta: EventEmitter<any> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  setCanasta(puntos, nombre) {
    this.canasta.emit({puntos, nombre, equipo: this.equipo});
  }

}
