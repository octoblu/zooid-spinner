# zooid-spinner

[![Build Status](https://travis-ci.org/octoblu/zooid-spinner.svg?branch=master)](https://travis-ci.org/octoblu/zooid-spinner)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-spinner/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-spinner)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-spinner.svg?style=flat)](https://david-dm.org/octoblu/zooid-spinner)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-spinner.svg?style=flat)](https://david-dm.org/octoblu/zooid-spinner#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-spinner.svg?style=flat)](https://npmjs.org/package/zooid-spinner)

## Install
```
npm install --save zooid-spinner
```

## Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| className | string |         | Additional css classes to merge into the component |
| size | enum | "regular"         | Size. Options: **small**, **regular**, **large**  |


## Example
```js
import Spinner from 'zooid-spinner'
<Spinner />
<Spinner size="large"/>

```
