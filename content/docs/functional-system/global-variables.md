---
title: "Global Variables"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 130
toc: false
seo:
  title: "Bot Studio Docs - Global Variables"
  description: "Bot Studio's robot systems use global variables, an easy-to-use variable manager system. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, global variables are universally accessible throughout the entire process. These variables are created once during the process and are discarded once the process ends.

## Global Variables

Global variables are accessible across all nodes in a system. To use a global variable, simply enclose its name in brackets. For instance, `{key}` refers to the bot key.

Global variables can replace a given variable such as `{key}` with a given value such as `xxxxxxxxxx`. These variables are used to define values within your functional system.

## Case Sensitivity

Keep in mind that these variables are case-sensitive, meaning `key` and `KEY` are distinct. Also, if a value doesn’t exist, it won’t be replaced.

## Using Backslashes Before Global Variables

In certain scenarios, you might need to use the global variable name in text without replacing it with its value. In such cases, you should precede the global variable with a backslash, like so: `\{key}`.

## Creating Global Variables

Some global variables are inherently present in the process. For example, when your bot receives an event, that event generates global variables that encompass the event data. You can create custom global variables in the process using some nodes such as the "Set Global Variable" node or the "Python" node.

{{< callout context="caution" >}}
You can't create new global variables outside of the functional system.
{{< /callout >}}

## Receiving The Global Variables List

You can obtain a real-time list of all available global variables in your process using the `{global_variables}` variable, which returns a list of global variables along with their types (boolean, string, integer).

You can also use coding nodes such as the "Python" node to create a list of global variables in a customized format you prefer.
