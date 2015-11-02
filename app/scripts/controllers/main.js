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
            image: 'http://lorempixel.com/50/50/technics',
            name: 'AngularJS'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'NodeJS'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Karma'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Protractor'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Yeoman'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'GruntJS'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Bower'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'jQuery'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'ReactJS'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Lodash'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'D3JS'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
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
            image: 'http://lorempixel.com/50/50/technics',
            name: 'flexbox'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Compass'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'CSS3 Media Queries'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'CSS3 Transitions'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'CSS3 Box-sizing'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'localStorage'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'SVG'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'WAI-ARIA'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
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
            image: 'http://lorempixel.com/50/50/technics',
            name: 'eZ publish'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Symfony 2'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Spip'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Typo 3'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Smarty'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'xPath'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
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
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Git'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Github'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
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
            image: 'http://lorempixel.com/50/50/technics',
            name: 'centOS'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Debian'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Apache 2'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'MySQL'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Shell'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
            name: 'Solar'
          },
          {
            image: 'http://lorempixel.com/50/50/technics',
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
            name: 'Rédaction de spéficifications fonctionnelles détaillées'
          },
          {
            name: 'Storyboard'
          },
          {
            name: 'Diagrammes UML'
          },
          {
            name: 'REST'
          },
          {
            name: 'Single-page application'
          },
          {
            name: 'State machine'
          },
          {
            name: 'Digest access authentication'
          },
          {
            name: 'Transclusion'
          }
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
        notes: 'Application pédagogique : comparaison de séquences A.D.N.'
      },
      {
        face: 'https://material.angularjs.org/0.11.2/img/list/60.jpeg',
        what: 'Espace personnel',
        link: 'http://monespace.mapa-assurances.fr',
        when: 'sept. 2012 / sept. 2013',
        who: 'MAPA Assurances',
        notes: 'Accès personnel aux services MAPA'
      }
    ];
  });
