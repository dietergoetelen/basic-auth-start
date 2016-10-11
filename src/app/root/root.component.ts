import {AuthService} from '../auth/auth.service';
import {TrackService} from './track.service';

export class AppController {
  title: string;
  tracks: any;
  error: any;

  static $inject = [TrackService.iid, AuthService.iid];
  constructor(private trackService:TrackService, private authService:AuthService) {}

  $onInit() {
    this.title = 'Welcome';
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getTracks() {
    this.trackService.getTracks().then(result => {
      this.tracks = result;
      this.error = undefined;
    },
    (error) => {
      this.tracks = undefined;
      this.error = error;
    });
  }
}

export default {
  controller: AppController,
  template: `
  <h1>{{$ctrl.title}}</h1>

  <button ng-if="!$ctrl.authService.isAuthenticated()" ng-click="$ctrl.login()">Login</button>
  <button ng-if="$ctrl.authService.isAuthenticated()" ng-click="$ctrl.logout()">Logout</button>
  <button  ng-click="$ctrl.getTracks()">Get tracks</button>
  <a ui-sref="admin">Admin state</a>

  <hr>

  <div ui-view></div>

  <hr>


  <pre ng-if="$ctrl.tracks">{{$ctrl.tracks | json}}</pre>
  <pre ng-if="$ctrl.error">{{$ctrl.error | json}}</pre>
  `
};
