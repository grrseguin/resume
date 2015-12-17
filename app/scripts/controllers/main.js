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
        mdColspanXl: '5',
        mdRowspanXl: '12',
        mdColspanLg: '5',
        mdRowspanLg: '12',
        mdColspanMd: '1',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        mdRowspanSm: '12',
        mdColspanXs: '1',
        mdRowspanXs: '12',
        list: [
          {
            image: 'images/technic/angularjs.png',
            name: 'AngularJS'
          },
          {
            image: 'images/technic/nodejs.png',
            name: 'NodeJS'
          },
          {
            image: 'images/technic/d3js.png',
            name: 'D3JS'
          },
          {
            image: 'images/technic/karma.png',
            name: 'Karma'
          },
          {
            image: 'images/technic/gmap.png',
            name: 'Gmap'
          },
          {
            image: 'images/technic/protractor.png',
            name: 'Protractor'
          },
          {
            image: 'images/technic/yeoman.png',
            name: 'Yeoman'
          },
          {
            image: 'images/technic/gruntjs.png',
            name: 'GruntJS'
          },
          {
            image: 'images/technic/bower.png',
            name: 'Bower'
          },
          {
            image: 'images/technic/jquery.jpeg',
            name: 'jQuery'
          },
          {
            image: 'images/technic/reactjs.jpg',
            name: 'ReactJS'
          },
          {
            image: 'images/technic/lodash.jpeg',
            name: 'Lodash'
          }
        ],
        foot: 'Ma technologie préférée.'
      },
      {
        head: 'HTML & CSS',
        class: ['yellow', 'no-foot'],
        mdColspanXl: '4',
        mdRowspanXl: '12',
        mdColspanLg: '4',
        mdRowspanLg: '12',
        mdColspanMd: '1',
        mdRowspanMd: '2',
        mdColspanSm: '1',
        mdRowspanSm: '12',
        mdColspanXs: '1',
        mdRowspanXs: '12',
        list: [
          {
            image: 'images/technic/css3.png',
            name: 'Media Query'
          },
          {
            image: 'images/technic/compass.png',
            name: 'Compass'
          },
          {
            image: 'images/technic/css3.png',
            name: 'Transition'
          },
          {
            image: 'images/technic/html5.svg',
            name: 'WAI-ARIA'
          },
          {
            image: 'images/technic/css3.png',
            name: 'Box-sizing'
          },
          {
            image: 'images/technic/html5.svg',
            name: 'localStorage'
          },
          {
            image: 'images/technic/w3c.jpg',
            name: 'XSLT / DTD'
          },
          {
            image: 'images/technic/css3.png',
            name: 'flexbox'
          },
          {
            image: 'images/technic/html5.svg',
            name: 'SVG'
          }
        ]
      },
      {
        head: 'CVS',
        class: ['purple', 'no-foot'],
        mdColspanXl: '2',
        mdRowspanXl: '12',
        mdColspanLg: '2',
        mdRowspanLg: '12',
        mdColspanMd: '1',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        mdRowspanSm: '12',
        mdColspanXs: '1',
        mdRowspanXs: '12',
        list: [
          {
            image: 'images/technic/git.png',
            name: 'Git'
          },
          {
            image: 'images/technic/github.png',
            name: 'Github'
          },
          {
            image: 'images/technic/tortoise_svn.jpg',
            name: 'SVN'
          }
        ]
      },
      {
        head: 'Système',
        class: ['green', 'no-foot'],
        mdColspanXl: '3',
        mdRowspanXl: '12',
        mdColspanLg: '3',
        mdRowspanLg: '12',
        mdColspanMd: '1',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        mdRowspanSm: '12',
        mdColspanXs: '1',
        mdRowspanXs: '12',
        list: [
          {
            image: 'images/technic/centOS.png',
            name: 'centOS'
          },
          {
            image: 'images/technic/debian.png',
            name: 'Debian'
          },
          {
            image: 'images/technic/apache.gif',
            name: 'Apache 2'
          },
          {
            image: 'images/technic/mysql.png',
            name: 'MySQL'
          },
          {
            image: 'images/technic/unix.jpg',
            name: 'Shell'
          },
          {
            image: 'images/technic/solr.gif',
            name: 'Solr'
          },
          {
            image: 'images/technic/perl.gif',
            name: 'Perl'
          }
        ]
      },
      {
        head: 'PHP',
        class: ['cyan', 'no-foot'],
        mdColspanXl: '3',
        mdRowspanXl: '12',
        mdColspanLg: '3',
        mdRowspanLg: '12',
        mdColspanMd: '1',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        mdRowspanSm: '12',
        mdColspanXs: '1',
        mdRowspanXs: '12',
        list: [
          {
            image: 'images/technic/ez_publish.png',
            name: 'eZ publish'
          },
          {
            image: 'images/technic/symfony2.png',
            name: 'Symfony 2'
          },
          {
            image: 'images/technic/spip.png',
            name: 'Spip'
          },
          {
            image: 'images/technic/typo3.png',
            name: 'Typo 3'
          },
          {
            image: 'images/technic/php.jpg',
            name: 'cURL'
          },
          {
            image: 'images/technic/smarty.jpg',
            name: 'Smarty'
          },
          {
            image: 'images/technic/php.jpg',
            name: 'xPath'
          }
        ]
      }
    ];
    this.projectSkills = [
      {
        head: 'Conception',
        class: ['orange', 'no-foot'],
        mdColspanXl: '4',
        mdRowspanXl: '1',
        mdColspanLg: '1',
        mdRowspanLg: '1',
        mdColspanMd: '6',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        mdRowspanSm: '1',
        mdColspanXs: '1',
        mdRowspanXs: '1',
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
        mdColspanXl: '1',
        mdRowspanXl: '1',
        mdColspanLg: '1',
        mdRowspanLg: '1',
        mdColspanMd: '5',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        mdRowspanSm: '1',
        mdColspanXs: '1',
        mdRowspanXs: '1',
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
        mdColspanXl: '3',
        mdRowspanXl: '1',
        mdColspanLg: '1',
        mdRowspanLg: '1',
        mdColspanMd: '4',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        mdRowspanSm: '1',
        mdColspanXs: '1',
        mdRowspanXs: '1',
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
        mdColspanXl: '1',
        mdRowspanXl: '1',
        mdColspanLg: '1',
        mdRowspanLg: '1',
        mdColspanMd: '5',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        mdRowspanSm: '1',
        mdColspanXs: '1',
        mdRowspanXs: '1',
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
        mdColspanXl: '2',
        mdRowspanXl: '1',
        mdColspanLg: '1',
        mdRowspanLg: '1',
        mdColspanMd: '5',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        mdRowspanSm: '1',
        mdColspanXs: '1',
        mdRowspanXs: '1',
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
        face: 'images/anagene.png',
        link: '//anagene.reseau-canope.fr',
        when: 'sept. 2013 / dec. 2015',
        notes: 'Application pédagogique : comparaison de séquences A.D.N. - @ aYaline'
      },
      {
        what: 'Espace personnel',
        who: 'MAPA Assurances',
        role: 'Développeur',
        face: 'images/mapa.png',
        link: '//monespace.mapa-assurances.fr',
        when: 'sept. 2012 / sept. 2013',
        notes: 'Accès personnel aux services MAPA - @ aYaline'
      },
      {
        what: 'enpaysdelaloire.com',
        who: 'S.P.R.',
        role: 'Chef de projet',
        face: 'images/enpaysdelaloire.png',
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
    this.formations = [
      {
        what: 'Programmation en Visual Basic .NET avec Microsoft .NET (réf. 2560)',
        when: 'Mai 2006',
        face: 'http://lorempixel.com/120/50/city/1/'
      },
      {
        what: 'Formation ingénieur en développement LOTUS et INTERNET',
        when: '2001-2002',
        face: 'http://lorempixel.com/120/50/city/2/'
      },
      {
        what: 'DESS Système d’Information et Contrôle',
        when: '2000-2001',
        face: 'http://lorempixel.com/120/50/city/3/'
      },
      {
        what: 'Maîtrise Administration et Gestion des Entreprises',
        when: '1998-1999',
        face: 'http://lorempixel.com/120/50/city/4/'
      },
      {
        what: 'Bac série ES',
        when: '1994-1995',
        face: 'http://lorempixel.com/120/50/city/1/'
      }
    ];
  });
