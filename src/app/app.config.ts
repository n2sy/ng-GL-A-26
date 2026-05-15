import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { addTokenInterceptor } from './add-token-interceptor';
import { myRoutes } from './app.routing';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(myRoutes),
    provideHttpClient(withInterceptors([addTokenInterceptor])),
  ],
};
