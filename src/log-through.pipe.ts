import { Pipe, PipeTransform, Inject } from '@angular/core';
import { CONSOLE } from './token';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Pipe({
  name: 'logThrough',
})
export class LogThroughPipe implements PipeTransform {
  constructor(@Inject(CONSOLE) private console: any) {}

  transform(target: Observable<any>, ...args: any[]) {
    return target.pipe(tap((value) => this.console.log(...args, value)));
  }
}
