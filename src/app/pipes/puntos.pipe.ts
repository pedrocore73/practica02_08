import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntos'
})
export class PuntosPipe implements PipeTransform {

  transform(value) {
    let puntos;
    puntos = ('0' + value).slice(-2);
    return puntos;
  }

}
