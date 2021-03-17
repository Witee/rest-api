
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./rest-api.cjs.production.min.js')
} else {
  module.exports = require('./rest-api.cjs.development.js')
}
