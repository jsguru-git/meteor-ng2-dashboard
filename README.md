# Dashboard

- Angular 2 as front end
- Meteor as backend

## NPM Scripts

This boilerplate comes with predefined NPM scripts, defined in `package.json`:

- `$ npm run start` - Run the Meteor application.
- `$ npm run test` - Executes Meteor in test mode with Mocha.
- `$ npm run test:ci` - Executes Meteor in test mode with Mocha for CI (run once).

## Contents

This project contains the basics that requires to quick start with Angular2-Meteor application.

This package contains:

- TypeScript support and Angular 2 compilers for Meteor
- Angular2-Meteor
- Angular2 (core, common, compiler, platform)
- SASS support
- Testing framework with Mocha and Chai

The Main component loads the child component, which uses the demo service that gets it's data from the demo collection.

## Folder Structure

#### Client

The `client` folder contains single TypeScript (`.ts`) file which is the main file (`/client/app.component.ts`), and bootstrap's the Angular 2 application.

The main component uses HTML template and SASS file.

The `index.html` file is the main HTML which loads the application by using the main component selector (`<app>`).

All the other client files are under `client/imports` and organized by the context of the components (in our example, the context is `demo`).

#### Server

The `server` folder contain single TypeScript (`.ts`) file which is the main file (`/server/main.ts`), and creates the main server instance, and the starts it.

All other server files should be located under `/server/imports`.

## References

[SB Admin BS 4 Angular2](http://startangular.com/product/sb-admin-bootstrap-4-angular-2/)

[Meteor Angular 2 Socially](https://github.com/Urigo/meteor-angular2.0-socially)
