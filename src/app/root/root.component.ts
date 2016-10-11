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

}

export default {
  controller: AppController,
  template: `
  <h1>{{$ctrl.title}}</h1>

  <hr>

  <div ui-view></div>

  <hr>


  <pre ng-if="$ctrl.tracks">{{$ctrl.tracks | json}}</pre>
  <pre ng-if="$ctrl.error">{{$ctrl.error | json}}</pre>
  `
};
