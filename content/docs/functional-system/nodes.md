---
title: "Nodes"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 100
toc: false
seo:
  title: "Bot Studio Docs - Nodes"
  description: "In Bot Studio, nodes are like puzzle pieces. You piece them together to easily create your robots. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

At Bot Studio, we simplify the process of creating bots by using visual scripting. This method involves elements called nodes. By strategically connecting these nodes, you can build a fully functional bot system. Nodes fall into two categories:

#### Default Nodes

Default nodes are versatile and can be used across various platforms. Whether you're developing a bot for WhatsApp, Telegram, or any other platform, you can incorporate a default node into your system.

#### Platform-Specific Nodes

These nodes are designed for specific platforms. For example, you can use the "Send Message" node for Telegram bots, but this won't work for a Discord bot.

---

#### Sockets: The Connectors of Nodes

All nodes come with a default socket known as the "Action" socket. By linking the action sockets of different nodes, your bot can determine the sequence of operations to perform after the current node.

All nodes have an action socket, although the names may vary.

In some cases, nodes may have more than one action socket. These additional action sockets give you more control over your nodes. For example, some nodes have two potential outputs: true or false. If an action is successful, the true action output is triggered. Conversely, if the action fails, the false action socket is triggered. Understanding these scenarios is easier than it seems.

Some nodes may need to exchange data. For instance, if you use Python nodes in Bot Studio to add coding to your bot, your code might produce JSON data. To handle this, we've introduced a new socket type called the "JSON" socket. With the JSON socket, nodes can easily transfer JSON data among themselves.

You might be able to connect some sockets to other nodes more than once. In most cases, JSON sockets will ignore attempts to connect to a node twice, but all action sockets can connect to multiple nodes.

---

#### Node Executions: Turning Visual Data into Action

Nodes essentially represent a visual form of data. Bot Studio's servers are engineered to transform this data into operational scripts.

If a node executes successfully, the next node connected via the action socket is then executed. This process continues until there are no more active nodes.

Whenever an event happens, like your bot receiving a new message, your functional system is reactivated. If any issues occur during execution, there are two possible outcomes: either the entire system stops executing, or only the active node fails to execute.
