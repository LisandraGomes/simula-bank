import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptors';
import { provideNativeDateAdapter } from '@angular/material/core'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideNativeDateAdapter(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor]) // Registrando aqui o interceptor de autenticação para todas as requisições HTTP
    ),
    provideNativeDateAdapter(),
  ]
};