# multiForage [![Build Status](https://travis-ci.org/alanshaw/multiforage.svg?branch=master)](https://travis-ci.org/alanshaw/multiforage) [![Dependency Status](https://david-dm.org/alanshaw/multiforage.svg)](https://david-dm.org/alanshaw/multiforage)
Utility for localForage to set, get and remove multiple items.

## Usage

```js
var localForage = require('localforage')
var multiForage = require('multiforage')(localForage)

var items = {
  foo: 'A FOO',
  bar: 'SOME BAR'
}

multiForage.setItems(items, function (err) {
  // You can now get each item individually
  localForage.getItem('foo', function (err, item) {
    console.log(item) // "A FOO"
  })

  // ...or get multiple items
  multiForage.getItems(['foo', 'bar'], function (err, items) {
    console.log(items) // {foo: 'A FOO', bar: 'SOME BAR'}
  })

  // ...and then remove multiple items
  multiForage.removeItems(['foo', 'bar'], function (err) {
    // gone
  })
})
```

## API

### `multiForage.setItems(object, callback)`

Set multiple items in localForage. Items are stored in storage using `object` keys as the key and value as the value.

### `multiForage.getItems(array, callback)`

Get multiple items from localForage. Items are returned in an object whose keys are the values of the passed `array` and whose values are the items in storage.

### `multiForage.removeItems(array, callback)`

Remove multiple items from localForage. The `array` values are used as the keys of items to remove.
