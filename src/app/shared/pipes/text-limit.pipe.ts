import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit',
})
export class TextLimitPipe implements PipeTransform {
  transform(value: string, args: number): unknown {
    let trimmedText = value.slice(0, args);
    return trimmedText;
  }
}
