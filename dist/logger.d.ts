interface loggingOptions {
    enabled?: boolean;
    timestamp?: boolean;
    logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'success';
}
export declare class Logger {
    private options;
    private enabled;
    private timestamps;
    private logLevel;
    private readonly LEVELS;
    constructor(options?: loggingOptions);
    private log;
    info(logMessage: string): void;
    warn(logMessage: string): void;
    debug(logMessage: string): void;
    error(logMessage: string): void;
    success(logMessage: string): void;
    enable(): void;
    disable(): void;
}
declare const logger: Logger;
export default logger;
