---
title: "{{ replace .Name "-" " " | title }}"
weight: {{ add (mul (len ((index (where .Site.Sections "Section" "technology") 0).Sections)) 10) 10 }}
headless: true
---

