---
title: "Default Nodes"
description: ""
summary: ""
date: 2024-03-01T16:16:06Z
lastmod: 2024-03-01T16:16:06Z
draft: false
weight: 110
toc: false
seo:
  title: "Bot Studio Docs - Default Nodes"
  description: "In Bot Studio, certain nodes may be universally applicable across all platforms. Click here to see how they work."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, we have certain nodes that can be used across all platforms. Here is a list of all these nodes:

## Match

The match node checks if the provided inputs match each other based on certain rules. There are five rules available:

- **Match**: Checks if the inputs are an exact match.
- **Start**: Checks if the input starts with the match input.
- **End**: Checks if the input ends with the match input.
- **Includes**: Checks if the input contains the match input.
- **RegExp**: Checks if the inputs match in the case of regular expressions.

## Delay

The delay node introduces a pause in the process. It prevents other nodes from executing until the specified delay duration has passed. This can be useful for managing the flow of operations in your bot system. The delay value should be specified in milliseconds. For example, a delay of 2 seconds is equivalent to 2000 milliseconds.

{{< callout context="note" >}}
If the delay value is less than 0, it will be automatically set to 0. Similarly, if the delay value exceeds 10000, it will be capped at 10000. This ensures that the delay duration remains within a reasonable range.
{{< /callout >}}

## Random

The random node randomly selects one from the available outputs. This can be useful when you want to introduce unpredictability or variety in your bot’s responses or actions. It ensures that your bot doesn’t always follow a linear path but can diverge based on random selection.

## Set Global Variable

The set global variable node allows you to create new global variables or modify the values of existing ones. It will always overwrite the current values. This feature can be useful for maintaining and updating global information throughout the bot’s operation.

## JSON Extractor

The JSON Extractor node extracts values from JSON data and converts them into global variable string types. This allows you to use your existing JSON data without the need for coding. For example, if you have a JSON object like this:

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

You can use the JSON Extractor node to extract the value of “name” (which is “John”) and set it as a global variable. This way, you can use this value in other parts of your bot system without having to write any additional code. This makes managing and manipulating data in your bot more efficient and user-friendly.

## API Request

The API Request node allows you to send API requests to a specified address and receive the response as a JSON object. If the response is successful (or in programming terms, if it returns an ‘OK’ status), then the standard action output is executed. Conversely, if there’s an error, the error output is triggered. You can use the received JSON object regardless of the outcome—success or failure.

You can include all API parameters, including headers, body, cookies, etc., in JSON format using this node.

## Python

Python, with its simplicity and versatility, is a programming language that can be used across various applications. That's why Bot Studio includes Python programming nodes. With these nodes, you can write Python code to gain extensive control over your bot. There are 2 pre-defined functions available for use in your Python code:

- `get_global_variables`: This function retrieves a list of all available global variables in JSON format.
- `get_inputs`: This function returns an array containing all connected JSON input output values. It returns an array because Python nodes can have multiple connected JSON inputs.

{{< callout context="note" >}}
Python nodes have a memory limit of 20 MB. If the code process exceeds this limit, it will terminate without producing any results. Additionally, if there are syntax errors, bugs, or resource limitations in the code, the result will be the default outcome, with no outputs or global variables generated for the next node.
{{< /callout >}}
