'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the Presentation of my CV
 */
angular.module('cvApp')
  .controller('HeaderCtrl', function( $scope ){
    $scope.subList = [
      {
        title: 'disponible en septembre 2015',
        classList: [ 'md-primary' ]
      },
      {
        title: '37 ans'
      },
      {
        title: 'français'
      },
      {
        title: '12 ans d\'expérience',
        classList: [ 'md-accent' ]
      },
      {
        title: '06 87 03 61 54',
        onClick: 'callto:33687036154'
      },
      {
        title: 'grrseguin@gmail.com',
        classList: ['width-fix'],
        onClick: 'mailto:grrseguin@gmail.com'
      }
    ];
  });
