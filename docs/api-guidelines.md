# REST API Guidelines

APIs built by Igor Gassmann must follow this document.

## Naming

All names specified in path and query parameters, resource names, and JSON input and output fields
and pre-defined values must use verbose naming patterns and must not use abbreviations other than
acronyms that are the dominant mode of expression in the domain being represented by the API, (e.g.
URL). Acronyms and initialisms should always be all capitalized or all lowercased. Names should be
in correct American English. For example, license (instead of licence), color (instead of colour).

## Endpoints

Collections within endpoints must be named as plural nouns. Path segments must use kebab-case.

Good:

- `GET /channels/5e428e399198d696051f8801`
- `POST /channels/5e428e399198d696051f8801/payout-methods`

Bad:

- `GET /channel/5e428e399198d696051f8801`
- `POST /channel/5e428e399198d696051f8801/payoutMethod`

### Resource Nesting

Nesting of resources should be avoided.
[This article](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/)
goes in depth on their problems.

If a resource relation can only exist within another resource, sub-resources should be employed.

Example:

- `GET /users/me/payment-methods`
- `GET /users/me/payment-methods/5e428e399198d696051f8801`

## Filtering, Sorting, Searching, and Pagination

Query parameters must use camelCase.

Filtering, sorting, searching, and pagination can be used together to achieve complex requests:

Example:

- `GET /channels?search=game&published=true&sortBy=-followerCount,createdAt`

### Filtering

