import { Logger } from '../src/logger';

describe('Logger', () => {
    let logger: Logger;
    let consoleSpy: jest.SpyInstance;
  
    beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
      logger = new Logger();
    });
  
    afterEach(() => {
      consoleSpy.mockRestore();
    });
  
    // 1. Test log level filtering (most error-prone)
    it('should filter logs below the configured level', () => {
      const logger = new Logger({ logLevel: 'warn' });
      logger.debug('debug message');
      logger.warn('warn message');
      expect(consoleSpy).toHaveBeenCalledTimes(1); 
    });
  
    // 2. Test enable/disable
    it('should not log when disabled', () => {
      logger.disable();
      logger.info('test');
      expect(consoleSpy).not.toHaveBeenCalled();
    });
  
    // 3. Verify timestamp format
    it('should include ISO timestamps when enabled', () => {
      const logger = new Logger({ timestamp: true });
      logger.info('test');
      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringMatching(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\]/),
        expect.anything()
      );
    });
  });