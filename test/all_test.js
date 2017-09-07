/*
global describe, it, before
*/

const should = require('chai').should()
const expect = require('chai').expect
const supertest = require('supertest')
var webPort // assigned randomly below
var api // defined after port assignment
var indexPath = '../index'
var index
var expressRequired

const connectionPath = '../db/connection.js'
const mongoDbTestUrl = 'mongodb://localhost/checkpoint-express-mongoose-test'
var mongoose
var mongooseRequired
var Author

describe('Express-Mongoose checkpoint', function() {
  // increasing timeout to allow some mongoose operations to finish
  this.timeout(10000)

  // Verify Express package and index file
  describe('Part I', () => {
    describe('Express pre-req', () => {
      it('should install express module via npm', (done) => {
        let RequireExpress = () => {
          expressRequired = require('express')
        }
        expect(RequireExpress).not.to.throw()
        expect(expressRequired).not.to.be.undefined
        // expect(expressRequired.Mongoose).to.be.an.instanceof(Function)
        done()
      })

      it('should have an index.js file', (done) => {
        let RequireIndex = () => {
          index = require(indexPath)
        }
        expect(RequireIndex).not.to.throw()
        expect(index).not.to.be.undefined
        done()
      })

      it('should export express app instance from the index file', (done) => {
        expect(expressRequired).not.to.be.undefined
        expect(index).not.to.be.undefined
        expect(index).to.be.an.instanceof(expressRequired.constructor)
        done()
      })
    })

    describe('CRUD routes', () => {
      before((done) => {
        // assign 0 as port number to get rendom assignment
        if (index) {
          let listener = index.listen(0, () => {
            // save the randomly assigned port
            webPort = listener.address().port
            api = supertest(`http://localhost:${webPort}`)
            // console.log(`Running testing webserver on port ${webPort}`)
            done()
          })
        } else {
          done()
        }
      })

      describe('GET /authors', () => {
        it('should return a 200 response', (done) => {
          api.get('/authors')
          .set('Accept', 'application/json')
          .expect(200, done)
        })
      })

      describe('POST /authors', () => {
        it('should return a 200 response', (done) => {
          api.post('/authors')
          .set('Accept', 'application/json')
          .expect(200, done)
        })
      })

      describe('GET /authors/:_id', () => {
        it('should return a 200 response', (done) => {
          api.get('/authors/:57')
          .set('Accept', 'application/json')
          .expect(200, done)
        })
      })

      describe('PUT /authors/:_id', () => {
        it('should return a 200 response', (done) => {
          api.put('/authors/5')
          .set('Accept', 'application/json')
          .expect(200, done)
        })
      })

      describe('DELETE /authors/:_id', () => {
        it('should return a 200 response', (done) => {
          api.delete('/authors/5')
          .set('Accept', 'application/json')
          .expect(200, done)
        })
      })
    })
  })

  describe('Part II', () => {
    // Verify Mongoose package and connection file

    describe('Mongoose pre-req', () => {
      it('should install mongoose module via npm', (done) => {
        let RequireMongoose = () => {
          mongooseRequired = require('mongoose')
        }
        expect(RequireMongoose).not.to.throw()
        expect(mongooseRequired).not.to.be.undefined
        expect(mongooseRequired.Mongoose).to.be.an.instanceof(Function)
        done()
      })

      it('should have a connection.js file', (done) => {
        let RequireConnection = () => {
          mongoose = require(connectionPath)
        }
        expect(RequireConnection).not.to.throw()
        done()
      })

      it('should export mongoose instance from the connection file', (done) => {
        expect(mongooseRequired).not.to.be.undefined
        expect(mongoose).not.to.be.undefined
        expect(mongoose).to.be.an.instanceof(mongooseRequired.Mongoose)
        done()
      })
    })

    describe('Mongoose Models', function () {
      before((done) => {
        if(mongoose && mongoose.connection) {
          mongoose.connection.close(() => {
            mongoose.connect(mongoDbTestUrl)
            // console.log(`Switching db url to ${mongoDbTestUrl}`)
            done()
          })
        } else {
          done()
        }
      })
      it('should have an Author model defined', (done) => {
        let LoadAuthorModel = () => {
          Author = mongoose.model('Author')
        }
        expect(LoadAuthorModel).not.to.throw(mongoose.Error.MissingSchemaError)
        expect(Author).not.to.be.undefined
        // expect(Author)
        done()
      })

      // beforeEach(() => {
      //   expect(Author).not.to.be.undefined
      //   expect(Author.schema).not.to.be.undefined
      //   expect(Author.schema.obj).not.to.be.undefined
      // })

      it('should have `name` in Author Schema', (done) => {
        expect(Author.schema.obj).to.have.property('name')
        expect(Author.schema.obj.name).to.be.equal(String)
        done()
      })

      it('should have `publisher` in Author Schema', (done) => {
        expect(Author.schema.obj).to.have.property('publisher')
        expect(Author.schema.obj.publisher).to.be.equal(String)
        done()
      })

      it('should have `age` in Author Schema', (done) => {
        expect(Author.schema.obj).to.have.property('age')
        expect(Author.schema.obj.age).to.be.equal(Number)
        done()
      })

      it('should have `active` in Author Schema', (done) => {
        expect(Author.schema.obj).to.have.property('active')
        expect(Author.schema.obj.active).to.be.equal(Boolean)
        done()
      })

      it('should save save Author objects', (done) => {
        expect(Author).not.to.be.undefined
        Author.remove({})
        .then(() => {
          let temp_author = new Author({name: 'Steven 256'})
          temp_author.save()
          .then(() => {
            Author.findOne({name: 'Steven 256'})
            .then((found_author) => {
              expect(found_author).not.to.be.undefined
              expect(found_author).to.have.property('name', 'Steven 256')
              Author.remove({}).then(() => {
                done()
              }, (error) => {
                done()
              })
            })
          })
        }, (error) => {
          let expectAuthorToDeleteDocuments = () => {return}
          expect(expectAuthorToDeleteDocuments).not.to.be.undefined
          done()
        })
      })
    })
  })

  describe('Part III', () => {
    // make CRUD routes for Author model
    describe('CRUD routes for an `author` path', () => {
      let author = {
        name: 'Fred',
        publisher: 'Random House',
        age: 33,
        active: false
      }
      let author_id

      let expectAuthorToMatch = (responseObject) => {
        expect(responseObject).to.be.an('object')
        Object.keys(author).forEach((key) => {
          expect(responseObject).to.have.a.property(key, author[key])
        })
      }

      describe('POST /authors', () => {
        it('should return create and return an author', (done) => {
          api.post('/authors')
          .set('Accept', 'application/json')
          .send({author: author})
          .end((error, response) => {
            expectAuthorToMatch(response.body)

            expect(response.body).to.have.a.property('_id')
            author_id = response.body._id

            done()
          })
        })
      })

      describe('GET /authors', () => {
        it('should return an array of authors', (done) => {
          api.get('/authors')
          .set('Accept', 'application/json')
          .end((error, response) => {
            expect(response.body).to.be.an('array')
            let authorById = response.body.find((item) => {
              return item._id === author_id
            })
            expectAuthorToMatch(authorById)
            done()
          })
        })
      })

      describe('GET /authors/:id', () => {
        it('should return the added author', (done) => {
          api.get(`/authors/${author_id}`)
          .set('Accept', 'application/json')
          .end((error, response) => {
            expectAuthorToMatch(response.body)
            done()
          })
        })
      })

      describe('PUT /authors/:id', () => {
        author.name = 'Susan'
        it('should update the author', (done) => {
          api.put(`/authors/${author_id}`)
          .set('Accept', 'application/json')
          .send({author: author})
          .end((error, response) => {
            expectAuthorToMatch(response.body)
            done()
          })
        })
      })

      describe('DELETE /authors/:id', () => {
        it('should destroy the author', (done) => {
          api.delete(`/authors/${author_id}`)
          .set('Accept', 'application/json')
          .expect(200)
          .end((error, response) => {
            api.get(`/authors/${author_id}`)
            .set('Accept', 'application/json')
            .expect(200)
            .end((error, response) => {
              if(response.body) {
                expect(response.body).not.to.have.property('publisher', author.publisher)
              } else {
                expect(response.body).to.not.exist
              }
              done()
            })
          })
        })
      })
    })
  })
})

