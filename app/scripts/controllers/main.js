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
      },
      {
        class: ['yellow', 'ts-2-item'],
        mdRowspan: '1',
        mdColspan: '1',
        mdColspanSm: '2',
        head: 'HTML & CSS',
        list: [
          {
            name: 'flexbox'
          },
          {
            name: 'transition'
          },
          {
            name: 'localStorage'
          },
          {
            name: 'WAI-ARIA'
          },
          {
            name: 'Digest access authentication'
          },
          {
            name: 'XSLT / DTD'
          },
          {
            name: 'Gmap'
          }
        ]
      },
      {
        class: ['blue', 'ts-3-item'],
        mdRowspan: '2',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'PHP',
        list: [
          {
            name: 'eZ publish'
          },
          {
            name: 'Symfony 2'
          },
          {
            name: 'Spip'
          },
          {
            name: 'Typo 3'
          },
          {
            name: 'Smarty'
          },
          {
            name: 'xPath'
          },
          {
            name: 'cURL'
          }
        ]
      },
      {
        class: ['purple', 'ts-2-item'],
        mdRowspan: '1',
        mdColspan: '1',
        mdColspanSm: '2',
        head: 'CVS',
        list: [
          {
            name: 'Git'
          },
          {
            name: 'Github'
          },
          {
            name: 'SVN'
          }
        ]
      },
      {
        class: ['green', 'ts-2-item'],
        mdRowspan: '1',
        mdColspan: '1',
        mdColspanSm: '2',
        head: 'System',
        list: [
          {
            name: 'centOS'
          },
          {
            name: 'Debian'
          },
          {
            name: 'Apache 2'
          },
          {
            name: 'MySQL'
          },
          {
            name: 'Shell'
          },
          {
            name: 'Solar'
          },
          {
            name: 'Perl'
          }
        ]
      }
    ];
    this.jobs = [
      {
        what: 'Anagène v3',
        when: 'sept. 2013 / dec. 2015',
        who: 'aYaline pour CANOPE',
        notes: 'Comparaison de séquences A.D.N.'
      }
    ];
  });
