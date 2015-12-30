'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('cvApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of technical skills to the controller', function () {
    expect(MainCtrl.technicalSkills.length).toBeGreaterThan(1);
  });

  it('should attach a list of project skills to the controller', function () {
    expect(MainCtrl.projectSkills.length).toBeGreaterThan(1);
  });

  it('should attach a list of jobs to the controller', function () {
    expect(MainCtrl.jobs.length).toBeGreaterThan(1);
  });

  it('should attach a list of formations to the controller', function () {
    expect(MainCtrl.formations.length).toBeGreaterThan(1);
  });
});
