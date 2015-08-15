var each = require('async-each')

function MultiForage (localforage) {
  if (!(this instanceof MultiForage)) {
    return new MultiForage(localforage)
  }
  this._localforage = localforage
}

MultiForage.prototype.setItems = function (items, cb) {
  var self = this

  each(Object.keys(items), function (key, cb) {
    self._localforage.setItem(key, items[key], cb)
  }, cb)

  return self
}

MultiForage.prototype.getItems = function (keys, cb) {
  var self = this
  var items = {}

  each(keys, function (key, cb) {
    self._localforage.getItem(key, function (err, item) {
      if (err) return cb(err)
      items[key] = item
      cb()
    })
  }, function (err) {
    if (err) return cb(err)
    cb(null, items)
  })

  return self
}

MultiForage.prototype.removeItems = function (keys, cb) {
  var self = this

  each(keys, function (key, cb) {
    self._localforage.removeItem(key, cb)
  }, cb)

  return self
}

module.exports = MultiForage
