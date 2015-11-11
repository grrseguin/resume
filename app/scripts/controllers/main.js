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
        head: 'Javascript',
        class: ['red'],
        mdColspan: '8',
        mdRowspan: '5',
        mdColspanLg: '8',
        mdColspanMd: '10',
        mdRowspanMd: '9',
        mdColspanSm: '1',
        list: [
          {
            image: 'images/angularjs.png',
            name: 'AngularJS'
          },
          {
            image: 'images/nodejs.png',
            name: 'NodeJS'
          },
          {
            image: 'images/d3js.png',
            name: 'D3JS'
          },
          {
            image: 'images/karma.png',
            name: 'Karma'
          },
          {
            image: 'images/gmap.png',
            name: 'Gmap'
          },
          {
            image: 'images/protractor.png',
            name: 'Protractor'
          },
          {
            image: 'images/yeoman.png',
            name: 'Yeoman'
          },
          {
            image: 'images/gruntjs.png',
            name: 'GruntJS'
          },
          {
            image: 'images/bower.png',
            name: 'Bower'
          },
          {
            image: 'images/jquery.jpeg',
            name: 'jQuery'
          },
          {
            image: 'images/reactjs.jpg',
            name: 'ReactJS'
          },
          {
            image: 'images/lodash.jpeg',
            name: 'Lodash'
          }
        ],
        foot: 'Ma technologie préférée.'
      },
      {
        head: 'HTML & CSS',
        class: ['yellow', 'no-foot'],
        mdColspan: '2',
        mdRowspan: '9',
        mdColspanLg: '2',
        mdColspanMd: '10',
        mdRowspanMd: '6',
        mdColspanSm: '1',
        list: [
          {
            image: 'images/css3.png',
            name: 'Media Query'
          },
          {
            image: 'images/compass.png',
            name: 'Compass'
          },
          {
            image: 'images/css3.png',
            name: 'Transition'
          },
          {
            image: 'images/html5.svg',
            name: 'WAI-ARIA'
          },
          {
            image: 'images/css3.png',
            name: 'Box-sizing'
          },
          {
            image: 'images/html5.svg',
            name: 'localStorage'
          },
          {
            image: 'images/w3c.jpg',
            name: 'XSLT / DTD'
          },
          {
            image: 'images/css3.png',
            name: 'flexbox'
          },
          {
            image: 'images/w3c.jpg',
            name: 'SVG'
          }
        ]
      },
      {
        head: 'CVS',
        class: ['purple', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '9',
        mdColspanLg: '1',
        mdColspanMd: '10',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        list: [
          {
            image: 'images/git.png',
            name: 'Git'
          },
          {
            image: 'images/github.png',
            name: 'Github'
          },
          {
            image: 'images/tortoise_svn.jpg',
            name: 'SVN'
          }
        ]
      },
      {
        head: 'PHP',
        class: ['cyan', 'no-foot'],
        mdColspan: '4',
        mdRowspan: '4',
        mdColspanLg: '4',
        mdColspanMd: '10',
        mdRowspanMd: '5',
        mdColspanSm: '1',
        list: [
          {
            image: 'images/ez_publish.png',
            name: 'eZ publish'
          },
          {
            image: 'images/symfony2.png',
            name: 'Symfony 2'
          },
          {
            image: 'images/spip.png',
            name: 'Spip'
          },
          {
            image: 'images/typo3.png',
            name: 'Typo 3'
          },
          {
            image: 'images/php.jpg',
            name: 'cURL'
          },
          {
            image: 'images/smarty.jpg',
            name: 'Smarty'
          },
          {
            image: 'images/php.jpg',
            name: 'xPath'
          }
        ]
      },
      {
        head: 'Système',
        class: ['green', 'no-foot'],
        mdColspan: '4',
        mdRowspan: '4',
        mdColspanLg: '4',
        mdColspanMd: '10',
        mdRowspanMd: '5',
        mdColspanSm: '1',
        list: [
          {
            image: 'images/centOS.png',
            name: 'centOS'
          },
          {
            image: 'images/debian.png',
            name: 'Debian'
          },
          {
            image: 'images/apache.gif',
            name: 'Apache 2'
          },
          {
            image: 'images/mysql.png',
            name: 'MySQL'
          },
          {
            image: 'images/unix.jpg',
            name: 'Shell'
          },
          {
            image: 'images/solr.gif',
            name: 'Solr'
          },
          {
            image: 'images/perl.gif',
            name: 'Perl'
          }
        ]
      }
    ];
    this.projectSkills = [
      {
        head: 'Conception',
        class: ['orange', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '1',
        mdColspanLg: '1',
        mdColspanMd: '3',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        list: [
          {
            name: 'Spéficifications fonctionnelles détaillées'
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
        head: 'Réalisation',
        class: ['blue', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '1',
        mdColspanLg: '1',
        mdColspanMd: '2',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        list: [
          {
            name: 'Zend studio'
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
        head: 'Suivi',
        class: ['gray', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '1',
        mdColspanLg: '1',
        mdColspanMd: '2',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        list: [
          {
            name: 'Relation client'
          },
          {
            name: 'Animation de réunion'
          },
          {
            name: 'Suivi des délais/charges'
          },
          {
            name: 'Jira'
          },
          {
            name: 'MantisBT'
          }
        ]
      },
      {
        head: 'Recette',
        class: ['pink', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '1',
        mdColspanLg: '1',
        mdColspanMd: '2',
        mdRowspanMd: '1',
        mdColspanSm: '1',
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
        head: 'Déploiement',
        class: ['brown', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '1',
        mdColspanLg: '1',
        mdColspanMd: '2',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        list: [
          {
            name: 'Bamboo atlassian'
          },
          {
            name: 'Jenkins'
          }
        ]
      }
    ];
    this.jobs = [
      {
        what: 'Anagène v3',
        who: 'Réseau CANOPÉ',
        role: 'Développeur',
        face: 'http://lorempixel.com/120/60/business/1',
        link: '//anagene.reseau-canope.fr',
        when: 'sept. 2013 / dec. 2015',
        notes: 'Application pédagogique : comparaison de séquences A.D.N. - @ aYaline'
      },
      {
        what: 'Espace personnel',
        who: 'MAPA Assurances',
        role: 'Développeur',
        face: 'http://lorempixel.com/120/60/business/2',
        link: '//monespace.mapa-assurances.fr',
        when: 'sept. 2012 / sept. 2013',
        notes: 'Accès personnel aux services MAPA - @ aYaline'
      },
      {
        what: 'enpaysdelaloire.com',
        who: 'Société publique régionale',
        role: 'Chef de projet',
        face: 'http://lorempixel.com/120/60/business/3',
        link: '//enpaysdelaloire.com',
        when: 'oct. 2011 / sept. 2013',
        notes: 'Vitrine touristique - @ aYaline'
      },
      {
        what: 'Jobinnnovation',
        who: 'Etincel',
        role: 'Chef de projet',
        face: 'images/jobinnovation.png',
        // link: '//ms.ayaline.com/jobinnovation/site',
        when: 'oct. 2009 / sept. 2012',
        notes: 'Plate-forme de réseau social professionnel - @ aYaline'
      }
    ];
  });