Use a unique query parameter for each field that implements filtering.
[LHS brackets](https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/#lhs-brackets)
should be used to indicate operators.

Example:

- `GET /channels?category=Technology&followerCount[gte]=10000`

### Sorting

A generic parameter sort should be used to describe sorting rules. Accommodate complex sorting
requirements by letting the sort parameter take in a list of comma-separated fields, each with a
possible unary negative to imply descending sort order. The following retrieves a list of channels
in descending order of `followerCount`. Within a specific `followerCount`, older channels are
ordered first.

Example:

- `GET /channels?sortBy=-followerCount,createdAt`

### Searching

When full-text search is used as a mechanism of retrieving resource instances for a specific type of
resource, it should be exposed as a query parameter on the resource's endpoint.

Example:

- `GET /channels?search=rerez`

### Pagination

Pagination can be used to split the results of a query into pages. The API should use
[cursor-based pagination](https://developers.facebook.com/docs/graph-api/using-graph-api/#paging).
Pagination details should be included using the
[Link header introduced by RFC 5988](https://tools.ietf.org/html/rfc5988#page-6). The Link header
can return a set of ready-made links, so the API consumer doesn't have to construct links
themselves.

Example:

- `GET /channels?limit=25&sortBy=-followerCount`

Returned Link header:

- `</channels?limit=25&after=5e53e3d952175997bfd38374>; rel="next", </channels?limit=25&before=5e53e4ec6ddbbc6ef0067b8a>; rel="previous"`

## Embedding Related Resources

There are many cases where an API consumer needs to load data related to (or referenced) from the
resource being requested. Rather than requiring the consumer to hit the API repeatedly for this
information, there would be a significant efficiency gain from allowing related data to be returned
and loaded alongside the original resource on demand.

This should be done with the `embed` query parameter. However, if the relationship is commonly
requested alongside the resource, the API may offer to automatically embed the relation's
representation.

Example:

- `GET /channels/5e428e399198d696051f8801?embed=ownerId.username`

## HTTP Methods

Operations MUST use the proper HTTP methods whenever possible, and operation idempotency must be
respected. HTTP methods are frequently referred to as the HTTP verbs. The terms are synonymous in
this context, however, the HTTP specification uses the term method.

Below is a list of methods that REST services may support. Not all resources will support all
methods, but all resources using the methods below must conform to their usage.

| Method | Description                                                         | Is Idempotent |
| ------ | ------------------------------------------------------------------- | ------------- |
| GET    | Return the current value of an object.                              | True          |
| PUT    | Replace an object, or create a named object, when applicable.       | True          |
| DELETE | Delete an object.                                                   | True          |
| POST   | Create a new object based on the data provided or submit a command. | False         |
| PATCH  | Apply a partial update to an object.                                | False         |

### GET

`GET` methods should be safe — they should not have side effects — and idempotent (they should
return the same result until the underlying resource changes).

### POST

`POST` methods need not be safe or idempotent but should avoid query parameters. Methods that are
safe should use `GET` instead. `POST` methods should support the `Location` response header to
specify the location of any created resource that was not explicitly named, via the `Location`
header.

### PUT

`PUT` methods should be idempotent (calling the `PUT` method multiple times with the same parameters
should be indistinguishable from calling it once) and should fully replace the resource and all
sub-resources. `PUT` should also avoid query parameters.

### PATCH

`PATCH` has been standardized by IETF as the method to be used for updating an existing object
incrementally (see [RFC 5789](https://tools.ietf.org/html/rfc5789)). `PATCH` methods should only
support partial objects to only update parts of a resource. This is
[JSON Merge Patch](https://tools.ietf.org/html/rfc7396), a specialized media type
`application/merge-patch+json` that is a partial resource representation.

### DELETE

`DELETE` requests are used to delete resources. The semantic is best described as "please delete the
resource identified by the URL".

`DELETE` requests are usually applied to single resources, not on collection resources, as this
would imply deleting the entire collection.

Successful `DELETE` requests will usually generate 200 (if the deleted resource is returned) or 204
(if no content is returned).

Failed `DELETE` requests will usually generate 404 (if the resource cannot be found) or 410 (if the
resource was already deleted before).

## Actions

Actions should be avoided. REST is all about your resources, so consider the domain entities that
take part in web service interaction, and aim to model your API around these using the standard HTTP
methods as operation indicators. An action can be restructured to appear like a resource. For
example, an "activate" action could be mapped to an "activation" resource and updated via a `POST`
to the collection `/activations`.

Sometimes you have no way to map the action to a sensible RESTful structure. For example, a
multi-resource search doesn't make sense to be applied to a specific resource's endpoint. In this
case, `/search` would make the most sense even though it isn't a resource.

## JSON Structure

### Avoid Anonymous Arrays

For JSON requests and responses, APIs should not use top-level, anonymous arrays. Wrapping the
arrays in a JSON object makes it possible to add additional fields later.

Good:

```json
{
  "cursors": {
    "previous": "...",
    "next": "..."
  },
  "data": ["item 1", "item 2"]
}
```

Bad:

```json
["item 1", "item 2"]
```

### Pretty-Print Responses

Results should be pretty-printed by default. The data overhead, with gzip enabled,
[is negligible](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#pretty-print-gzip).

## Dates

Dates returned in responses should be formatted using ISO 8601 like `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`,
for example `2015-08-24T18:42:25.324Z`. All dates/times returned in responses should be in the UTC
time zone (that is why the 'Z' is required literally).

Date taken as input should be formatted the same, with the seconds and time fields optional (for
example `2015-08-24` or `2015-08-24T18:42`). Dates/times taken as input should be flexible in the
time zones they accept (any valid time zone should be accepted), for example
`2015-08-24T18:42:25.324-0400`.

## Errors

### Error Status Codes

5xx errors should be only for server errors and uptime failures — there should be no repeatable way
for users to generate 5xx error codes. 4xx errors should be used when the failure is a result of
incorrect or unsupported user input. Standard HTTP status codes should be used; see the
[HTTP Status Code definitions](https://httpstatuses.com/) for more information.

### Error JSON Objects

[RFC 7807](https://tools.ietf.org/html/rfc7807) defines a Problem JSON object and the media type
`application/problem+json`. Operations should return it (together with a suitable status code) when
any problem occurred during processing, and you can give more details than the status code itself
can supply, whether it be caused by the client or the server (i.e. both for 4xx or 5xx error codes).

Example:

```json
{
  "title": "Service Unavailable",
  "detail": "Connection to database timed out",
  "type": "/error/connection-error",
  "instance": "/error/connection-error#token-info-read-timed-out",
  "status": "503"
}
```

## API Definition

The [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) is the standard to define
API definition documents. The API should provide an OpenAPI definition document. The document should
be subject to version control and placed inside the `docs/` directory of the corresponding package.

## Rate Limiting

To prevent abuse, it is standard practice to add some sort of rate limiting to an API.
[RFC 6585](http://tools.ietf.org/html/rfc6585#section-4) introduced an HTTP status code
[429 Too Many Requests](https://tools.ietf.org/html/rfc6585) to accommodate this.

We should include the following headers:

- `X-Rate-Limit-Limit`: the number of allowed requests in the current period
- `X-Rate-Limit-Remaining`: the number of remaining requests in the current period
- `X-Rate-Limit-Reset`: the number of seconds left in the current period

## Security

### OpenID Connect

The API needs to be secured using OpenID Connect. OIDC is an identity layer on top of the OAuth 2.0
protocol. Please refer to the official OpenAPI specification on how to specify security definitions
in your OpenAPI document.

## Reference

Those guidelines were greatly inspired by the following documents:

- https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
- https://opensource.zalando.com/restful-api-guidelines/
- http://watson-developer-cloud.github.io/api-guidelines/
- https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md
- https://www.moesif.com/blog/technical/api-design/REST-API-Design-Best-Practices-for-Sub-and-Nested-Resources/
- https://www.moesif.com/blog/technical/api-design/REST-API-Design-Filtering-Sorting-and-Pagination/#pagination
- https://restfulapi.net/
- https://cloud.google.com/apis/design
- https://phauer.com/2015/restful-api-design-best-practices/
