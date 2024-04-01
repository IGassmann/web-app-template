# Data Tracking Plan

A tracking plan is a centralized document that everyone refers to when setting up and implementing
tracking analytics. It outlines what events we care about, and why.

Everything to do with our analytics tracking is defined here.

## Identifying Users

We identify users by making [identify calls](https://segment.com/docs/connections/spec/identify/).
These lets us tie an **authenticated user** or **anonymous** **visitor** to their events and record
traits about them. It includes a unique user id and any optional traits, like email, name, etc.

Every identify call must have a
[user id](https://segment.com/docs/connections/spec/identify#user-id) or an
[anonymous id](https://segment.com/docs/connections/spec/identify#anonymous-id), depending on how
much you know about the user in question.

Identify calls should be made:

- After a user first signs up before the "User Signed Up" track call
- When a user updates their info (for example, they change their username)
- Upon loading any pages that are accessible by a signed-in user

### Traits

[Traits](https://segment.com/docs/connections/spec/identify/#traits) are pieces of information you
know about a user that are included in an identify call.

| Trait     | Type   | Description                                                               |
| --------- | ------ | ------------------------------------------------------------------------- |
| username  | String | Username of the user                                                      |
| email     | String | Email address of the user                                                 |
| avatar    | String | URL to an avatar image for the user                                       |
| createdAt | Date   | Date the user’s account was first created. It is an ISO-8601 date string. |

**Example**

```json
{
  "type": "identify",
  "traits": {
    "username": "kevinluano",
    "email": "kevinluano@gmail.com",
    "avatar": "https://url-to-profile-picture.com/profile-picture.jpg",
    "createdAt": "2015-02-23T22:28:55.111Z"
  },
  "userId": "user_lBPm9r0ZM9WuoTEOaaadd6gZLdp"
}
```

### Signing Out Users

When a user signs out, we have to make sure to call
[`analytics.reset()`](https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#reset-or-logout)
to clear the session for the currently identified user.

## Tracking Events

Events are how we record any actions our users or anonymous visitors perform, along with any
[properties](https://segment.com/docs/connections/spec/track/#properties) that describe the action.

Events should be carefully chosen and maintained. Each event should help us answer a question about
our business and should be easily understood by all team members. It's important to keep track of
the events being captured and ensure that they are relevant to the business goals.

Regularly reviewing and pruning events can help keep the data clean and manageable. Overall,
well-designed analytics events can provide valuable insights into user behavior and help inform
important business decisions.

### Naming Convention

> ⚠️ Defining and enforcing a
> [naming convention](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/)
> is critical to consistent accurate analytics.

We follow Segment's recommended
[object-action framework](https://segment.com/academy/collecting-data/naming-conventions-for-clean-data/)
naming convention.

This naming convention is simple, easy to implement, extensible, and most importantly, Segment will
automatically convert events created with the object-action framework to the event names that the
destinations expect. For instance, it will convert `Order Created` to the `Purchased` event that the
Facebook pixel expects.

![object-action-framework](https://user-images.githubusercontent.com/4291707/212914999-ac6245c2-dcaa-458f-9fd3-ec80fd0d5464.png)

1. Use the object-action framework for track calls.
2. Use Proper Case for the event names of track calls.
3. Use camelCase for properties.

For example, here's a full track call for a `Product Purchased` event:

```typescript
analytics.track('Friend Request Sent', {
  // event names are Object + Action with Proper Case
  revenue: '18.99',
  currency: 'USD',
  chargeId: '"ch_3MRBkY2eZvKYlo2C1H0Ktg7P"', // property keys are camelCased
});
```

### Server-Side Calls

Contrary to client-side track calls, we should instantiate a new instance of the
[Node.js analytics library](https://github.com/segmentio/analytics-next/tree/master/packages/node)
on every request and await each call. This is needed because our server requests runs on
[serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions), which by
design, are short-lived. Meaning that they are expected to terminate after being executed.

Additionally, we should make sure to pass a `userId` to each track calls for events that were
originated from a user because the library won't be able to obtain it from an identify call that
happened in a different request.

**Example**

```typescript
export default async function handler() {
  // ...
  const analytics = await serverAnalytics();

  await analytics.track({
    userId: userId,
    event: 'User Signed Up',
  });
  // ...
}
```

### Events

We are currently tracking the following events:

- [User Signed Up](#user-signed-up)
- [User Onboarded](#user-onboarded)
- [Product Purchased](#product-purchased)

#### User Signed Up

A user has completed the sign-up form.

##### Why

It is the core acquisition event.

##### Properties

| Property   | Type   | Description                                                |
| ---------- | ------ | ---------------------------------------------------------- |
| type       | String | The type of signup, e.g., referral, organic, paid.         |
| referrerId | String | The id of the user that referred the newly signed up user. |

##### Location

Server-side when the event `clerk/user.created` is received.

##### Example

```json
{
  "type": "track",
  "event": "User Signed Up",
  "properties": {
    "type": "referral",
    "referrerId": "user_lBPm9r0ZM9WuoTEOaaadd6gZLdp"
  }
}
```

#### User Onboarded

A user has completed the product onboarding.

##### Why

It helps track the user journey towards activation.

##### Properties

This event has currently no properties.

##### Location

Client-side when the user completes the onboarding.

##### Example

```json
{
  "type": "track",
  "event": "User Onboarded"
}
```

### Product Purchased

A user has purchased a product.

##### Why

It is the core monetization event. It helps track revenue.

##### Properties

| Property        | Type   | Description                                                                                  |
| --------------- | ------ | -------------------------------------------------------------------------------------------- |
| revenue         | Number | Revenue ($) associated with the transaction (excluding tax). This should be a decimal value. |
| currency        | String | Currency of the revenue. This should be in the ISO 4127 format.                              |
| paymentIntentId | String | The Stripe payment intent associated with the transaction.                                   |

##### Location

Server-side when the Stripe event is received.

##### Example

```json
{
  "type": "track",
  "event": "Product Purchased",
  "properties": {
    "revenue": "18.99",
    "currency": "USD",
    "paymentIntentId": "pi_3MRBkY2eZvKYlo2C1H0Ktg7P"
  }
}
```

## Links

- [Segment Workspace](https://app.segment.com/web-app-template/overview)
- [Product Analytics Dashboard](https://analytics.june.so/)
- [Learn Analytics - Quick Start](https://school.june.so/)
- [Learn Analytics - In Depth](https://segment.com/academy)
