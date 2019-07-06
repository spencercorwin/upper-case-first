/* global describe, it */
var assert = require('assert')
var upperCaseFirst = require('./')

describe('upper case first', function () {
  it('should upper case the first character a string', function () {
    assert.equal(upperCaseFirst(null), '')
    assert.equal(upperCaseFirst('test'), 'Test')
    assert.equal(upperCaseFirst('TEST'), 'TEST')
  })
})
