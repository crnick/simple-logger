interface loggingOptions {
    enabled?: boolean,
    timestamp?: boolean,
    logLevel?: 'debug' | 'info' | 'warn' | 'error' | 'success';
}


class Logger {
    private enabled: boolean
    private timestamps: boolean
    private logLevel: number

    private readonly LEVELS :{[key: string]: number} = {
        debug: 0,
        info: 1,
        success: 2,
        warn: 3,
        error: 4
    }

    constructor(private options: loggingOptions = {}) {
        this.enabled = options.enabled ?? true;
        this.timestamps = options.timestamp ?? false;
        this.logLevel = this.LEVELS[options.logLevel || 'debug'];
    }

    private log(level: string, logMessage: string, color: string) {
        if (!this.enabled || this.LEVELS[level] < this.logLevel) return;
        const prefix = this.timestamps ? `[${new Date().toISOString()}] ${level.toUpperCase()}: ` : `${level.toUpperCase()}: `;
        console.log(`\x1b[${color}m%s\x1b[0m`, prefix + logMessage);
    }

    info(logMessage: string): void {
        this.log('info', logMessage, '37'); 
    }

    warn(logMessage: string): void {
        this.log('warn', logMessage, '33'); 
    }

    debug(logMessage: string): void {
        this.log('debug', logMessage, '36'); 
    }

    error(logMessage: string): void {
        this.log('error', logMessage, '31'); 
    }

    success(logMessage: string): void {
        this.log('success', logMessage, '32'); 
    }
    enable(): void {
        this.enabled = true
    }

    disable(): void {
        this.enabled = false
    }


}
const logger = new Logger();
export default logger