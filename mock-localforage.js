function LocalForageMock () {
  this.data = {}
}

LocalForageMock.prototype.getItem = function (key, cb) {
  var data = this.data
  setTimeout(function () { cb(null, data[key]) })
}

LocalForageMock.prototype.setItem = function (key, value, cb) {
  var data = this.data
  setTimeout(function () {
    data[key] = value
    cb(null, value)
  })
}

LocalForageMock.prototype.removeItem = function (key, cb) {
  var data = this.data
  setTimeout(function () {
    delete data[key]
    cb()
  })
}

module.exports = LocalForageMock
