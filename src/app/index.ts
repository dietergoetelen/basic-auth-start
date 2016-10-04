import * as angular from 'angular';
import router from 'angular-ui-router';

import appComponent from './root';

export default angular.module('app', [
  router,
  appComponent.name
])

  ;
