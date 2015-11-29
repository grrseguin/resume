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
        mdColspan: '4',
        mdRowspan: '7',
        mdColspanLg: '8',
        mdColspanMd: '1',
        mdRowspanMd: '3',
        mdColspanSm: '1',
        list: [
          {
            // image: 'images/angularjs.png',
            image: 'http://lorempixel.com/25/25/city/1/',
            name: 'AngularJS'
          },
          {
            // image: 'images/nodejs.png',
            image: 'http://lorempixel.com/25/25/city/2/',
            name: 'NodeJS'
          },
          {
            // image: 'images/d3js.png',
            image: 'http://lorempixel.com/25/25/city/3/',
            name: 'D3JS'
          },
          {
            // image: 'images/karma.png',
            image: 'http://lorempixel.com/25/25/city/4/',
            name: 'Karma'
          },
          {
            // image: 'images/gmap.png',
            image: 'http://lorempixel.com/25/25/city/5/',
            name: 'Gmap'
          },
          {
            // image: 'images/protractor.png',
            image: 'http://lorempixel.com/25/25/city/6/',
            name: 'Protractor'
          },
          {
            // image: 'images/yeoman.png',
            image: 'http://lorempixel.com/25/25/city/7/',
            name: 'Yeoman'
          },
          {
            // image: 'images/gruntjs.png',
            image: 'http://lorempixel.com/25/25/city/8/',
            name: 'GruntJS'
          },
          {
            // image: 'images/bower.png',
            image: 'http://lorempixel.com/25/25/city/9/',
            name: 'Bower'
          },
          {
            // image: 'images/jquery.jpeg',
            image: 'http://lorempixel.com/25/25/city/0/',
            name: 'jQuery'
          },
          {
            // image: 'images/reactjs.jpg',
            image: 'http://lorempixel.com/25/25/city/1/',
            name: 'ReactJS'
          },
          {
            // image: 'images/lodash.jpeg',
            image: 'http://lorempixel.com/25/25/city/2/',
            name: 'Lodash'
          }
        ],
        foot: 'Ma technologie préférée.'
      },
      {
        head: 'HTML & CSS',
        class: ['yellow', 'no-foot'],
        mdColspan: '3',
        mdRowspan: '7',
        mdColspanLg: '2',
        mdColspanMd: '1',
        mdRowspanMd: '2',
        mdColspanSm: '1',
        list: [
          {
            // image: 'images/css3.png',
            image: 'http://lorempixel.com/25/25/city/3/',
            name: 'Media Query'
          },
          {
            // image: 'images/compass.png',
            image: 'http://lorempixel.com/25/25/city/4/',
            name: 'Compass'
          },
          {
            // image: 'images/css3.png',
            image: 'http://lorempixel.com/25/25/city/5/',
            name: 'Transition'
          },
          {
            // image: 'images/html5.svg',
            image: 'http://lorempixel.com/25/25/city/6/',
            name: 'WAI-ARIA'
          },
          {
            // image: 'images/css3.png',
            image: 'http://lorempixel.com/25/25/city/7/',
            name: 'Box-sizing'
          },
          {
            // image: 'images/html5.svg',
            image: 'http://lorempixel.com/25/25/city/8/',
            name: 'localStorage'
          },
          {
            // image: 'images/w3c.jpg',
            image: 'http://lorempixel.com/25/25/city/9/',
            name: 'XSLT / DTD'
          },
          {
            // image: 'images/css3.png',
            image: 'http://lorempixel.com/25/25/city/0/',
            name: 'flexbox'
          },
          {
            // image: 'images/html5.svg',
            image: 'http://lorempixel.com/25/25/city/1/',
            name: 'SVG'
          }
        ]
      },
      {
        head: 'CVS',
        class: ['purple', 'no-foot'],
        mdColspan: '1',
        mdRowspan: '7',
        mdColspanLg: '1',
        mdColspanMd: '1',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        list: [
          {
            // image: 'images/git.png',
            image: 'http://lorempixel.com/25/25/city/2/',
            name: 'Git'
          },
          {
            // image: 'images/github.png',
            image: 'http://lorempixel.com/25/25/city/3/',
            name: 'Github'
          },
          {
            // image: 'images/tortoise_svn.jpg',
            image: 'http://lorempixel.com/25/25/city/4/',
            name: 'SVN'
          }
        ]
      },
      {
        head: 'Système',
        class: ['green', 'no-foot'],
        mdColspan: '2',
        mdRowspan: '7',
        mdColspanLg: '4',
        mdColspanMd: '1',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        list: [
          {
            // image: 'images/centOS.png',
            image: 'http://lorempixel.com/25/25/city/2/',
            name: 'centOS'
          },
          {
            // image: 'images/debian.png',
            image: 'http://lorempixel.com/25/25/city/3/',
            name: 'Debian'
          },
          {
            // image: 'images/apache.gif',
            image: 'http://lorempixel.com/25/25/city/4/',
            name: 'Apache 2'
          },
          {
            // image: 'images/mysql.png',
            image: 'http://lorempixel.com/25/25/city/5/',
            name: 'MySQL'
          },
          {
            // image: 'images/unix.jpg',
            image: 'http://lorempixel.com/25/25/city/6/',
            name: 'Shell'
          },
          {
            // image: 'images/solr.gif',
            image: 'http://lorempixel.com/25/25/city/7/',
            name: 'Solr'
          },
          {
            // image: 'images/perl.gif',
            image: 'http://lorempixel.com/25/25/city/8/',
            name: 'Perl'
          }
        ]
      },
      {
        head: 'PHP',
        class: ['cyan', 'no-foot'],
        mdColspan: '2',
        mdRowspan: '7',
        mdColspanLg: '4',
        mdColspanMd: '1',
        mdRowspanMd: '1',
        mdColspanSm: '1',
        list: [
          {
            // image: 'images/ez_publish.png',
            image: 'http://lorempixel.com/25/25/city/5/',
            name: 'eZ publish'
          },
          {
            // image: 'images/symfony2.png',
            image: 'http://lorempixel.com/25/25/city/6/',
            name: 'Symfony 2'
          },
          {
            // image: 'images/spip.png',
            image: 'http://lorempixel.com/25/25/city/7/',
            name: 'Spip'
          },
          {
            // image: 'images/typo3.png',
            image: 'http://lorempixel.com/25/25/city/8/',
            name: 'Typo 3'
          },
          {
            // image: 'images/php.jpg',
            image: 'http://lorempixel.com/25/25/city/9/',
            name: 'cURL'
          },
          {
            // image: 'images/smarty.jpg',
            image: 'http://lorempixel.com/25/25/city/0/',
            name: 'Smarty'
          },
          {
            // image: 'images/php.jpg',
            image: 'http://lorempixel.com/25/25/city/1/',
            name: 'xPath'
          }
        ]
      }
    ];
    this.projectSkills = [
      {
        head: 'Conception',
        class: ['orange', 'no-foot'],
        mdColspan: '2',
        mdRowspan: '1',
        mdColspanLg: '1',
        mdColspanMd: '6',
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
        mdColspanMd: '5',
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
        mdColspanMd: '4',
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
        mdColspanMd: '5',
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
        mdColspanMd: '5',
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
