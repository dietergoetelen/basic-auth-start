import { TrackService } from './root/track.service';

function routeConfig($urlRouterProvider: ng.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      template: `<h1>Home</h1>`
    })
    .state('admin', {
      data: {
        isProtected: true
      },
      resolve: {
        tracks: getTracks
      },
      url: '/admin',
      template: `<h1>Mag alleen zichtbaar zijn voor ingelogde gebruikers!</h1><pre>{{ $ctrl.tracks | json }}</pre>`,
      controller: adminController,
      controllerAs: '$ctrl'
    });

    getTracks.$inject = [TrackService.iid];
    function getTracks(trackService:TrackService) {
      return trackService.getTracks();
    }

    adminController.$inject = ['tracks'];
    function adminController(tracks) {
      this.tracks = tracks;
    }
}

export default routeConfig;
