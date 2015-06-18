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
    $scope.list = [
      {
        face : 'images/avatar.jpg',
        alt: 'Avatar',
        text: 'Guillaume Seguin'
      },
      {
        text: 'Développeur Web'
      }
    ];
    $scope.subList = [
      {
        title: 'disponible en septembre 2015',
        onClick: false
      },
      {
        title: '37 ans',
        onClick: false
      },
      {
        title: '12 ans d\'expérience',
        onClick: false
      },
      {
        title: 'français',
        onClick: false
      },
      {
        title: '06 87 03 61 54',
        onClick: 'callto:33687036154'
      },
      {
        title: 'grrseguin@gmail.com',
        onClick: 'mailto:grrseguin@gmail.com'
      }
    ];
  });
