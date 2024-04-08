---
title: "Bot Nodes"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 330
toc: false
seo:
  title: "Bot Studio Docs - Bot Nodes"
  description: "In this guide, we'll explore how bot nodes function across various platforms. We'll delve into their naming conventions, usage, and outputs."
  canonical: "https://www.botstudioo.com"
  noindex: false
images:
  - "platform-nodes-outputs.png"
---

In this guide, we'll explore how bot nodes function across various platforms. We'll delve into their naming conventions, usage, and outputs.

## Outputs

By default, only the "Event" nodes have outputs. Each event node has a single "Action" output and doesn't rely on external outputs to transfer the received data. This is because Bot Studio's functional systems utilize global variables. When a new event is received, the data from that event is transformed into global variables.

The use of global variables by "Event" nodes, as opposed to outputs such as "JSON", simplifies the process. Global variables are easier to use and require less knowledge for beginners.

What about platform nodes? By default, platform nodes do not have any outputs. This is in line with our goal of keeping Bot Studio simple. However, you can enable both "Action" and "JSON" outputs for platform nodes. To do this, navigate to "settings", "editor", and turn on the "Platform Nodes Outputs" option.

{{< figure src="images/platform-nodes-outputs.png" alt="The platform nodes when they have outputs." caption="The platform nodes when they have outputs." >}}

With these outputs, you can check what data will be returned after a node is executed, or you can execute other nodes. You can use the "JSON Extractor" node to extract the returned data or a coding node such as "Python" for more control.

## Node Names

We name default nodes based on their functions. For example, a node named "Match" checks if certain values or a condition match. However, platform nodes are named differently.

Platform nodes are named based on the libraries and API endpoints we use for them. We have a different algorithm for each platform. Let's look at some of these algorithms:

### Telegram Node Names

Telegram node names are based on the [official Telegram endpoints](https://core.telegram.org/bots/api#available-methods). For instance, the "Send Photo" node uses the [sendPhoto](https://core.telegram.org/bots/api#sendphoto) API method, and the "Send Location" node uses the [sendLocation](https://core.telegram.org/bots/api#sendlocation) API method.

Here are some examples of the naming algorithm for Telegram:

- Send Message: sendMessage
- Send Location: sendLocation
- Set Chat Administrator Custom Title: setChatAdministratorCustomTitle

We do not predefine these nodes on the server. You can create custom nodes in the editor, and if the Telegram endpoints support that node, your node will work!

### Discord Node Names

The [Discord official API endpoints](https://discord.com/developers/docs/intro) do not follow the same pattern as Telegram. The API methods vary, and sometimes the endpoint names are not intuitive. We are working on creating a new algorithm for Discord nodes, and these nodes may change in the near future.

Currently, Discord nodes do not follow a specific algorithm and are opinionated. It's possible that Discord may update its APIs in the future, or we may create an algorithm. But for now, you'll need to use our opinionated node names.

### WhatsApp Node Names

WhatsApp does not have any official endpoints. We use the [Whatsapp Web JS](https://wwebjs.dev) library to create WhatsApp bots. For example, a node named "Send Message" uses Whatsapp-web-js's "sendMessage" method. You can find a list of all these methods by [clicking here](https://github.com/pedroslopez/whatsapp-web.js/blob/main/index.d.ts#L8).

### Slack Node Names

Slack follows the same pattern as Telegram. We use the [official Slack endpoints](https://api.slack.com/methods) to name Slack nodes. For example, when a node is called "Post Chat Message", it means this node uses the "Post Chat Message" method from the Slack API.
