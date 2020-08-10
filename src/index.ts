import { CONSOLE } from './token';
import { NgModule } from '@angular/core';

export * from './token';
import { LogPipe } from './log.pipe';
import { LogAsyncPipe } from './log-async.pipe';
import { LogThroughPipe } from './log-through.pipe';

export function consoleFactory() {
  return console;
}

@NgModule({
  declarations: [LogPipe, LogAsyncPipe, LogThroughPipe],
  providers: [
    {
      provide: CONSOLE,
      useFactory: consoleFactory,
    },
  ],
  exports: [LogPipe, LogAsyncPipe, LogThroughPipe],
})
export class LogPipeModule {}
