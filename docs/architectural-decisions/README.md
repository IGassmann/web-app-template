# Architecture Decision Records

Architectural Decision Records (ADRs) are automatically published to our architectural decision log:

🔗 **[adr.web-app-template.igassmann.me](https://adr.web-app-template.igassmann.me/)**

Please use this link to browse them.

## Managing ADRs

Before you start, you need to install the [Log4brains CLI](https://github.com/thomvaill/log4brains):

```sh
$ pnpm add -g log4brains
```

### Creating a new ADR

To create a new ADR, run the following command:

```sh
$ pnpm adr:new
```

This will create a new ADR file in `docs/architectural-decisions` and open it in your default
editor.

### Listing ADRs

To list all existing ADRs, run the following command:

```sh
$ pnpm adr:list
```

### Previewing the Architectural Decision Log

To preview the architectural decision log locally, run the following command:

```sh
$ pnpm adr:preview
```

In preview mode, the Hot Reload feature is enabled: any change you make to a markdown file is
applied live in the UI.
