---
title: "{{ replace .Name "-" " " | title }}"
render: "put-a-layout-name-here"
weight: {{ add (mul (len .Site.Sections) 10) 10 }}
draft: true
headless: true
---

