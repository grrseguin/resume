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
    var
      months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
      availabilityDate = new Date();
    availabilityDate.setMonth( availabilityDate.getMonth() + 3);
    $scope.subList = [
      {
        title: 'Disponible en ' + months[availabilityDate.getMonth()] + ' ' + availabilityDate.getFullYear(),
        classList: [ 'md-primary' ]
      },
      {
        title: '38 ans'
      },
      {
        title: 'Français'
      },
      {
        title: '12 ans d\'expérience',
        classList: [ 'md-accent' ]
      },
      {
        title: '06 87 03 61 54',
        icon: 'images/phone.svg',
        onClick: 'callto:33687036154'
      },
      {
        title: 'grrseguin@gmail.com',
        classList: ['width-fix'],
        icon: 'images/email.svg',
        onClick: 'mailto:grrseguin@gmail.com'
      },
      {
        icon: 'images/sport.svg',
        title: 'Futsal & badminton'
      }
    ];
  });
