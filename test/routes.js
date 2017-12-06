const chai = require('chai')
const should = require('chai').should()
const expect = require('chai').expect
const http = require('chai-http')

const package = require('../package.json')
const mongoose = require('../db/connection')
let Message = mongoose.model('Message')

chai.use(http)

const app = require('../index.js')

describe('Routes -', () => {
    this.timeout = 10000

    beforeEach(done => {
        Message.remove({}).then(() => {
            Message.create({
                "author": "Whinnie The Pooh",
                "body": "Honey!"
            }).then(() => done())
        })
      })
    
      afterEach(done => {
        Message.remove({}).then(() => {
          done()
        })
      })
    
    describe('GET /', () => {
        it('should return a 200 response', done => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.html
                    done()
                })
        })

        it('should have a link to create a new message', done => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res.text).to.contain('href="/messages/new"')
                    done()
                })
        })
        
        it('should include a list of messages', done => {
            Message.find({}).then(messages => {
                let message = messages[0]
                chai.request(app)
                    .get('/')
                    .end((err, res) => {
                        expect(res.text).to.contain(message.author)
                        expect(res.text).to.contain(message.body)
                        done()
                    })
            })
        })
    })

    describe('GET /messages/new', () => {
        it('should return a 200 response', done => {
            chai.request(app)
                .get('/messages/new')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res).to.be.html
                    done()
                })
        })

        it('should include a form', done => {
            chai.request(app)
                .get('/messages/new')
                .end((err, res) => {
                    expect(res.text).to.contain('form')
                    expect(res.text).to.contain('input')
                    done()
                })
        })
    })

    describe('POST /messages', () => {
        it('should create a new Message', done => {
            chai.request(app)
                .post('/messages')
                .send({ message: {
                        author: "Christopher Robin",
                        body: "Where is Pooh Bear?"
                    }
                })
                .end((err, res) => {
                    Message.findOne({author: "Christopher Robin"})
                        .then(message => {
                            expect(message.author).not.to.be.undefined
                            expect(message.body).not.to.be.undefined
                            expect(message.author).to.equal("Christopher Robin")
                            expect(message.body).to.equal("Where is Pooh Bear?")
                            done()
                        })
                })
        })

        it('should redirect to /messages/:id', done => {
            chai.request(app)
                .post('/messages')
                .send({
                    message: {
                        author: "Christopher Robin",
                        body: "Where is Pooh Bear?"
                    }
                })
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.redirects.length).to.equal(1)
                    done()
                })
        })
    })

    describe('GET /messages/:id', () => {
        it('should return a 200 response', done => {
            Message.findOne({}).then(message => {
                chai.request(app)
                    .get(`/messages/${message._id}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200)
                        done()
                    })
            })
        })

        it('should include the contents of a message', done => {
            Message.findOne({}).then(message => {
                chai.request(app)
                    .get(`/messages/${message._id}`)
                    .end((err, res) => {
                        expect(res.text).to.contain(message.author)
                        expect(res.text).to.contain(message.body)
                        done()
                    })
            })
        })
    })
})