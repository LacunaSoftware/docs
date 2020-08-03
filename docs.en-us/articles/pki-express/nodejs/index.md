# Using PKI Express on Node.js

This article describes how to use [PKI Express](../index.md) on Node.js

## Sample project

The sample project shows the usage of PKI Express together with the [Web PKI](../../web-pki/index.md) browser component
on a **NodeJS** project. It is hosted on GitHub:

https://github.com/LacunaSoftware/PkiSuiteSamples/tree/master/nodejs/expressmvc

### Running the project

1. [Install PKI Express](../setup/index.md)
1. [Download the project](https://github.com/LacunaSoftware/PkiSuiteSamples/archive/master.zip) or clone the [repository](https://github.com/LacunaSoftware/PkiSuiteSamples.git)
1. In a command prompt, navigate to the folder `NodeJS/expressMVC` and run the command `npm install` to download the dependencies
1. Run the web application: `npm start`
1. Access the URL: [http://localhost:3000](http://localhost:3000)

> If you use [Yarn](https://yarnpkg.com), you can use `yarn install` or `yarn` to **download the dependencies** and
> `yarn start` to **run the application**.

### NPM package

In order to use PKI Express on Node.js, you must includ the NPM package [pki-express](https://www.npmjs.com/package/pki-express)

To add it to your project, add the line below to your `package.json` file:

[!include[package.json](../../../../includes/pki-express/nodejs/package.md)]

After that, do a `npm install` to download the package and its dependencies.

The package is open-source, hosted on [GitHub](https://github.com/LacunaSoftware/PkiExpressNode). Feel free to fork it if you need to make any customizations, and even submit an *pull request*.