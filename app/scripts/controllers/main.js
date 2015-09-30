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
        class: 'gray',
        mdRowspan: '3',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Javascript',
        list: [
          {
            name: 'AngularJS'
          },
          {
            name: 'lodash'
          },
          {
            name: 'D3JS'
          }
        ],
        foot: 'C\'est la technologie sur laquelle j\'ai fait le plus de progrès dernièrement.'
      }
    ];
  });
