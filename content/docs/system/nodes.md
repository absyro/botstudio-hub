---
title: "1. Nodes"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 810
toc: true
seo:
  title: "Bot Studio Docs - Nodes"
  description: "In Bot Studio, nodes are like puzzle pieces. You piece them together to easily create your chatbots. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, we employ visual scripting to facilitate the creation of chatbots without the need for coding. This system incorporates elements known as nodes. By strategically linking these nodes, you can construct a fully operational chatbot system. There are two categories of nodes:

##### Default Nodes

These nodes are versatile and can be utilized across various platforms. Whether you’re developing a chatbot for WhatsApp, Telegram, or any other platform, you can incorporate a default node into your system.

##### Platform Nodes

These nodes will be used only for specific platforms. As an example, you can use Telegram's "Send Message" node to send a message to Telegram bots, but you can't do the same for a Discord bot.

---

### Sockets

By default, all nodes are equipped with a socket known as the “Action” socket. By interconnecting the action sockets of various nodes, your chatbot can discern the sequence of operations to execute after the current node.

Certain nodes may require data exchange. For instance, when you employ Python nodes in Bot Studio to incorporate coding into your chatbot, your code might generate JSON data. To accommodate this, we’ve introduced a new socket type called the “JSON” socket. With the JSON socket, nodes can seamlessly transfer JSON data amongst themselves.

---

### Nodes Executions

Nodes essentially represent a visual form of data. The servers at Bot Studio are designed to convert this data into operational scripts.

If a node executes successfully, the subsequent node connected via the action socket is then executed. This process continues until there are no more active nodes.

Whenever an event occurs, such as your chatbot receiving a new message, your functional system is reactivated. If any issues arise during execution, there are two possible outcomes: either the entire system halts execution, or only the active node fails to execute.

All nodes possess an action socket, although the names may vary.

In some instances, nodes may have more than one action socket. These additional action sockets provide greater control over your nodes. For example, some nodes have two potential outputs: true or false. If an action is successful, the true action output is triggered. Conversely, if the action fails, the false action socket is triggered. Grasping these scenarios is simpler than it appears.

You may be able to connect some sockets to other nodes more than once. In most cases, JSON sockets will disregard attempts to connect to a node twice, but all action sockets can connect to multiple nodes.

---

On this page, you've gained an understanding of what a node is and how it operates. Continue to the subsequent pages for a more in-depth exploration of node functionalities. Happy learning!