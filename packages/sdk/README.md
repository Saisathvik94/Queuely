# queuely

Notification infrastructure for modern apps — send emails, SMS, push and webhooks through one unified SDK.

## Install

```
npm install queuely-sdk
```

## Usage

```
import { QueuelyClient } from "queuely-sdk"

const client = new QueuelyClient({ apiKey: "qly_your_key_here" })

await client.email.send({
  type: "email",
  to: "user@example.com",
  subject: "Welcome!",
  html: "<p>You're all set.</p>"
})
```

## Links

- [Github](https://github.com/Saisathvik94/Queuely)
