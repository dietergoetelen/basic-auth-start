require('!!file?name=[name].[ext]!./index.html');
require('bootstrap/dist/css/bootstrap.css');

import * as firebase from 'firebase';
import * as angular from 'angular';
import appModule from './app/index';

// config firebase
firebase.initializeApp({
  apiKey: "AIzaSyA2kqM-tgW57_zft52YJ_0bLfax_v7E8qg",
  authDomain: "ng-auth-6ea06.firebaseapp.com",
  databaseURL: "https://ng-auth-6ea06.firebaseio.com/"
});

angular.element(document).ready(() => {
  angular.bootstrap(document, [
    appModule.name
  ]);
});
