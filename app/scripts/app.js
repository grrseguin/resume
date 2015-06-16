'use strict';

/**
 * @ngdoc overview
 * @name cvApp
 * @description
 * # cvApp
 * This application have for goal to introduce Guillaume Seguin to you!
 * In an other hand, it's my curriculum vitae
 * Main module of the application.
 */
angular
  .module('cvApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(['$mdThemingProvider', function( $mdThemingProvider ){
    $mdThemingProvider
      .theme('default')
      .primaryPalette('grey')
      .accentPalette('blue');
  }]);
