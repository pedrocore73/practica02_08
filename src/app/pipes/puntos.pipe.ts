import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntos'
})
export class PuntosPipe implements PipeTransform {

  transform(value, tresCh?) {
    let puntos;
    if(tresCh) {
      puntos = ('00' + value).slice(-3);
    } else {
      puntos = ('0' + value).slice(-2);
    }
    return puntos;
  }

}
