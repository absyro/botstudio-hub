---
title: "Starting Bots"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 310
toc: false
seo:
  title: "Bot Studio Docs - Starting Bots"
  description: "In this documentation, you'll learn how Bot Studio starts a robot and what it does to it to make it operational. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, bots are activated based on server instructions. For instance, when the server restarts, it activates all bots that are not set to "offline" mode. Similarly, a bot is activated when you turn it "On" or create it.

#### Bot Startup Process

Each bot, depending on its system, is designed to start differently. For instance, Telegram bots use [webhooks](https://www.redhat.com/en/topics/automation/what-is-a-webhook), while Discord bots use [websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).

Bot Studio initiates each bot's client based on its startup method. Once initiated, the clients are ready to receive all events happening to the bots. To optimize server speed, Bot Studio only listens to specific incoming events, even though it can read all events.

Upon activating the bot's client in Bot Studio, the necessary event listeners are deployed to listen to specific events. The bot then handles these incoming events.

#### Handling Invalid Keys

If a bot uses an invalid or expired key (such as a Telegram token, Discord token, WhatsApp session, etc.), Bot Studio destroys the client, sets the bot status to offline, and notifies the user about the invalid key.

{{< callout context="note" >}}
This handler only works when starting the bot, not when the bot has started and then the key has been modified. Bots with invalid keys will never get started.
{{< /callout >}}

#### Client Restart Policy

By default, Bot Studio does not automatically restart clients as this can lead to unnecessary resource usage.

Here are the situations when a client destroys itself:

- Turning a bot offline
- Changing a bot key
- Notifying an invalid key
- Deleting a bot

And here are the situations when a client starts:

- Starting servers
- Turning a bot on
- Changing a bot key (after destroying the previous client, the new client will be created)
- Creating a bot

{{< callout context="note" >}}
Even node issues or a robot's functional system's issues can't destroy or restart a client.
{{< /callout >}}

When starting a client, if the client is already running, it will be destroyed. The same clients can't be activated at the same time.

#### Automatic Deactivation of Bots

If a bot has no activity for a long time, it will automatically be turned off. While Bot Studio won't delete any bots that are inactive for a long time, it will delete accounts that are not verified and inactive for a long time. Deleting an account means removing all bots within that account.
