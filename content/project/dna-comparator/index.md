---
title: "Anagene"
link: "https://anagene.reseau-canope.fr"
startDate: 2013-09-01
date: 2016-06-15
job: "JS developer"
tags:
- "AngularJS"
---

Development of a <abbr title="Single Page Application">SPA</abbr> for middle and high schools. Project made on my own with the collaboration with the <abbr title="Information System Department">DSI</abbr> and 2 referent teachers<!--more-->
Teachers and students can compare DNA sequences from a virtual laboratory with different tools: DNA conversion, comparative analysis, DNA alignment, phylogenetic tree, dot-plot, enzymatic action and 3d rendering and handling.

Frontend

---

- Views and user actions are all handled with asynchronous calls
- Using a virtual scroll for the DNA bank
- Dynamic 3d vizualisation (`WebGL`, `D3.js`)
- Offline mode: HTML templates, medias, scripts and data are compressed then cached or persisted (`$resource`, `HTML5 Web Storage`).
Whenever the internet connection hang up, a degraded mode handles to disable some features
- **HTTP digest authentication** and *remember me* features (`angular-digest-auth`)
- Guided tour feature, Google Tag Manager
- Performance analysis with `AngularJS batarang`, `$destroy` event and `One-time binding`

Backend

---

- **API REST** with `Typo3` (`PHP5`)
- Implemetation of <abbr title="single sign-on">SSO</abbr> with <abbr title="Central Authentication Service">CAS</abbr>

Management

---

- Learning business vocabulary to discuss with referent teachers
- Development in AGILE context (`Scrum`, `daily meeting`)
- <abbr title="Continuous Integration">CI</abbr> with unit and e2e tests

<a href="https://anagene.reseau-canope.fr" target="_blank" rel="noopener" class="btn btn-primary">Anagene</a>