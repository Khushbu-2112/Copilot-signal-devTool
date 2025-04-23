import { effect, Injectable, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalDebuggerService {
  private signalGraph = new Map<
    string,
    { value: any; dependencies: Set<string> }
  >();

  /**
   * Traces the value and updates of a given signal for debugging purposes.
   * Logs the initial value of the signal and sets up an effect to log and update
   * the signal's value whenever it changes. Additionally, maintains a graph of
   * signals and their dependencies.
   *
   * @template T - The type of the signal's value.
   * @param signal - The signal to be traced.
   * @param name - A unique name for the signal, used for logging and graph tracking.
   *
   * @remarks
   * This method is useful for debugging reactive signal systems by providing
   * visibility into signal values and their updates.
   */
  traceSignal<T>(signal: Signal<T>, name: string): void {
    console.log(`[Signal Debugger] Signal "${name}" value:`, signal());

    // Initialize the signal in the graph
    this.signalGraph.set(name, { value: signal(), dependencies: new Set() });

    effect(() => {
      const newValue = signal();
      console.log(`[Signal Debugger] Signal "${name}" updated:`, newValue);

      // Update the signal's value in the graph
      const signalData = this.signalGraph.get(name);
      if (signalData) {
        signalData.value = newValue;
      }
    });
  }

  /**
   * Tracks the dependencies of a signal by adding a dependency to the signal's
   * graph entry. This allows for better understanding of how signals are
   * interconnected and which signals depend on others.
   * @param signalName
   * @param dependsOn
   */

  trackDependency(signalName: string, dependsOn: string): void {
    const signalData = this.signalGraph.get(signalName);
    if (signalData) {
      signalData.dependencies.add(dependsOn);
      console.log(
        `[Signal Debugger] Signal "${signalName}" depends on "${dependsOn}"`
      );
    } else {
      console.warn(`[Signal Debugger] Signal "${signalName}" not found.`);
    }
  }

  /**
   *  View the current value of a signal by its name. This is useful for
   * debugging and understanding the current state of signals in the system.
   * It retrieves the signal's value from the graph and logs it to the console.
   * @param signalName
   * @returns
   */

  viewSignalValue(signalName: string): any {
    const signalData = this.signalGraph.get(signalName);
    if (signalData) {
      console.log(
        `[Signal Debugger] Signal "${signalName}" current value:`,
        signalData.value
      );
      return signalData.value;
    } else {
      console.warn(`[Signal Debugger] Signal "${signalName}" not found.`);
      return null;
    }
  }

  /**
   * View the dependency graph of signals. This method logs the entire
   * dependency graph to the console, showing the relationships between
   * signals and their dependencies.
   * @remarks
   * This is useful for understanding how signals are interconnected
   * and which signals depend on others.
   * @returns
   * void
   */
  viewDependencyGraph(): void {
    console.log('[Signal Debugger] Dependency Graph:', this.signalGraph);
  }
}
