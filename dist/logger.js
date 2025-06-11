"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(options = {}) {
        var _a, _b;
        this.options = options;
        this.LEVELS = {
            debug: 0,
            info: 1,
            success: 2,
            warn: 3,
            error: 4
        };
        this.enabled = (_a = options.enabled) !== null && _a !== void 0 ? _a : true;
        this.timestamps = (_b = options.timestamp) !== null && _b !== void 0 ? _b : false;
        this.logLevel = this.LEVELS[options.logLevel || 'debug'];
        this.logLevel = 3; //warn 
    }
    log(level, logMessage, color) {
        if (!this.enabled || this.LEVELS[level] < this.logLevel)
            return;
        const prefix = this.timestamps ? `[${new Date().toISOString()}] ${level.toUpperCase()}: ` : `${level.toUpperCase()}: `;
        console.log(`\x1b[${color}m%s\x1b[0m`, prefix + logMessage);
    }
    info(logMessage) {
        this.log('info', logMessage, '37');
    }
    warn(logMessage) {
        this.log('warn', logMessage, '33');
    }
    debug(logMessage) {
        this.log('debug', logMessage, '36');
    }
    error(logMessage) {
        this.log('error', logMessage, '31');
    }
    success(logMessage) {
        this.log('success', logMessage, '32');
    }
    enable() {
        this.enabled = true;
    }
    disable() {
        this.enabled = false;
    }
}
exports.Logger = Logger;
const logger = new Logger();
exports.default = logger;
