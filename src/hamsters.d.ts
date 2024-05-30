// type definition for hamsters.js package

declare module "hamsters.js" {
  import { Habitat } from "hamsters.js/src/core/habitat.js";

  export type HamstersOptions = Partial<Habitat> & {
    /**
     * The maximum number of threads to use.
     * @default 4
     */
    maxThreads?: number;
    /**
     * Whether to use legacy mode.
     * @default false
     */
    legacy?: boolean;
    /**
     * Whether to use persistence.
     * @default true
     */
    persistence?: boolean;
    /**
     * Whether to use debug mode.
     * @default false
     */
    debug?: boolean;
    /**
     * Whether to use the node.js environment.
     * @default false
     */
    node?: boolean;
    /**
     * Whether to use the IE environment.
     * @default false
     */
    isIE?: boolean;
    /**
     * The worker library to use.
     * @default null
     */
    Worker?: any;
  };

  export interface HamstersTaskParams {
    /**
     * The array to process.
     */
    array: any[];
    /**
     * The function to execute.
     */
    functionToRun?: Function;
    /**
     * The number of threads to use.
     * @default 1
     */
    threads?: number;
    /**
     * The indexes to process.
     */
    indexes?: number[];

    dataType?: string;

    sort?: "asc" | "desc" | "ascAlpha" | "descAlpha";
  }

  export interface HamstersTask {
    input: HamstersTaskParams;
    output: any[];
    scheduler: {
      count: number;
      threads: number;
      workers: any[];
      indexes?: number[];
      metrics?: {
        created_at: number;
        started_at: number;
        completed_at: number;
        threads: any[];
      };
    };
  }

  export class Hamsters {
    /**
     * The current version of Hamsters.js.
     */
    version: string;
    /**
     * The habitat object.
     */
    habitat: any;
    /**
     * The data object.
     */
    data: any;
    /**
     * The pool object.
     */
    pool: any;
    /**
     * The maximum number of threads to use.
     */
    maxThreads: number;
    /**
     * Initializes the Hamsters.js library.
     * @param options The library options.
     */
    init(options?: HamstersOptions): void;
    /**
     * Creates a new task object.
     * @param params The task parameters.
     * @param functionToRun The function to execute.
     * @returns The new task object.
     */
    hamstersTask(
      params: HamstersTaskParams,
      functionToRun: Function
    ): HamstersTask;
    /**
     * Schedules a new task to be processed by the library.
     * @param task The task object.
     * @param resolve The parent function promise resolve method.
     * @param reject The parent function promise reject method.
     * @returns The Promise object on completion.
     */
    scheduleTask(
      task: HamstersTask,
      resolve: Function,
      reject: Function
    ): Promise<any>;
    /**
     * Calls library functionality using async promises.
     * @param params The task parameters.
     * @param functionToRun The function to execute.
     * @returns The results from functionToRun.
     */
    promise(params: HamstersTaskParams, functionToRun: Function): Promise<any>;
    /**
     * Calls library functionality using async callbacks.
     * @param params The task parameters.
     * @param functionToRun The function to execute.
     * @param onSuccess The function to call upon successful execution.
     * @param onError The function to call upon execution failure.
     * @returns The results from functionToRun.
     */
    run(
      params: HamstersTaskParams,
      functionToRun: Function,
      onSuccess: Function,
      onError: Function
    ): any;
  }

  const hamsters: Hamsters;
  export default hamsters;
}
