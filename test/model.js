const chai = require('chai')
const expect = require('chai').expect

const mongoose = require('../db/connection')

describe('Model -', () => {
    
  beforeEach(done => {
    let Message = mongoose.model('Message')
    Message.remove({}).then(() => {
         done()
    })
  })

  afterEach(done => {
    let Message = mongoose.model('Message')
    
    Message.remove({}).then(() => {
      done()
    })
  })

  it('should have a Message model', done => {
    let Message = mongoose.model('Message')

    expect(Message).not.to.be.undefined
    done()
  })

  it('should have a Schema', done => {
    let Message = mongoose.model('Message')

    expect(Message.schema).not.to.be.undefined
    done()
  })

  it('should have an author property', done => {
    let Message = mongoose.model('Message')

    expect(Message.schema.obj).to.have.property('author')
    done()
  })

  it('should have an body property', done => {
    let Message = mongoose.model('Message')
    
    expect(Message.schema.obj).to.have.property('body')
    done()
  })

  it('should be able to create a Message', done => {
    let Message = mongoose.model('Message')

    Message.create({
      "author": "Whinnie The Pooh",
      "message": "Honey!"
    }).then(message => {
      expect(message).not.to.be.undefined
      expect(message).to.be.an('object')      
      expect(message.body).not.to.be.undefined
      expect(message.author).not.to.be.undefined
      expect(message.body).to.be.a('string')
      expect(message.author).to.be.a('string')    
      done()
    })
    
  })

})