import * as firebase from 'firebase';

export class AuthService {
  static iid: string = 'AuthService';

  private user:{md: string, displayName: string};
  private credential:{accessToken:string, provider:string, secret:string};
  private provider: firebase.auth.TwitterAuthProvider;

  static $inject = ['$rootScope', '$state'];
  constructor(private $rootScope:ng.IRootScopeService, private $state:ng.ui.IStateService) {
    this.provider = new firebase.auth.TwitterAuthProvider();
  }

  isAuthenticated() {
    return this.user != undefined;
  }

  getUser() {
    return this.user;
  }

  logout() {
    this.user = undefined;
    firebase.auth().signOut();
    this.$state.go('root');
  }

  login() {
    return firebase.auth().signInWithPopup(this.provider).then((result) => {

      this.$rootScope.$apply(() => {
        this.credential = result.credential;
        this.user = result.user;
      });

      return result;
    });
  }
}
