import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:9090',
        realm: 'oauth2-resource-server',
        clientId: 'angular-ecommerce',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
      loadUserProfileAtStartUp: false
    });
}
bootstrapApplication(AppComponent, {
  providers: [
    KeycloakAngularModule,
    KeycloakAngularModule,
    importProvidersFrom(PaginationModule.forRoot(), KeycloakAngularModule),
    KeycloakService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),

  ]
})
  .catch((err) => console.error(err));


