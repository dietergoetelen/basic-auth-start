import { AppController } from './root.component';
import { expect } from 'chai';

describe('RootComponent', () => {
  let controller: AppController;
  
  beforeEach(angular.mock.module('app'));
  beforeEach(inject(($componentController, $rootScope:ng.IRootScopeService) => {
    controller = $componentController('appRoot', { $scope: $rootScope.$new()});
  }));

  it('should have an undefined title before $onInit', () => {
    expect(controller.title).to.be.undefined;
  });

  it('should have a title $onInit', () => {
    controller.$onInit();
    expect(controller.title).to.be.equal('Welcome');
  });
});
