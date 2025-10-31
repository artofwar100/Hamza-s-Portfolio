import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; 
import { routes } from './app.routes'; 
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: false }), 
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ), 
    provideClientHydration(),
    provideAnimations(),
    provideAnimationsAsync(),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ] 
};
