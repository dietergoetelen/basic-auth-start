
export class TrackService {
  static iid: string = 'TrackService';

  static $inject = ['$http'];
  constructor(private $http:ng.IHttpService){}

  getTracks() {
    return this.$http.get('https://ng-auth-6ea06.firebaseio.com/tracks.json')
      .then(result => result.data);
  }
}
