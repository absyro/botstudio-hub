---
title: "Default Nodes"
description: ""
summary: ""
date: 2023-09-07T16:04:48+02:00
lastmod: 2023-09-07T16:04:48+02:00
draft: false
weight: 110
toc: false
seo:
  title: "Bot Studio Docs - Default Nodes"
  description: "In Bot Studio, certain nodes may be universally applicable across all platforms. Click here to see how they work."
  canonical: "https://www.botstudioo.com"
  noindex: false
---

In Bot Studio, certain nodes may be universally applicable across all platforms.

---

### Match

The match node is utilized to verify if the provided inputs correspond with each other based on certain rules. There are five rules available for use with match nodes:

- Match: Verifies if the provided inputs are an exact match.
- Start: Determines if the provided input begins with the match input.
- End: Determines if the provided input concludes with the match input.
- Includes: checking if the provided input contains the match input.
- RegExp: Verifies if the provided inputs correspond in the case of regular expressions.

---

### Delay

The delay node is employed to introduce a pause in the process. It prevents any other nodes from executing until the specified delay duration has elapsed. This can be particularly useful for managing the flow of operations in your chatbot system.

The value for the delay node should be specified in milliseconds. For instance, a delay of 2 seconds is equivalent to 2000 milliseconds.

{{< callout context="note" >}}
By default, if the delay value is less than 0, it will be automatically set to 0. Similarly, if the delay value exceeds 10000, it will be capped at 10000. This ensures that the delay duration remains within a reasonable range.
{{< /callout >}}

---

### Random

The random node is utilized to randomly choose one from the available outputs. This can be particularly useful when you want to introduce an element of unpredictability or variety in your chatbot’s responses or actions. It ensures that your chatbot doesn’t always follow a linear path but can diverge based on random selection.

---

### Set Global Variable

The set global variable node allows you to establish new global variables or modify the values of existing ones. It’s important to note that it will always overwrite the current values. This feature can be particularly useful for maintaining and updating global information throughout the chatbot’s operation.

---

### JSON Extractor

The JSON Extractor node is designed to extract values from JSON data and convert them into global variable string types. This feature enables you to utilize your existing JSON data without the necessity of coding. For instance, if you have a JSON object like this:

```JSON
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

You can use the JSON Extractor node to extract the value of “name” (which is “John”) and set it as a global variable. This way, you can use this value in other parts of your chatbot system without having to write any additional code. This makes managing and manipulating data in your chatbot much more efficient and user-friendly. Please note that this is just an example, and the actual usage would depend on your specific needs and the structure of your JSON data.

---

### API Request

Indeed, the API Request node allows you to send API requests to a specified address and receive the response as a JSON object. If the response is successful (or in programming terms, if it returns an ‘OK’ status), then the standard action output is executed. Conversely, if there’s an error, the error output is triggered. Regardless of the outcome—success or failure—you can utilize the received JSON object.

You can incorporate all API parameters, including headers, body, cookies, and so on, in JSON format using this node.

---

### Python

Python, with its simplicity and versatility, is a programming language that can be utilized across various applications. This is why Bot Studio incorporates Python programming nodes. With these nodes, you can write Python code to gain extensive control over your chatbot. There are three pre-defined functions available for use in your Python code:

- `set_global_variable`: This function allows you to establish new global variables.

- `get_global_variables`: This function retrieves a list of all available global variables in JSON format.

- `get_inputs`: This function returns a list of all the JSON inputs connected to the node, in the form of an array of objects.

You also have the option to return a result value at the end of your code. This result value can contain data indicating whether the next node should be executed or what the JSON output of the current node will be.

All features of Python code are explained in a template that comes with each Python node. Whenever you create a Python node, you can refer to these default templates for further understanding. This makes it easier for you to learn and apply Python within the Bot Studio environment.

{{< callout context="caution" >}}
Python nodes are presently in an experimental phase and are subject to potential changes in the future.
{{< /callout >}}
