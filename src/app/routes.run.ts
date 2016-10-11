import { AuthService } from './auth/auth.service';

route.$inject = ['$rootScope', AuthService.iid, '$window', '$state'];
function route($rootScope:ng.IRootScopeService, authService: AuthService, $window:ng.IWindowService, $state:ng.ui.IStateService) {

  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams, options) => {
    if (toState.data && toState.data.isProtected) {
      if (!authService.isAuthenticated()) {
        event.preventDefault();

        $window.alert('nope, you need to login first!');

        $state.go('root');
      }
    }
  });

}

export default route;
