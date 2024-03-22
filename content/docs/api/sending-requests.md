---
title: "Sending Requests"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 300
toc: false
seo:
  title: "Bot Studio Docs - Sending Requests"
  description: "In this documentation, you'll learn how to send API requests to Bot Studio's endpoints. Click here to learn more."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

This guide will instruct you on how to dispatch API requests to Bot Studio's endpoints, as well as manage your account and chatbots.

##### Step 1: Retrieve your session key

- Open the developer tools in your browser. You can do this by pressing "Ctrl + Shift + I" or by right-clicking on a blank space and choosing "Inspect".
- At the top of the inspector window, select "Application".
- On the left side, navigate to the storage sections, and within this section, locate "Cookies" with a cookie icon.
- Click on it and select https://botstudioo.com. You will find a list of cookies there.
- Look for a cookie named "session" and copy its value. This is the session key we require.

##### Step 2: Integrate with Bot Studio

You can now integrate with Bot Studio using this session key. However, it is crucial to exercise caution and ensure that this session key does not fall into the wrong hands, as it contains the necessary information to log into your account.

{{< tabs "sending-request" >}}
{{< tab "Node.js" >}}

```javascript { lineNos = true }
const method = "POST";
const url = "https://www.botstudioo.com/api/renamebot";
const session = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

sendRequest();

async function sendRequest() {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Cookie": "session=" + session
      },
      body: JSON.stringify({
        name: "Raven",
        nname: "Firefly",
        platform: "telegram"
      })
    });

    console.log(await response.json());
  } catch (error) {
    console.error(error);
  }
}
```

{{< /tab >}}
{{< tab "Python" >}}

```python { lineNos = true }
import requests

method = 'POST'
url = 'https://www.botstudioo.com/api/renamebot'
session = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

response = requests.post(url, json={
  'name': 'Raven',
  'nname': 'Firefly',
  'platform': 'telegram'
}, headers={
  'Content-Type': 'application/json',
  'Cookie': 'session=' + session
})

try {
  response.raise_for_status()

  json_data = response.json()

  print(json_data)
} catch(requests.exceptions.HTTPError as e) {
  print(f'HTTP error occurred: {e}')
} catch(Exception as e) {
  print(f'An error occurred: {e}')
}
```

{{< /tab >}}
{{< /tabs >}}

##### Note on privacy and trust

Bot Studio prioritizes user privacy and trust. We do not encode network actions. Users can manually identify the required endpoint and utilize it with session cookies. However, it's important to note that using session cookies is not recommended for any applications, including Bot Studio. This documentation is provided solely for those who genuinely require it. Please use this information responsibly.
