const chai = require("chai")
const expect = require("chai").expect
const http = require("chai-http")

const package = require("../package.json")

chai.use(http)

describe("Setup -", () => {
  beforeEach(done => {
    done()
  })

  afterEach(done => {
    done()
  })

  describe("package.json dependencies", () => {
    it("should contain Express", done => {
      expect(package.dependencies.express).not.to.be.undefined
      done()
    })

    it("should contain Mongoose", done => {
      expect(package.dependencies.mongoose).not.to.be.undefined
      done()
    })
  })

  describe("The project file structure ", () => {
    it("should have a notes controller at ./controllers/notes.js", done => {
      let importMessagesController = require("../controllers/notes.js")

      // expect(importMessagesController).to.not.throw()
      expect(importMessagesController).not.to.be.undefined
      done()
    })

    it("should have a users controller at ./controllers/users.js", done => {
      let importMessagesController = require("../controllers/users.js")

      // expect(importMessagesController).to.not.throw()
      expect(importMessagesController).not.to.be.undefined
      done()
    })

    it("should have a Note model inside ./models/Note.js", done => {
      let importModel = require("../models/Note")
      expect(importModel).to.not.throw()
      expect(importModel).not.to.be.undefined
      done()
    })

    it("should have a User model inside ./models/User.js", done => {
      let importModel = require("../models/User")
      expect(importModel).to.not.throw()
      expect(importModel).not.to.be.undefined
      done()
    })
  })
})

describe("User Model  -", () => {
  let User
  let app

  before(done => {
    User = require("../models/User")
    app = require("../index.js")
    done()
  })

  beforeEach(done => {
    User.deleteMany({}).then(() => {
      done()
    })
  })

  afterEach(done => {
    User.deleteMany({}).then(() => {
      done()
    })
  })

  it("should have a User model", done => {
    expect(User).not.to.be.undefined
    done()
  })

  it("should have a username property on the model", done => {
    expect(User.schema.obj).to.have.property("username")
    done()
  })

  it("should have an email property on the model", done => {
    expect(User.schema.obj).to.have.property("email")
    done()
  })
})

describe("Note Model -", () => {
  let Note
  let app

  before(done => {
    Note = require("../models/Note")
    app = require("../index.js")
    done()
  })

  // beforeEach(done => {
  //   Note.deleteMany({}).then(() => {
  //     done()
  //   })
  // })

  // afterEach(done => {
  //   Note.deleteMany({}).then(() => {
  //     done()
  //   })
  // })

  it("should have a Note model", done => {
    expect(Note).not.to.be.undefined
    done()
  })

  it("should have a title property on the model", done => {
    expect(Note.schema.obj).to.have.property("title")
    done()
  })

  it("should have an author property on the model", done => {
    expect(Note.schema.obj).to.have.property("author")
    done()
  })

  it("should have a body property on the model", done => {
    expect(Note.schema.obj).to.have.property("body")
    done()
  })

  // it("should be able to create a Note", done => {
  //   Note.create({
  //     author: "Winnie The Pooh",
  //     title: "An important note",
  //     body: "Honey!"
  //   }).then(note => {
  //     expect(note).not.to.be.undefined
  //     expect(note).to.be.an("object")
  //     expect(note.body).not.to.be.undefined
  //     expect(note.title).not.to.be.undefined
  //     expect(note.author).not.to.be.undefined
  //     expect(note.body).to.be.a("string")
  //     expect(note.title).to.be.a("string")
  //     expect(note.author).to.be.a("string")
  //     done()
  //   })
  // })
})

describe("Routes -", () => {
  this.timeout = 2000

  let Note
  let User
  let app

  before(done => {
    Note = require("../models/Note")
    User = require("../models/User")
    app = require("../index.js")

    Note.deleteMany({}).then(() => {
      User.deleteMany({}).then(() => {
        Note.create({
          title: "An important note",
          body: "Honey! Do the thing!"
        }).then(note => {
          User.create({
            username: "the_dude",
            email: "dude@thedude.com"
          }).then(user => {
            user.notes.push(note._id)
            note.author = user._id

            user.save()
            note.save()

            done()
          })
        })
      })
    })
  })

  after(done => {
    Note.deleteMany({}).then(() => {
      User.deleteMany({}).then(() => {
        done()
      })
    })
  })

  describe("A GET request for the homepage ('/')", () => {
    it("should return a redirect response", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res.status).to.be.oneOf([200, 302])
          done()
        })
    })
  })

  describe("A GET request for notes ('/notes')", () => {
    it("should include a list of Notes", done => {
      Note.findOne({}).then(note => {
        chai
        .request(app)
        .get("/notes")
        .end((err, res) => {
          expect(res.body[0].length).to.not.equal(0)
          expect(res.body[0].title).to.contain(note.title)
          expect(res.body[0].body).to.contain(note.body)
          expect(res.body[0].author).to.not.be.empty
          done()
        })
      })
    })
  })

  describe("A GET request for notes ('/notes/:id')", () => {
    it("should return a single Note", done => {
      Note.findOne({}).then(note => {
        User.findOne().then(user => {
          chai.request(app)
          .get(`/notes/${note._id}`)
          .end((err, res) => {
            expect(res.body.title).to.contain(note.title)
            expect(res.body.body).to.contain(note.body)
            expect(res.body.author).to.equal(user._id.toString())
            done()
          })
        })
      })
    })
  })

  describe("A GET request for users ('/users')", () => {
    it("should return a list of Users", done => {
      User.findOne({}).then(user => {
        chai.request(app)
        .get(`/users/`)
        .end((err, res) => {
          expect(res.body[0].username).to.contain(user.username)
          expect(res.body[0].email).to.contain(user.email)
          done()
        })
      })
    })
  })

  describe("A GET request for users ('/users/:id')", () => {
    it("should return a single User", done => {
      User.findOne({}).then(user => {
        Note.findOne({}).then(note => {
          chai.request(app)
          .get(`/users/${user._id}`)
          .end((err, res) => {
            expect(res.body.username).to.contain(user.username)
            expect(res.body.email).to.contain(user.email)
            expect(res.body.notes[0]).to.equal(note._id.toString())
            done()
          })
        })
      })
    })
  })
})
