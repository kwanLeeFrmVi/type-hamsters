// habitat.d.ts

declare module "hamsters.js/src/core/habitat.js" {
  import { MessagePort } from "worker_threads";

  export class Habitat {
    debug: boolean;
    importScripts: any;
    memoize: boolean;
    persistence: boolean;
    browser: boolean;
    webWorker: boolean;
    node: boolean;
    reactNative: boolean;
    shell: boolean;
    transferable: boolean;
    atomics: boolean;
    proxies: boolean;
    isIE: boolean;
    hamsterWheel: any;
    sharedWorker: any;
    locateBlobBuilder: any;
    legacy: boolean;
    legacyWheel: any;
    Worker: any;
    maxThreads: number;
    keys: string[];
    parentPort: null | MessagePort;

    constructor();
    determineGlobalThreads(): number;
    isFirefox(): boolean;
    locateWorkerObject(): any;
    locateSharedWorkerObject(): any;
    isBrowser(): boolean;
    isInternetExplorer(): boolean;
    isNode(): boolean;
    isWebWorker(): boolean;
    isReactNative(): boolean;
    isShell(): boolean;
    isLegacyEnvironment(): boolean;
    supportsSharedWorkers(): boolean;
    findAvailableBlobBuilder(): any;
    createDataBlob(textContent: string): Blob;
    generateWorkerBlob(workerLogic: Function): string;
    supportstransferableObjects(): boolean;
    supportsAtomicOperations(): boolean;
    supportsProxies(): boolean;
    selectHamsterWheel(): any;
    getHabitatKeys(): string[];
  }

  const hamstersHabitat: Habitat;
  export default hamstersHabitat;
}
