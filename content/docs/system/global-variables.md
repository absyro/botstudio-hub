---
title: "Global Variables"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 400
toc: false
seo:
  title: "Bot Studio Docs - Global Variables"
  description: "Bot Studio's chatbot systems use global variables, an easy-to-use variable manager system. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, global variables serve as universally accessible variables throughout the entire process. These variables are instantiated once during the process and are discarded once the process concludes.

---

##### Global Variables

They are termed “global” because they are accessible across all nodes in a system. To use a global variable, simply enclose its name in brackets. For instance, `{key}` refers to the chatbot key.

##### [Case Sensitivity](https://en.wikipedia.org/wiki/Case_sensitivity)

Bear in mind that these variables are case-sensitive, meaning `key` and `kEy` are distinct. Also, if a value doesn’t exist, it won’t be replaced.

##### Using Backslashes Before Global Variables

In certain scenarios, you might need to use the global variable name in text without replacing it with its value. In such cases, you should precede the global variable with a backslash, like so: `\{key}`.

##### Creating Global Variables

Some global variables are inherently present in the process. For example, when your chatbot receives an event, that event generates global variables that encompass the event data.

##### Receiving The Global Variables List

You can obtain a real-time list of all available global variables in your process using the `{global_variables}` variable, which returns a list of global variables along with their types (boolean, string, integer).
