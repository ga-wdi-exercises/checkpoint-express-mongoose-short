const chai = require('chai')
const expect = require('chai').expect

const package = require('../package.json')

describe('Setup -', () => {
    
    beforeEach(done => {
      done()
    })
  
    afterEach(done => {
      done()
    })
  
    it('should have Express', (done) => {
      expect(package.dependencies.express).not.to.be.undefined
      done()
    })
  
    it('should have Mongoose', done => {
      expect(package.dependencies.mongoose).not.to.be.undefined
      done()
    })
  
    it('should have an index.js', done => {
      expect(require('../index.js')).not.to.be.undefined
      done()
    })
  
    it('should have a connection.js', done => {
      expect(require('../db/connection.js')).not.to.be.undefined
      done()
    })
  
    it('should have a handlebars layout', done => {
      expect(require('../views/layout.hbs')).not.to.be.undefined
      done()
    })
  
    it('should have an index handlebars template', done => {
      expect(require('../views/index.hbs')).not.to.be.undefined
      done()
    })
  
    it('should have an new messages handlebars template', done => {
      expect(require('../views/messages/new.hbs')).not.to.be.undefined
      done()
    })
  
    it('should have an messages show handlebars template', done => {
      expect(require('../views/messages/show.hbs')).not.to.be.undefined
      done()
    })

    it('should have a messages controller', done => {
      expect(require('../controllers/messages.js')).not.to.be.undefined
      done()
    })
   
  })