# E2E Google Maps

## About

This repo contains the end2end tests for Google Maps.

Uses Javascript stack, namely WebdriverIO, a test framework for Node.js that runs on the WebDriver Protocol for cross browser testing.
For now supports execution in Chrome and Firefox browsers.

## Install

Before proceeding make sure you have NodeJS.

- [NodeJS](https://nodejs.org/en/) - Javascript Runtime

Clone the repository:

```bash
$ git clone git@github.com:pedrommvv/e2e-google-maps.git
```

Then `cd e2e-google-maps` and:

```bash
$ npm install
```

Rename one of the `.env.*` to `.env` file in the root of the project, depending on the language you have in Google Maps. Currently only exists for PT-PT and EN-UK , but you can create new ones.

For usage of geckodriver (Firefox) in Mac Catalina 10.15, [bypass the notarization](https://firefox-source-docs.mozilla.org/testing/geckodriver/Notarization.html) requirement on macOS.
Below commands should fix it.

```bash
cd node_modules/geckodriver/
```

```bash
% xattr -r -d com.apple.quarantine geckodriver
```

## Test Execution

#### Run in Chrome

```bash
$ npx wdio wdio-chrome.conf.js
```

#### Run in Firefox

```bash
$ npx wdio wdio-firefox.conf.js
```

## Issues and Notes

Tested in:

- MacOS Catalina 10.15
- Node.js v12.18.0
- WebDriverIO v6
- Chrome Browser Version 86.0.4240.183 (Official Build) (x86_64)
- Firefox Browser Version 82.0.2 (64-bit)

Windows

- Couldn't start geckodriver in Windows (need more clarification..)
