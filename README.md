# ngx-theme
[![Build Status](https://travis-ci.org/phillipcurl/ngx-theme.svg?branch=master)](https://travis-ci.org/phillipcurl/ngx-theme)
[![npm version](https://badge.fury.io/js/ngx-theme.svg)](http://badge.fury.io/js/ngx-theme)
[![devDependency Status](https://david-dm.org/phillipcurl/ngx-theme/dev-status.svg)](https://david-dm.org/phillipcurl/ngx-theme?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/phillipcurl/ngx-theme.svg)](https://github.com/phillipcurl/ngx-theme/issues)
[![GitHub stars](https://img.shields.io/github/stars/phillipcurl/ngx-theme.svg)](https://github.com/phillipcurl/ngx-theme/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/phillipcurl/ngx-theme/master/LICENSE)

## Demo
https://phillipcurl.github.io/ngx-theme/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

An Angular module for creating functional, type-safe design systems, build on top of Typestyle

## Installation

Install through npm:
```
npm install --save ngx-theme
```

Then include in your apps module:

```typescript
import { Component, NgModule } from '@angular/core';
import { NgxThemeModule } from 'ngx-theme';

@NgModule({
  imports: [
    NgxThemeModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/phillipcurl/ngx-theme/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/dist/umd/ngx-theme/ngx-theme.js"></script>
<script>
    // everything is exported ngxTheme namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via typedoc and can be viewed here:
https://phillipcurl.github.io/ngx-theme/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
