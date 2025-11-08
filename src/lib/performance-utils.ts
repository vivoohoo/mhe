// Performance optimization utilities for INP improvement
// Includes Web Workers for long-running tasks, DOM batching, CSS transforms, and requestIdleCallback helpers

// Web Worker Manager for offloading heavy tasks
export interface WorkerTask {
  id: string;
  type: 'calculation' | 'data-processing' | 'image-processing';
  data: any;
}

export interface WorkerResult {
  id: string;
  success: boolean;
  result?: any;
  error?: string;
}

class WorkerManager {
  private worker: Worker | null = null;
  private taskCallbacks: Map<string, (result: WorkerResult) => void> = new Map();

  constructor() {
    this.initializeWorker();
  }

  private initializeWorker() {
    if (typeof Worker !== 'undefined') {
      const workerCode = `
        self.onmessage = function(e) {
          const { id, type, data } = e.data;
          try {
            let result;
            switch (type) {
              case 'calculation':
                result = performCalculations(data);
                break;
              case 'data-processing':
                result = processData(data);
                break;
              case 'image-processing':
                result = processImage(data);
                break;
              default:
                throw new Error('Unknown worker task type');
            }
            self.postMessage({ id, success: true, result });
          } catch (error) {
            self.postMessage({ id, success: false, error: error.message });
          }
        };

        function performCalculations(data) {
          // Implement heavy calculations here (e.g., complex math)
          // Example: Simulate heavy computation
          let sum = 0;
          for (let i = 0; i < data.limit; i++) {
            sum += i;
          }
          return sum;
        }

        function processData(data) {
          // Implement data processing (e.g., sorting large arrays)
          return data.array.sort();
        }

        function processImage(data) {
          // Implement image processing if needed
          return data;
        }
      `;

      const blob = new Blob([workerCode], { type: 'application/javascript' });
      this.worker = new Worker(URL.createObjectURL(blob));

      this.worker.onmessage = (e) => {
        const result: WorkerResult = e.data;
        const callback = this.taskCallbacks.get(result.id);
        if (callback) {
          callback(result);
          this.taskCallbacks.delete(result.id);
        }
      };
    }
  }

  async executeTask(task: WorkerTask): Promise<WorkerResult> {
    return new Promise((resolve) => {
      if (!this.worker) {
        resolve({ id: task.id, success: false, error: 'Web Workers not supported' });
        return;
      }
      this.taskCallbacks.set(task.id, resolve);
      this.worker.postMessage(task);
    });
  }

  terminate() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.taskCallbacks.clear();
  }
}

export const workerManager = new WorkerManager();

// Main thread optimization with requestIdleCallback
export function runOnIdle(callback: () => void, options?: IdleRequestOptions) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, options);
  } else {
    // Fallback to setTimeout
    setTimeout(callback, 0);
  }
}

// Batch DOM updates to minimize reflows
export function batchDOMUpdates(callback: () => void) {
  requestAnimationFrame(() => {
    callback();
  });
}

// Use CSS transforms for animations
export function animateWithCSS(element: HTMLElement, transform: string, duration: number = 300) {
  element.style.transition = `transform ${duration}ms ease-in-out`;
  element.style.transform = transform;
}

// Preload resources during idle time
export function preloadResources(resources: string[]) {
  runOnIdle(() => {
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.js') ? 'script' : 'image';
      document.head.appendChild(link);
    });
  });
}

// Example usage: Delay non-essential tasks
// runOnIdle(() => { /* non-essential code */ });