import * as angular from 'angular';
import * as router from 'angular-ui-router';

import {AuthService} from './auth/auth.service';
import appComponent from './root';
import routeConfig from './routes.config';
import routeRun from './routes.run';

export default angular.module('app', [
  <any>router,
  appComponent.name
])
  .service(AuthService.iid, AuthService)
  .config(routeConfig)
  .config(config)
  .run(routeRun)

  ;

config.$inject = ['$httpProvider'];
function config($httpProvider:ng.IHttpProvider) {
  $httpProvider.interceptors.push(httpInterceptor);

  function httpInterceptor($injector) {
    return {
      'request': onRequest
    };

    function onRequest(config) {
      let authService = <AuthService>$injector.get(AuthService.iid);

      if (authService.isAuthenticated()) {
        config.url = config.url + '?auth=' + authService.getUser().md;
      }

      return config;
    }
  }

}
