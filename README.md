# Homey

Command-line interface and type declarations for Homey Apps.

## Installation

```bash
$ npm i -g homey
```

## Getting started

To get started run:
```bash
$ homey --help
```

Or read the [getting started](https://apps.developer.athom.com/tutorial-Getting%20Started.html) documentation.

## What is Compose?

The `compose` copies & merges files, which is useful for very large Homey Apps.

For documentation, refer to [Homey Compose](https://apps.developer.athom.com/tutorial-Homey%20Compose.html).

Don't forget to add the `HOMEY_LOG_URL` variable to your `env.json`.

## Homey Apps SDK Documentation
Please visit https://developer.athom.com for more information.

## Useful links

### Z-Wave
The `zwave` installs [homey-zwavedriver](https://www.npmjs.com/package/homey-zwavedriver).

### Zigbee
The `zigbee` installs [homey-zigbeedriver](https://www.npmjs.com/package/homey-zigbeedriver).

### RF
The `rf` installs [homey-rfdriver](https://www.npmjs.com/package/homey-rfdriver), and copies pairing templates to `/.homeycompose/`.

### OAuth2
The `oauth2` installs [homey-oauth2app](https://github.com/athombv/node-homey-oauth2app).

### Log
The `log` installs [homey-log](https://www.npmjs.com/package/homey-log). You must still require the module in the app yourself:

```
const { Log } = require('homey-log');
```