import * as angular from 'angular';
import appRoot from './root.component';
import {TrackService} from './track.service';

export default angular.module('app.root', [])
  .component('appRoot', appRoot)
  .service(TrackService.iid, TrackService)
  ;
