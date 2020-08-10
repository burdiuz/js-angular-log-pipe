# @actualwave/log-pipe
This is simply a pipe that logs any received value into console.
Check [sandbox with an example](https://codesandbox.io/s/angular-log-pipe-showcase-2xsvc?file=/src/app/app.component.html) on how to use the pipe.

## Installation
```
npm install @actualwave/log-pipe
```
Can be imported with module
```javascript
import { LogPipeModule } from '@actualwave/log-pipe';

@NgModule({
  imports: [
    LogPipeModule,
    ...
```

# Use

Add `log` pipe to your interpolation
```html
<span>{{ myValue | log }}</span>
```
Your value will be rendered as is and logged into console.
This pipe also supports any amount of arguments, they will be logged with the value.
```html
<span>{{ myValue | log : 'One' : 'Two' }}</span>
```
Will output to console
```
One Two Contents of myValue
```

By default, it sends log messages to `console.log()`, but this can be changed using `CONSOLE` injection token.
```javascript
import { LogPipeModule, CONSOLE } from "@actualwave/log-pipe";

@NgModule({
  imports: [LogPipeModule],
  providers: [
    {
      provide: CONSOLE,
      useValue: {
        log: (...args: any[]) => sendLogAnywhere(...args)
      }
    }
  ],
})
export class AppModule {
```

This package also includes `logAsync` and `logThrough` pipes that work with Observables. The difference is `logThrough` does not subscribe to observable.
