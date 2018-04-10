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

    it("should contain hbs", done => {
      expect(package.dependencies.hbs).not.to.be.undefined
      done()
    })
  })

  describe("The project file structure ", () => {
    it("should have a layout.hbs at ./views/layout.hbs", done => {
      let importLayout = () => require("../views/layout.hbs")

      // expect(importLayout).to.not.throw()
      expect(importLayout).not.to.be.undefined
      done()
    })

    it("should have an index.hbs at ./views/index.hbs", done => {
      let importIndexView = () => require("../views/index.hbs")

      // expect(importIndexView).to.not.throw()
      expect(importIndexView).not.to.be.undefined
      done()
    })

    it("should have a show.hbs at ./views/show.hbs", done => {
      let importShowView = () => require("../views/show.hbs")

      // expect(importShowView).to.not.throw()
      expect(importShowView).not.to.be.undefined
      done()
    })

    it("should have a notes controller at ./controllers/notes.js", done => {
      let importMessagesController = () => require("../controllers/notes.js")

      // expect(importMessagesController).to.not.throw()
      expect(importMessagesController).not.to.be.undefined
      done()
    })

    it("should have a Note model inside ./models/Note.js", done => {
      let importModel = () => require("../models/Note")
      expect(importModel).to.not.throw()
      expect(importModel).not.to.be.undefined
      done()
    })
  })
})

describe("Model -", () => {
  let Note
  let app

  before(done => {
    Note = require("../models/Note")
    app = require("../index.js")
    done()
  })

  beforeEach(done => {
    Note.remove({}).then(() => {
      done()
    })
  })

  afterEach(done => {
    Note.remove({}).then(() => {
      done()
    })
  })

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

  it("should have an body property on the model", done => {
    expect(Note.schema.obj).to.have.property("body")
    done()
  })

  it("should be able to create a Note", done => {
    Note.create({
      author: "Winnie The Pooh",
      title: "An important note",
      body: "Honey!"
    }).then(note => {
      expect(note).not.to.be.undefined
      expect(note).to.be.an("object")
      expect(note.body).not.to.be.undefined
      expect(note.title).not.to.be.undefined
      expect(note.author).not.to.be.undefined
      expect(note.body).to.be.a("string")
      expect(note.title).to.be.a("string")
      expect(note.author).to.be.a("string")
      done()
    })
  })
})

describe("Routes -", () => {
  this.timeout = 1000

  let Note
  let app

  before(done => {
    Note = require("../models/Note")
    app = require("../index.js")
    done()
  })

  beforeEach(done => {
    Note.remove({}).then(() => {
      Note.create({
        author: "Winnie The Pooh",
        title: "An important note",
        body: "Honey!"
      }).then(() => done())
    })
  })

  afterEach(done => {
    Note.remove({}).then(() => done())
  })

  describe("A GET request for the homepage ('/')", () => {
    it("should return a successful response", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res).to.be.html
          done()
        })
    })

    it("should include a list of Notes with author and titles displayed", done => {
      Note.find({}).then(notes => {
        let note = notes[0]
        chai
          .request(app)
          .get("/")
          .end((err, res) => {
            expect(res.text).to.contain(note.author)
            expect(res.text).to.contain(note.title)
            done()
          })
      })
    })
  })

  describe("GET show view for Note ('/notes/:id')", () => {
    it("should return a successful response 200", done => {
      Note.findOne({}).then(note => {
        console.log(note)
        chai
          .request(app)
          .get(`/notes/${note._id}`)
          .end((err, res) => {
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    it("should include the fields of a Note", done => {
      Note.findOne({}).then(note => {
        chai
          .request(app)
          .get(`/notes/${note._id}`)
          .end((err, res) => {
            expect(res.text).to.contain(note.author)
            expect(res.text).to.contain(note.title)
            expect(res.text).to.contain(note.body)
            done()
          })
      })
    })
  })
})
