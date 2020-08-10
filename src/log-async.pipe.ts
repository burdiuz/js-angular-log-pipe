import { CONSOLE } from './token';
import { Pipe, PipeTransform, ChangeDetectorRef, Inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Pipe({
  name: 'logAsync',
  pure: false,
})
export class LogAsyncPipe extends AsyncPipe implements PipeTransform {
  private lastReturnedValue: any;

  constructor(ref: ChangeDetectorRef, @Inject(CONSOLE) private console: any) {
    super(ref);
  }

  transform(target: any, ...args: any[]) {
    const value = super.transform(target);

    if (this.lastReturnedValue !== value) {
      this.lastReturnedValue = value;
      this.console.log(...args, value);
    }

    return value;
  }
}
