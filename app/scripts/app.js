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
    'ngMaterial'
  ])
  .config(['$compileProvider', '$mdThemingProvider', function( $compileProvider, $mdThemingProvider ){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|callto|mailto|file|javascript):/);
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue')
      .accentPalette('light-blue');
  }]);
