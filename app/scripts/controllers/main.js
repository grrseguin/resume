'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('MainCtrl', function(){
    this.technicalSkills = [
      {
        class: ['red', 'ts-5-item'],
        mdRowspan: '3',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Javascript',
        list: [
          {
            name: 'AngularJS'
          },
          {
            name: 'NodeJS'
          },
          {
            name: 'Karma'
          },
          {
            name: 'Protractor'
          },
          {
            name: 'Yeoman'
          },
          {
            name: 'GruntJS'
          },
          {
            name: 'Bower'
          },
          {
            name: 'jQuery'
          },
          {
            name: 'ReactJS'
          },
          {
            name: 'Lodash'
          },
          {
            name: 'D3JS'
          }
        ],
        foot: 'C\'est la technologie sur laquelle j\'ai fait le plus de progrès dernièrement.'
      }
    ];
  });
