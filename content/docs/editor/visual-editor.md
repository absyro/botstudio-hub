---
title: "Visual Editor"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 210
toc: false
seo:
  title: "Bot Studio Docs - Visual Editor"
  description: "In this documentation, you'll learn how you can use Bot Studio's visual editor to create robots using the JSON language. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
images:
  - "visual-editor.png"
---

Bot Studio's visual editor allows you to create bots using JSON language. Bot Studio heavily uses JSON to operate its system. The visual editor lets you write custom node data, custom nodes, and customize anything within your functional data.

{{< figure src="images/visual-editor.png" alt="This is Bot Studio's visual editor, which works using the JSON language." caption="This is Bot Studio's visual editor, which works using the JSON language." >}}

## Data Verification

The visual editor comes with a data verifier system that checks if your system is functional. You can use this system to debug your system when you are coding, making coding easier and more enjoyable.

## How It Works?

Here is an example of functional data written in JSON:

```json { lineNos = true }
{
  "nodes": [
    {
      "id": 1,
      "data": {},
      "inputs": {},
      "outputs": {
        "action": {
          "connections": [
            {
              "node": 17,
              "input": "action"
            }
          ]
        }
      },
      "position": [0, -198],
      "name": "Message Event",
      "executed": {
        "amirfarzamnia": 7
      }
    },
    {
      "id": 17,
      "data": {
        "text": "Hello World!",
        "chat_id": "{message_chat_id}",
        "disable_web_page_preview": false,
        "disable_notification": false,
        "protect_content": false,
        "allow_sending_without_reply": false
      },
      "inputs": {
        "action": {
          "connections": [
            {
              "node": 1,
              "output": "action"
            }
          ]
        }
      },
      "outputs": {},
      "position": [280, -391],
      "name": "Send Message",
      "executed": {}
    }
  ],
  "comments": [
    {
      "text": "An example of comment system.",
      "position": [-29.91446506852043, -71.17063540190969],
      "links": [1],
      "type": "inline"
    }
  ]
}
```

A functional system consists of two array objects:

### Nodes (important)

The nodes array contains all nodes inside the editor. This object is important and must be included in your functional system. You can include all nodes inside this object. Here is how you must include a node data:

- id: The ID of the node.
- data: The node data is required for some nodes which use inputs, such as "Match" node and "API Request" node.
- inputs: The input connections of the node.
- outputs: The output connections of the node.
- position: Consists of 2 numbers, X and Y, indicating the position of the node within the editor area. (Default position is 0).
- name: The node name is the component name that this node is using.
- executed (Optional): How many times this node has been executed by executers. Used for analyzing nodes in analysis mode.

After including all parameters, you can successfully create a node. You can use this pattern to create all the nodes within the visual editor.

### Comments

The comments array consists of all comments within the editor. This value is optional and doesn't affect the bot's execution process on the server. It's only used for the drag-and-drop editor to clarify the functional system. Here is how a comment value should look like:

- text: The comment's text.
- position: Comment's position within the editor area.
- links: The nodes that this comment is linked to.
- type: Type of comment. It can be an "inline" comment or a "frame" comment.

---

Using this visual editor, you can manage all the editor's functions. It's recommended to choose the drag-and-drop editor as the default editor for your bot, create a functional system, and make small changes on the visual editor. Remember that Bot Studio's default editor is the drag-and-drop editor and we recommend using that instead.

{{< callout context="note" >}}
You can create your own editor outside of Bot Studio and create a functional system. Bot Studio is flexible and allows you to do anything without limitations.
{{< /callout >}}
