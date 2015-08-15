var test = require('tape')
var LocalForageMock = require('./mock-localforage')
var MultiForage = require('./')

test('Should set multiple values', function (t) {
  t.plan(3)

  var localForage = new LocalForageMock()
  var multiForage = MultiForage(localForage)

  var data = {
    foo: 1,
    bar: 2
  }

  multiForage.setItems(data, function (err) {
    t.ifError(err)
    t.equal(localForage.data.foo, data.foo)
    t.equal(localForage.data.bar, data.bar)
    t.end()
  })
})

test('Should get multiple values', function (t) {
  t.plan(6)

  var localForage = new LocalForageMock()
  var multiForage = MultiForage(localForage)

  var data = {
    foo: 1,
    bar: 2
  }

  multiForage.setItems(data, function (err) {
    t.ifError(err)
    t.equal(localForage.data.foo, data.foo)
    t.equal(localForage.data.bar, data.bar)

    multiForage.getItems(['foo', 'bar'], function (err, items) {
      t.ifError(err)
      t.equal(items.foo, data.foo)
      t.equal(items.bar, data.bar)
      t.end()
    })
  })
})

test('Should remove multiple values', function (t) {
  t.plan(6)

  var localForage = new LocalForageMock()
  var multiForage = MultiForage(localForage)

  var data = {
    foo: 1,
    bar: 2
  }

  multiForage.setItems(data, function (err) {
    t.ifError(err)
    t.equal(localForage.data.foo, data.foo)
    t.equal(localForage.data.bar, data.bar)

    multiForage.removeItems(['foo', 'bar'], function (err) {
      t.ifError(err)
      t.notOk(localForage.data.foo)
      t.notOk(localForage.data.bar)
      t.end()
    })
  })
})
