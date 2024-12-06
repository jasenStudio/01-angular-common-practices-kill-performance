import { Injectable } from '@angular/core';
import { LOG_LEVEL } from '../constants/log_level';
import { environment } from '../environments/environment prod';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  log(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.debug) {
      console.log(...[message, ...optionalParams]);
    }
  }

  table(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.debug) {
      console.table(...[message, ...optionalParams]);
    }
  }

  trace(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.debug) {
      console.trace(...[message, ...optionalParams]);
    }
  }

  error(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.error) {
      console.error(...[message, ...optionalParams]);
    }
  }

  debug(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.debug) {
      console.debug(...[message, ...optionalParams]);
    }
  }

  info(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.info) {
      console.info(...[message, ...optionalParams]);
    }
  }

  warn(message?: any, ...optionalParams: any[]) {
    if (environment.logLevel >= LOG_LEVEL.warn) {
      console.warn(...[message, ...optionalParams]);
    }
  }
  constructor() {}
}
