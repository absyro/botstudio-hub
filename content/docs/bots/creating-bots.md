---
title: "Creating Bots"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 300
toc: false
seo:
  title: "Bot Studio Docs - Creating Bots"
  description: "Want to create a robot without coding for free? Then Bot Studio is what you need. Click here to see how to create a robot for all platforms."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

Creating a bot using Bot Studio is straightforward. You just need to fill in some basic configurations, and then you can create your bot. Here's how you can create a bot:

## Telegram Bot

1. Click on the "Create Bot" button on the sidebar of the dashboard page.
2. Select the Telegram platform and click on the "Next" button.
3. In the configuration form, enter a name for your bot (minimum of 2 letters).
4. Enter the token you've received from Telegram's [@BotFather](https://t.me/BotFather).

To get a [@BotFather](https://t.me/BotFather) token:

1. Open the Telegram app and send a message to [@BotFather](https://t.me/BotFather).
2. Send the /newbot command and fill all required forms to create a bot.
3. After creating a bot, [@BotFather](https://t.me/BotFather) will send you a message with your bot token. Use this token in Bot Studio's Telegram configuration.

{{< callout context="note" >}}
When creating Telegram bots for a Telegram channel, the bot must have the capability to read events. For instance, it should be able to process message events and message contents to respond to messages or manage groups to perform tasks such as changing profile pictures.
{{< /callout >}}

## Discord Bot

1. Click on the "Create Bot" button on the sidebar of the dashboard page.
2. Select the Discord platform and click on the "Next" button.
3. In the configuration form, enter a name for your bot (minimum of 2 letters).
4. Enter the token you've received from the [Discord Developer Portal](https://discord.com/developers/applications).

To get a [Discord Developer Portal](https://discord.com/developers/applications) token:

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).
2. Create a new application and click on the "Bot" button on the sidebar.
3. Click on the "Reset Token" button and copy the new Discord token. Use this token to configure your bot.

{{< callout context="note" >}}
When adding a Discord bot to your channel, it must have the ability to read events and messages. For instance, it needs to be able to read messages to respond to message events or to access message content for certain features. It's advisable to grant your bot access to all necessary features.
{{< /callout >}}

## WhatsApp Bot

1. Click on the "Create Bot" button on the sidebar of the dashboard page.
2. Select the WhatsApp platform and click on the "Next" button.
3. In the configuration form, enter a name for your bot (minimum of 2 letters).
4. Scan the QR code using your WhatsApp account. Visit the [official WhatsApp website](https://faq.whatsapp.com/1317564962315842/?cms_platform=web) to learn how to scan a new QR code.

After filling in the configuration, read Bot Studio's "Terms & Conditions". If you agree with these terms, go to the next form and check the accuracy of the configuration. Then click on the "Create" button and wait for the process to finish.

If the bot was successfully created, you'll be redirected to the dashboard and be able to manage your bot from the "Bots" sub-menu. If you face any issues, you'll see a notification about the issue cause.

{{< callout context="note" >}}
Bot Studio's WhatsApp bots do not utilize official WhatsApp services. If these bots are employed for spamming or disseminating viruses, WhatsApp may suspend the associated account. It is recommended to utilize these bots solely within group chats.
{{< /callout >}}

## Slack Bot

1. Click on the "Create Bot" button on the sidebar of the dashboard page.
2. Select the Slack platform and click on the "Next" button.
3. In the configuration form, enter a name for your bot (minimum of 2 letters).
4. Enter the token you've received from the [Slack Applications](https://api.slack.com/apps).

To get a [Slack Applications](https://api.slack.com/apps) token:

- Go to the [Slack Applications](https://api.slack.com/apps).
- Click on the "Create New App" button.
- Click on the "From an app manifest" option.
- Pick a workspace to develop your app in and click on the "Next" button.
- Enter one of the following data sets as the manifest for your app:

{{< details "YAML" >}}

```yaml
display_information:
  name: "Bot Studio"
  description: "www.botstudioo.com"
  long_description: "This robot was crafted using Bot Studio's no-code robot maker, available at www.botstudioo.com. The details provided serve as an illustration of Bot Studio's capabilities within Slack, and they can be tailored to suit your specific requirements."
features:
  app_home:
    home_tab_enabled: true
    messages_tab_enabled: true
  bot_user:
    display_name: "Bot Studio"
oauth_config:
  scopes:
    bot: ["app_mentions:read", "im:history", "bookmarks:read", "bookmarks:write", "calls:read", "calls:write", "canvases:read", "canvases:write", "channels:history", "channels:join", "channels:manage", "channels:read", "channels:write.invites", "channels:write.topic", "chat:write", "chat:write.customize", "chat:write.public", "commands", "conversations.connect:manage", "conversations.connect:read", "conversations.connect:write", "dnd:read", "emoji:read", "files:read", "files:write", "groups:history", "groups:read", "groups:write", "groups:write.invites", "groups:write.topic", "im:read", "im:write", "im:write.invites", "im:write.topic", "incoming-webhook", "links.embed:write", "links:read", "links:write", "metadata.message:read", "mpim:history", "mpim:read", "mpim:write", "mpim:write.invites", "mpim:write.topic", "pins:read", "pins:write", "reactions:read", "reactions:write", "reminders:read", "reminders:write", "remote_files:read", "remote_files:share", "remote_files:write", "team.billing:read", "team.preferences:read", "team:read", "usergroups:read", "usergroups:write", "users.profile:read", "users:read", "users:read.email", "users:write", "workflow.steps:execute"]
settings:
  event_subscriptions:
    request_url: https://webhook.botstudioo.com/slack
    bot_events: ["app_mention", "message.channels", "message.groups", "message.im", "message.mpim"]
```

{{< /details >}}

{{< details "JSON" >}}

```json
{
  "display_information": {
    "name": "Bot Studio",
    "description": "www.botstudioo.com",
    "long_description": "This robot was crafted using Bot Studio's no-code robot maker, available at www.botstudioo.com. The details provided serve as an illustration of Bot Studio's capabilities within Slack, and they can be tailored to suit your specific requirements."
  },
  "features": {
    "app_home": {
      "home_tab_enabled": true,
      "messages_tab_enabled": true
    },
    "bot_user": {
      "display_name": "Bot Studio"
    }
  },
  "oauth_config": {
    "scopes": {
      "bot": ["app_mentions:read", "im:history", "bookmarks:read", "bookmarks:write", "calls:read", "calls:write", "canvases:read", "canvases:write", "channels:history", "channels:join", "channels:manage", "channels:read", "channels:write.invites", "channels:write.topic", "chat:write", "chat:write.customize", "chat:write.public", "commands", "conversations.connect:manage", "conversations.connect:read", "conversations.connect:write", "dnd:read", "emoji:read", "files:read", "files:write", "groups:history", "groups:read", "groups:write", "groups:write.invites", "groups:write.topic", "im:read", "im:write", "im:write.invites", "im:write.topic", "incoming-webhook", "links.embed:write", "links:read", "links:write", "metadata.message:read", "mpim:history", "mpim:read", "mpim:write", "mpim:write.invites", "mpim:write.topic", "pins:read", "pins:write", "reactions:read", "reactions:write", "reminders:read", "reminders:write", "remote_files:read", "remote_files:share", "remote_files:write", "team.billing:read", "team.preferences:read", "team:read", "usergroups:read", "usergroups:write", "users.profile:read", "users:read", "users:read.email", "users:write", "workflow.steps:execute"]
    }
  },
  "settings": {
    "event_subscriptions": {
      "request_url": "https://webhook.botstudioo.com/slack",
      "bot_events": ["app_mention", "message.channels", "message.groups", "message.im", "message.mpim"]
    }
  }
}
```

{{< /details >}}

{{< callout context="caution" >}}
Please note that the manifest file provided here will grant all permissions to your robot. Including all these bot scopes and events in your application may result in excessive resource usage and compromise privacy and security. We've included all of them in this list for beginners to streamline the process, sparing them from adding each one individually. For now, you can retain them, and after creating your robot, you can remove any unnecessary ones later on.
{{< /callout >}}

- Click on the "Next" button after entering the custom manifest.
- Review the summary and make sure everything is okay. Then click on "Create" to create your application.
- After your application has been created, you'll be redirected to your app page. Click on the "Install to Workspace" button and install this app.
- In the "Features" group, click on "App Home".
- Scroll down to the "Show Tabs" section and make sure the "Allow users to send Slash commands and messages from the messages tab" option is checked.
- In the "Features" group, click on "OAuth & Permissions".
- Scroll to see a section named "OAuth Tokens for Your Workspace".
- Copy the "Bot User OAuth Token" and paste it as the "Slack Application Token" in Bot Studio, and create your bot.

After completing these steps, your robot will be created in Bot Studio. Now there are a few other steps to complete:

1. Return to Bot Studio's dashboard and click on your robot from the "Robots" submenu.
2. Copy the value of "webhook address", which looks like this: `https://webhook.botstudioo.com/slack_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`.
3. Go back to your Slack application, and in the "Features" group, click on "Event Subscriptions".
4. Paste the webhook URL address you copied from the bot's dashboard into this.
5. Then, as you can see, the URL has been verified successfully. Click on the "Save Changes" button.

Now you must set a signature for your bot requests. This step is optional, but if you want to secure your robot, you have to do this:

1. In the "Settings" group, click on "Basic Information".
2. Scroll down to the "App Credentials" section.
3. Copy the "Signing Secret" value.
4. Return to Bot Studio's dashboard and click on your robot from the "Robots" submenu.
5. Click on the "Options" button at the top of your robot page and click on the "Change Signature" option.
6. Paste the signature into the input and click on the "Change" button.

We understand that this journey has been lengthy, but your Slack bot is now ready! You can access it through your Slack workspace and customize it using Bot Studio. If you encounter any issues while creating your Slack bot, please don't hesitate to contact our support team.

{{< callout context="note" >}}
We've followed these steps to craft a fully functional Slack chatbot, designed to avoid any future issues. You can customize this configuration within your Slack application at any time you wish.
{{< /callout >}}

## Additional Resources

- [How to create a new Telegram bot](https://core.telegram.org/bots/features#botfather)
- [How to create a new Discord bot](https://discord.com/developers/docs/quick-start/getting-started)
- [How to scan a WhatsApp QR code](https://faq.whatsapp.com/1317564962315842/?cms_platform=web)
- [How to create a new Slack application](https://api.slack.com/start/quickstart)
