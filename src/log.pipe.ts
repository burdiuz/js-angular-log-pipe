import { Pipe, PipeTransform, Inject } from '@angular/core';
import { CONSOLE } from './token';

@Pipe({
  name: 'log',
})
export class LogPipe implements PipeTransform {
  constructor(@Inject(CONSOLE) private console: any) {}

  transform(value: any, ...args: any[]) {
    this.console.log(...args, value);

    return value;
  }
}
