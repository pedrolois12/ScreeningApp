import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cadastro'
})
export class CadastroPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
