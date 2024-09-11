import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textResize'
})
export class TextResizePipe implements PipeTransform {
  transform(value: string, length: number, symbol: string): string {
    return value.length >= length ? value.slice(0, length) + symbol : value;
  }
}
