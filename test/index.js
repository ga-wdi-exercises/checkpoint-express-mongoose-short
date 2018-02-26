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

  it("should have Express", done => {
    expect(package.dependencies.express).not.to.be.undefined;
    done();
  });

  it("should have Mongoose", done => {
    expect(package.dependencies.mongoose).not.to.be.undefined;
    done();
  });

  it("should have an index.js", done => {
    let reqIndex = () => require("../index.js");

    expect(reqIndex).to.not.throw();
    expect(reqIndex).to.not.be.undefined;
    done();
  });

  it("should have a connection.js", done => {
    let reqConnection = () => require("../db/connection.js");

    expect(reqConnection).to.not.throw();
    expect(reqConnection).to.not.be.undefined;
    done();
  });

  it("should have a handlebars layout", done => {
    let reqLayout = () => require("../views/layout.hbs");

    expect(reqLayout).to.not.throw();
    expect(reqLayout).not.to.be.undefined;
    done();
  });

  it("should have an index handlebars template", done => {
    let reqIndexView = () => require("../views/index.hbs");

    expect(reqIndexView).to.not.throw();
    expect(reqIndexView).not.to.be.undefined;
    done();
  });

  it("should have an new messages handlebars template", done => {
    let reqNewMessageView = () => require("../views/messages/new.hbs");

    expect(reqNewMessageView).to.not.throw();
    expect(reqNewMessageView).not.to.be.undefined;
    done();
  });

  it("should have an messages show handlebars template", done => {
    let reqShowView = () => require("../views/messages/show.hbs");

    expect(reqShowView).to.not.throw();
    expect(reqShowView).not.to.be.undefined;
    done();
  });

  it("should have a messages controller", done => {
    let reqMessagesController = () => require("../controllers/messages.js");

    expect(reqMessagesController).to.not.throw();
    expect(reqMessagesController).not.to.be.undefined;
    done();
  });

  it("should have a Messages model", done => {
    let reqModel = () => require("../models/Message");
    expect(reqModel).to.not.throw;
    expect(reqModel).not.to.be.undefined;
    done();
  });
});

describe("Model -", () => {
  let mongoose;
  let Message;
  let app;

  before(done => {
    mongoose = require("../db/connection");
    Message = require("../models/Message");
    app = require("../index.js");
    done();
  });

  beforeEach(done => {
    let Message = mongoose.model("Message");
    Message.remove({}).then(() => {
      done();
    });
  });

  afterEach(done => {
    let Message = mongoose.model("Message");

    Message.remove({}).then(() => {
      done();
    });
  });

  it("should have a Message model", done => {
    let Message = mongoose.model("Message");

    expect(Message).not.to.be.undefined;
    done();
  });

  it("should have a Schema", done => {
    let Message = mongoose.model("Message");

    expect(Message.schema).not.to.be.undefined;
    done();
  });

  it("should have an author property", done => {
    let Message = mongoose.model("Message");

    expect(Message.schema.obj).to.have.property("author");
    done();
  });

  it("should have an body property", done => {
    let Message = mongoose.model("Message");

    expect(Message.schema.obj).to.have.property("body");
    done();
  });

  it("should be able to create a Message", done => {
    let Message = mongoose.model("Message");

    Message.create({
      author: "Whinnie The Pooh",
      body: "Honey!"
    }).then(message => {
      expect(message).not.to.be.undefined;
      expect(message).to.be.an("object");
      expect(message.body).not.to.be.undefined;
      expect(message.author).not.to.be.undefined;
      expect(message.body).to.be.a("string");
      expect(message.author).to.be.a("string");
      done();
    });
  });
});

describe("Routes -", () => {
  this.timeout = 10000;

  let mongoose;
  let Message;
  let app;

  before(done => {
    mongoose = require("../db/connection");
    Message = mongoose.model("Message");
    app = require("../index.js");
    done();
  });

  beforeEach(done => {
    Message.remove({}).then(() => {
      Message.create({
        author: "Whinnie The Pooh",
        body: "Honey!"
      }).then(() => done());
    });
  });

  afterEach(done => {
    Message.remove({}).then(() => {
      done();
    });
  });

  describe("GET /", () => {
    it("should return a 200 response", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          done();
        });
    });

    it("should have a link to create a new message", done => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          expect(res.text).to.contain('href="/messages/new"');
          done();
        });
    });

    it("should include a list of messages", done => {
      Message.find({}).then(messages => {
        let message = messages[0];
        chai
          .request(app)
          .get("/")
          .end((err, res) => {
            expect(res.text).to.contain(message.author);
            expect(res.text).to.contain(message.body);
            done();
          });
      });
    });
  });

  describe("GET /messages/new", () => {
    it("should return a 200 response", done => {
      chai
        .request(app)
        .get("/messages/new")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res).to.be.html;
          done();
        });
    });

    it("should include a form", done => {
      chai
        .request(app)
        .get("/messages/new")
        .end((err, res) => {
          expect(res.text).to.contain("form");
          expect(res.text).to.contain("input");
          done();
        });
    });
  });

  describe("POST /messages", () => {
    it("should create a new Message", done => {
      chai
        .request(app)
        .post("/messages")
        .send({
          author: "Christopher Robin",
          body: "Where is Pooh Bear?"
        })
        .end((err, res) => {
          Message.findOne({ author: "Christopher Robin" }).then(message => {
            expect(message.author).not.to.be.undefined;
            expect(message.body).not.to.be.undefined;
            expect(message.author).to.equal("Christopher Robin");
            expect(message.body).to.equal("Where is Pooh Bear?");
            done();
          });
        });
    });

    it("should redirect to /messages/:id", done => {
      chai
        .request(app)
        .post("/messages")
        .send({
          message: {
            author: "Christopher Robin",
            body: "Where is Pooh Bear?"
          }
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.redirects.length).to.equal(1);
          done();
        });
    });
  });

  describe("GET /messages/:id", () => {
    it("should return a 200 response", done => {
      Message.findOne({}).then(message => {
        chai
          .request(app)
          .get(`/messages/${message._id}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            done();
          });
      });
    });

    it("should include the contents of a message", done => {
      Message.findOne({}).then(message => {
        chai
          .request(app)
          .get(`/messages/${message._id}`)
          .end((err, res) => {
            expect(res.text).to.contain(message.author);
            expect(res.text).to.contain(message.body);
            done();
          });
      });
    });
  });
});
