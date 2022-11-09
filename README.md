# Kuber Starter Kit

This repo provides a NodeJS package with examples of how to balance transactions using [Kuber](https://github.com/dQuadrant/kuber). 

## Dev Environment

We use [Demeter.run](https://demeter.run) platform to create a cloud environment with access to common Cardano infrastrcuture. The following command will open this repo in a private, web-based VSCode IDE with access to a shared Cardano Node and Kuber.

[![Run in Cardano Workspace](https://demeter.run/code/badge.svg)](https://demeter.run/code/?repository=https://github.com/txpipe/kuber-starter-kit.git&template=typescript)

## Getting started

Once you've finished with the Cardano Workspace creation process, you should be able to access this codebase from a VSCode IDE instance. Open this README file using the Markdown Preview command to continue this guide from inside the workspace.

Since this is a Node.js package, the next step is to install the dependencies. This can be done by opening the embedded terminal within the VSCode IDE.

> **Note**
> There's no need to install NodeJS or NPM, these tools are already available as part of your workspace.

From within the terminal, run the following npm command to install the dependencies:

```sh
npm install
```

When npm finishes, you should be able to execute the examples.

## Run the example

This example shows how to connect to submit a JSON payload to the Kuber backend and get back a balanced transaction that can be submited on-chain.

The code for this example lives in `src/index.ts`. To execute the example, you can run the script called `start` defined in the `package.json` file. Open the embedded VSCode terminal and execute the following command:

```sh
npm start
```
