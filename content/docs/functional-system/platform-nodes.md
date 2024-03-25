---
title: "Platform Nodes"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 120
toc: false
seo:
  title: "Bot Studio Docs - Platform Nodes"
  description: "In Bot Studio, there are nodes that are only accessible through their specific platforms. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, we have certain nodes that are only accessible through specific platforms. For example, you can't use Telegram's nodes on Discord bots as they serve different purposes. In this documentation, you'll learn more about how these nodes function and how to use them in your bots.

## Telegram Nodes

Bot Studio leverages the official [Telegram API endpoints](https://core.telegram.org/bots/api) to manage requests. A comprehensive list detailing the workings of Telegram nodes and how to utilize their options can be found at [this link](https://core.telegram.org/bots/api#available-methods).

While Bot Studio encompasses nearly all Telegram endpoint methods, there are a few that it opts not to include. In such cases, you can employ the API Request node to send requests directly to the Telegram endpoints. This provides you with the flexibility to interact with Telegram’s API in a more direct and customized manner, thereby enhancing the capabilities of your bot.

## Discord Nodes

Bot Studio utilizes the official [Discord API](https://discord.com/developers/docs) to manage bot functionality. Each Discord node in Bot Studio has its unique feature, and all of them use an original Discord API endpoint.

### Channel Nodes

For channel nodes, all nodes associated with channels in Bot Studio are powered by Discord’s [channel endpoints](https://discord.com/developers/docs/resources/channel). You can access a comprehensive list of all these endpoints through the official Discord API documentation. This will provide you with detailed information about each endpoint and how it can be used in your bot development process.

## WhatsApp Nodes

In Bot Studio, WhatsApp bots use the unofficial WhatsApp API, which is powered by the WhatsApp Web JS library. You can't send API requests to any specific endpoints to use these nodes.

{{< callout context="caution" >}}
WhatsApp bots are in BETA and will be fully supported soon.
{{< /callout >}}
