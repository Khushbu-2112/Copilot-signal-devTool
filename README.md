# Signals Debugger

The `signals-debugger` library provides utilities to trace, debug, and visualize Angular signals. It helps developers inspect signal values, track updates, and understand dependencies between signals in Angular applications.

## Features

- **Trace Signal Updates**: Log signal values and updates in real-time.
- **Track Dependencies**: Visualize relationships between signals.
- **View Signal Values**: Inspect the current value of any signal.
- **Dependency Graph**: View a complete graph of signals and their dependencies.

## Installation

Install the library using npm:

```bash
npm install signals-debugger
```

## Usage

To use the `signals-debugger` library in your Angular application, follow these steps:

1. **Import and Inject the Service**  
  Import the `SignalDebuggerService` and inject it into your component or service where you want to debug signals.

  ```typescript
  import { Component, Signal } from '@angular/core';
  import { SignalDebuggerService } from 'signals-debugger';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  })
  export class AppComponent {
    mySignal = new Signal<number>(0);

    constructor(private signalDebugger: SignalDebuggerService) {
     // Trace the signal
     this.signalDebugger.traceSignal(this.mySignal, 'mySignal');
    }

    updateSignal() {
     this.mySignal.set(this.mySignal() + 1);
    }
  }
  ```

2. **Trace Signal Updates**  
  Use the `traceSignal` method to log signal values and updates in real-time.

3. **Track Dependencies**  
  Use the `trackDependency` method to define relationships between signals.

  ```typescript
  this.signalDebugger.trackDependency('signalA', 'signalB');
  ```

4. **View Signal Values**  
  Use the `viewSignalValue` method to inspect the current value of a signal.

  ```typescript
  const value = this.signalDebugger.viewSignalValue('mySignal');
  console.log('Current value of mySignal:', value);
  ```

5. **View Dependency Graph**  
  Use the `viewDependencyGraph` method to log the entire dependency graph of signals.

  ```typescript
  this.signalDebugger.viewDependencyGraph();
  ```

By following these steps, you can effectively debug and visualize signals in your Angular application.

