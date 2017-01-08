import jsdom from 'mocha-jsdom'
import { expect } from 'chai'
import { toKey, getLanguageFromHash, resolveObjectByPath } from '../scripts/utils/util'

describe('Utils function', ()=>{
  context("toKey", ()=>{

    it("should convert a query with class selector string to a key", ()=>{
      let query  = '.that.is.mytest'
      let resultExpected = 'that.is.mytest'
      expect(toKey(query)).to.equal(resultExpected)
    })

    it("should convert a query with id selector string to a key", ()=>{
      let query  = '#that.is.mytest'
      let resultExpected = 'that.is.mytest'
      expect(toKey(query)).to.equal(resultExpected)
    })

    it("should convert a query with children class selector string to a key", ()=>{
      let query  = '.that .is .mytest'
      let resultExpected = 'that.is.mytest'
      expect(toKey(query)).to.equal(resultExpected)
    })

  })

  context("hash", ()=>{

    jsdom()

    it("should be translated using location hash", ()=>{
      window.location.hash = "#es"
      expect(getLanguageFromHash()).to.equal("es")
    })

    it("should be translated using en as default", ()=>{
      window.location.hash = ""
      expect(getLanguageFromHash()).to.equal("en")
    })

    it("should always return en for invalid languages", ()=>{
      window.location.hash = "#not"
      expect(getLanguageFromHash()).to.equal("en")
    })

  })

  context("resolveObjectByPath", ()=>{

    it("should return a value from nested objects using a path", ()=>{
      let obj = {
        a: {
          b: {
            c:12
          }
        }
      }

      expect(resolveObjectByPath(obj, "a.b.c")).to.equal(12)
    })

  })
})
