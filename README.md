## `dojo-toolchain` Action

This GitHub Action installs [Dojo](https://github.com/dojoengine/dojo), the toolchain for building onchain games and autnomous worlds.

### Example workflow

```yml
on: [push]

name: test

jobs:
  check:
    name: Dojo project
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install Dojo
        uses: dojo-rs/dojo-toolchain@v1

      - name: Run tests
        run: sozo test
```

### Inputs

| **Name**  | **Required** | **Default** | **Description**                                                                                              | **Type** |
| --------- | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------ | -------- |
| `version` | No           | `nightly`   | Version to install, e.g. `nightly` or `1.0.0`. **Note:** Dojo only has nightly builds for the time being. | string   |

### Building

When opening a PR, you must build the action exactly following the below steps for CI to pass:

```console
$ npm ci
$ npm run build
```

You **have** to use Node.js 16.x.
