---
title: "Anagene"
link: "https://anagene.reseau-canope.fr"
startDate: 2013-09-01
date: 2016-06-15
job: "Développeur JS"
tags:
- "AngularJS"
---

Développement d'une <abbr title="Single Page Application">SPA</abbr> pour les collèges et lycées. Ce projet a été réalisé par moi-même avec la collaboration de 2 profésseurs référents et de la <abbr title="Direction du système d'information">DSI</abbr>.<!--more-->
Professeurs et élèves peuvent comparer des séquences ADN depuis un laboratoire virtuel avec différents outils : conversion ADN, comparaison, alignement, arbre phylogénétique, dot-plot, action enzymatique et manipulation moléculaire en 3D.

Frontend

---

- Toutes les vues et les actions des utilisateurs sont appelées de manière asynchrone ;
- Utilisation d'un *scroll* virtuel pour la banque de séquences ADN ;
- Visualisation dynamique en 3D ;
- Mode hors-connection : les *templates*, les médias, les scripts et les données sont compressés puis mise en cache ou persistés (`$resource`, `HTML5 Web Storage`).
À chaque fois que la connexion internet est perdue, un mode dégradé prend le relais, il désactive certaines fonctionnalités ;
- Implémentation des fonctionnalités **authentification HTTP Digest** et *Se souvenir de moi* (`angular-digest-auth`) ;
- Implémentation d'un guide contextuel d'aide à l'utilisation et de Google Tag Manager ;
- Analyse des performances avec `AngularJS batarang`, l'évènement `$destroy` et le `One-time binding`.

Backend

---

- **API REST** avec `Typo3` (`PHP5`) ;
- Implémentation de <abbr title="single sign-on">SSO</abbr> avec <abbr title="Central Authentication Service">CAS</abbr>.

Autres

---

- Apprentissage du vocabulaire du métier pour discuter avec les professeurs référents ;
- Développement dans un contexte AGILE (`Scrum`, `daily meeting`) ;
- Intégration continue avec des tests unitaires et globaux (interfaces).

<a href="https://anagene.reseau-canope.fr" target="_blank" rel="noopener" class="btn btn-primary">Anagene</a>