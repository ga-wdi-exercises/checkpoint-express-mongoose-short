const chai = require("chai");
const expect = require("chai").expect;
const http = require("chai-http");

const package = require("../package.json");

chai.use(http);

describe("Setup -", () => {
  beforeEach(done => {
    done();
  });

  afterEach(done => {
    done();
  });

  describe("Install dependencies - ", () => {
    it("should have installed Express", done => {
      expect(package.dependencies.express).not.to.be.undefined;
      done();
    });

    it("should have installed Mongoose", done => {
      expect(package.dependencies.mongoose).not.to.be.undefined;
      done();
    });

    it("should have installed hbs", done => {
      expect(package.dependencies.hbs).not.to.be.undefined;
      done();
    });
  });

  describe("Scaffold out file structure - ", () => {
    it("should have a layout.hbs at ./views/layout.hbs", done => {
      let reqLayout = () => require("../views/layout.hbs");

      expect(reqLayout).to.not.throw();
      expect(reqLayout).not.to.be.undefined;
      done();
    });

    it("should have an index.hbs at ./views/index.hbs", done => {
      let reqIndexView = () => require("../views/index.hbs");

      expect(reqIndexView).to.not.throw();
      expect(reqIndexView).not.to.be.undefined;
      done();
    });

    it("should have an show.hbs at ./views/notes/show.hbs", done => {
      let reqShowView = () => require("../views/notes/show.hbs");

      expect(reqShowView).to.not.throw();
      expect(reqShowView).not.to.be.undefined;
      done();
    });

    it("should have a messages controller at ./controllers/messages.js", done => {
      let reqMessagesController = () => require("../controllers/messages.js");

      expect(reqMessagesController).to.not.throw();
      expect(reqMessagesController).not.to.be.undefined;
      done();
    });

    it("should have a Note model inside ./models/Notes.js", done => {
      let reqModel = () => require("../models/Note");
      expect(reqModel).to.not.throw;
      expect(reqModel).not.to.be.undefined;
      done();
    });
  });
});

describe("Model -", () => {
  let Note;
  let app;

  before(done => {
    Note = require("../models/Note");
    app = require("../index.js");
    done();
  });

  beforeEach(done => {
    Note.remove({}).then(() => {
      done();
    });
  });

  afterEach(done => {
    Note.remove({}).then(() => {
      done();
    });
  });

  it("should have a Note model", done => {
    expect(Note).not.to.be.undefined;
    done();
  });

  it("should have a title property on the model", done => {
    expect(Note.schema.obj).to.have.property("title");
    done();
  });

  it("should have an author property on the model", done => {
    expect(Note.schema.obj).to.have.property("author");
    done();
  });

  it("should have an body property on the model", done => {
    expect(Note.schema.obj).to.have.property("body");
    done();
  });

  it("should be able to create a Note", done => {
    Note.create({
      author: "Whinnie The Pooh",
      title: "An important note",
      body: "Honey!"
    }).then(note => {
      expect(note).not.to.be.undefined;
      expect(note).to.be.an("object");
      expect(note.body).not.to.be.undefined;
      expect(note.title).not.to.be.undefined;
      expect(note.author).not.to.be.undefined;
      expect(note.body).to.be.a("string");
      expect(note.title).to.be.a("string");
      expect(note.author).to.be.a("string");
      done();
    });
  });
});

describe("Routes -", () => {
  this.timeout = 1000;

  let Note;
  let app;

  before(done => {
    Note = require("../models/Note");
    app = require("../index.js");
    done();
  });

  beforeEach(done => {
    Note.remove({}).then(() => {
      Note.create({
        author: "Whinnie The Pooh",
        title: "An important note",
        body: "Honey!"
      }).then(() => done());
    });
  });

  afterEach(done => {
    Note.remove({}).then(() => {
      done();
    });
  });

  describe("GET the homepage ('/')", () => {
    it("should return a successful response", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          done();
        });
    });

    it("should include a list of Notes", done => {
      Note.find({}).then(notes => {
        let note = notes[0];
        chai
          .request(app)
          .get("/")
          .end((err, res) => {
            expect(res.text).to.contain(note.author);
            expect(res.text).to.contain(note.title);
            expect(res.text).to.contain(note.body);
            done();
          });
      });
    });
  });

  describe("GET show view for Note ('/notes/:id')", () => {
    it("should return a successful response", done => {
      Note.findOne({}).then(note => {
        chai
          .request(app)
          .get(`/note/${note._id}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          });
      });
    });

    it("should include the contents of a Note", done => {
      Note.findOne({}).then(note => {
        chai
          .request(app)
          .get(`/notes/${note._id}`)
          .end((err, res) => {
            expect(res.text).to.contain(note.author);
            expect(res.text).to.contain(note.title);
            expect(res.text).to.contain(note.body);
            done();
          });
      });
    });
  });
});
