import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { StandalonePreloadingStrategy } from './config/StandalonePreloadingStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions(),
      withPreloading(StandalonePreloadingStrategy)
    ),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ],
};
