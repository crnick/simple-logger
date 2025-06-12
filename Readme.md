# simple-logger

- A lightweight, customizable console logger built with TypeScript.  
- Supports log levels, colored output, optional timestamps, and easy configuration.


# Features

- Log levels: `debug`, `info`, `success`, `warn`, `error`
- Colored output in the terminal
- Optional ISO timestamp logging
- Easy to enable/disable logging

# Usage
```typescript
import logger from 'simple-logger';

logger.info('This is an info message');
logger.success('Operation completed successfully');
logger.warn('This is a warning');
logger.error('Something went wrong');
logger.debug('Debugging details...');
```

# Advance Usage
```typescript
const logger = new Logger({
  enabled: true,
  timestamp: true,
  logLevel: 'info'
});
```

# Installation
- npm install simple-logger 
  # OR
- yarn install simple-logger

# License
This project is licensed under the [MIT License](./LICENSE) © 2025 Nikhil Joglekar.

