# zooid-spinner

[![Build Status](https://travis-ci.org/octoblu/zooid-spinner.svg?branch=master)](https://travis-ci.org/octoblu/zooid-spinner)
[![npm version](https://badge.fury.io/js/zooid-spinner.svg)](http://badge.fury.io/js/zooid-spinner)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-spinner.png)](https://codeclimate.com/github/octoblu/zooid-spinner)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

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
