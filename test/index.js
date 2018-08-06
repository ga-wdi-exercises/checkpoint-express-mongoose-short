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

      expect(importLayout).to.not.throw()
      expect(importLayout).not.to.be.undefined
      done()
    })

    it("should have an index.hbs at ./views/index.hbs", done => {
      let importIndexView = () => require("../views/index.hbs")

      expect(importIndexView).to.not.throw()
      expect(importIndexView).not.to.be.undefined
      done()
    })

    it("should have a show.hbs at ./views/show.hbs", done => {
      let importShowView = () => require("../views/show.hbs")

      expect(importShowView).to.not.throw()
      expect(importShowView).not.to.be.undefined
      done()
    })

    it("should have a quests controller at ./controllers/quests.js", done => {
      let importMessagesController = () => require("../controllers/quests.js")

      expect(importMessagesController).to.not.throw()
      expect(importMessagesController).not.to.be.undefined
      done()
    })

    it("should have a Quest model inside ./models/Quest.js", done => {
      let importModel = () => require("../models/Quest")
      expect(importModel).to.not.throw()
      expect(importModel).not.to.be.undefined
      done()
    })
  })
})

describe("Model -", () => {
  let Quest
  let app

  before(done => {
    Quest = require("../models/Quest")
    app = require("../index.js")
    done()
  })

  beforeEach(done => {
    Quest.remove({}).then(() => {
      done()
    })
  })

  afterEach(done => {
    Quest.remove({}).then(() => {
      done()
    })
  })

  it("should have a Quest model", done => {
    expect(Quest).not.to.be.undefined
    done()
  })

  it("should have a title property on the model", done => {
    expect(Quest.schema.obj).to.have.property("title")
    done()
  })

  it("should have an author property on the model", done => {
    expect(Quest.schema.obj).to.have.property("quest_giver")
    done()
  })

  it("should have an body property on the model", done => {
    expect(Quest.schema.obj).to.have.property("rewards")
    done()
  })

  it("should have an body property on the model", done => {
    expect(Quest.schema.obj).to.have.property("locations")
    done()
  })

  it("should be able to create a Quest", done => {
    Quest.create({
      "title": "Taking Care of Business",
      "quest_giver": "Brynjolf",
      "rewards": ["Thieves Guild Outfit", "Fence"],
      "locations": ["Riften"]
    }).then(quest => {
      expect(quest).not.to.be.undefined
      expect(quest).to.be.an("object")

      expect(quest.quest_giver).not.to.be.undefined
      expect(quest.title).not.to.be.undefined
      expect(quest.rewards).not.to.be.undefined
      expect(quest.locations).not.to.be.undefined


      expect(quest.title).to.be.a("string")
      expect(quest.quest_giver).to.be.a("string")
      expect(quest.rewards).to.be.a("array")
      expect(quest.locations).to.be.a("array")
      done()
    })
  })
})

describe("Routes -", () => {
  this.timeout = 1000

  let Quest
  let app

  before(done => {
    Quest = require("../models/Quest")
    app = require("../index.js")
    done()
  })

  beforeEach(done => {
    Quest.remove({}).then(() => {
      Quest.create({
        "title": "House of Horrors",
        "quest_giver": "Vigilant Tyranus",
        "rewards": ["Abandoned House (Markarth)"],
        "locations": ["Abandoned House"]
      }).then(() => done())
    })
  })

  afterEach(done => {
    Quest.remove({}).then(() => done())
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

    it("should include a list of Quests with quest_givers, titles, rewards and locations displayed", done => {
      Quest.find({}).then(quests => {
        let quest = quests[0]
        chai
          .request(app)
          .get("/")
          .end((err, res) => {
            expect(res.text).to.contain(quest.title)
            expect(res.text).to.contain(quest.quest_giver)
            expect(res.text).to.contain(quest.rewards)
            expect(res.text).to.contain(quest.locations)
            done()
          })
      })
    })
  })

  describe("GET show view for Quest ('/quest/:id')", () => {
    it("should return a successful response 200", done => {
      Quest.findOne({}).then(quest => {
        console.log(quest)
        chai
          .request(app)
          .get(`/quest/${quest._id}`)
          .end((err, res) => {
            expect(res).to.have.status(200)
            done()
          })
      })
    })

    it("should include the fields of a Quest", done => {
      Quest.findOne({}).then(quest => {
        chai
          .request(app)
          .get(`/quest/${quest._id}`)
          .end((err, res) => {
            expect(res.text).to.contain(quest.quest_giver)
            expect(res.text).to.contain(quest.title)
            expect(res.text).to.contain(quest.rewards)
            done()
          })
      })
    })
  })
})
