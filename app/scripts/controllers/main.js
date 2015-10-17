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
        class: ['red', 'ts-3-item'],
        mdRowspan: '2',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Javascript',
        list: [
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'AngularJS'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'NodeJS'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'Karma'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'Protractor'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'Yeoman'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'GruntJS'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'Bower'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'jQuery'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'ReactJS'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'Lodash'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'D3JS'
          },
          {
            image: 'http://lorempixel.com/50/50/people',
            name: 'Gmap'
          }
        ],
        foot: 'C\'est la technologie sur laquelle j\'ai fait le plus de progrès dernièrement.'
      },
      {
        class: ['yellow', 'ts-2-item'],
        mdRowspan: '2',
        mdColspan: '1',
        mdColspanSm: '2',
        head: 'HTML & CSS',
        list: [
          {
            name: 'flexbox'
          },
          {
            name: 'Compass'
          },
          {
            name: 'CSS3 Media Queries'
          },
          {
            name: 'CSS3 Transitions'
          },
          {
            name: 'CSS3 Box-sizing'
          },
          {
            name: 'localStorage'
          },
          {
            name: 'SVG'
          },
          {
            name: 'WAI-ARIA'
          },
          {
            name: 'Digest access authentication'
          },
          {
            name: 'XSLT / DTD'
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
    this.projectSkills = [
      {
        class: ['red'],
        mdRowspan: '2',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Conception',
        list: [
          {
            name: 'Storyboard'
          },
          {
            name: 'Rédaction de spéficifications fonctionnelles détaillées'
          },
          {
            name: 'Diagrammes UML'
          },
        ]
      },
      {
        class: ['red'],
        mdRowspan: '2',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Réalisation',
        list: [
          {
            name: 'Zend studios'
          },
          {
            name: 'Netbeans'
          },
          {
            name: 'VIM'
          }
        ]
      },
      {
        class: ['red'],
        mdRowspan: '2,',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Recette',
        list: [
          {
            name: 'TCM'
          },
          {
            name: 'Karma'
          },
        ]
      },
      {
        class: ['red'],
        mdRowspan: '2',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Déploiement',
        list: [
          {
            name: 'Bamboo atlassian'
          },
          {
            name: 'Jenkins'
          }
        ]
      },
      {
        class: ['red'],
        mdRowspan: '2',
        mdColspan: '2',
        mdColspanSm: '1',
        head: 'Suivi',
        list: [
          {
            name: 'Relation client'
          },
          {
            name: 'Animation de réunion'
          },
          {
            name: 'Suivi des délais/charges'
          }
        ]
      }
    ];
    this.jobs = [
      {
        face: 'https://material.angularjs.org/0.11.2/img/list/60.jpeg',
        what: 'Anagène v3',
        when: 'sept. 2013 / dec. 2015',
        who: 'Réseau CANOPE',
        notes: 'Comparaison de séquences A.D.N. (AngularJS & Typo3)'
      },
      {
        face: 'https://material.angularjs.org/0.11.2/img/list/60.jpeg',
        what: 'Espace personnel',
        link: 'http://monespace.mapa-assurances.fr',
        when: 'sept. 2012 / sept. 2013',
        who: 'MAPA Assurances',
        notes: 'Accès personnel aux services MAPA (eZ Publish 5 - symfony 2)'
      }
    ];
  });
