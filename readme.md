# Checkpoint: Express & Mongoose Retake

You may use lesson plans for guidance during this checkpoint, such as the [Express MVC lesson plan](https://git.generalassemb.ly/ga-wdi-lessons/express-mongoose).

## Set Up

Fork and clone this repository. After cloning down **your fork**...

```bash
 $ cd checkpoint-express-mongoose-short
 $ npm install
```

To run the tests in the terminal, run `npm test`.
  - Every time you make a change and save your files, you will need to manually re-run the tests.
  - When you start, it will report 5 tests are passing and 5 are failing (sometimes it will say 4 out of  6). Your goal is to make as many pass as you can in the hour provided. As you complete tests more will be revealed, there are a total of 18 tests, you need to complete 11 tests to pass the checkpoint.

  - Read the output of the failing tests. It will tell you why the test failed.

> Note: The test suite is located in `./test`. 

## Instructions

For this checkpoint, you need to build a simple application for tracking Quests.

### Requirements

1. There is already a `package.json` file with the dependencies necessary for running the tests. Install everything else required to build your application server with Express, Mongoose, and Handlebars (use `hbs` instead of `express-handlebars`).

2. Create the following directories `controllers` and `views` if they are not provided. The names must match these exactly, so be careful to pluralize.

3. There will be a single model, `Quest`, with 4 fields and they are expected to be a specific data type: 

  title: String
  quest_giver: String
  rewards: Array
  locations: Array

4. You should have 3 routes...
  - `GET '/'` which should redirect to `/quests'
  - `GET '/quests'` which render view with a list of notes
  - `GET '/quest/:someParameter'` where `:someParameter` can be used to identify or grab a single `Quest` from the database.

5. Your application should have the following views...

  - A handlebars layout file named `views/layout.hbs`.
  - A `views/index.hbs` lists the all the Quests, **showing the:
    `title`
    `quest_giver`
   

     of each `Quest`**.
  - A show view (`views/show.hbs`) for a `Quest` that, **displays the `Quests`'s `title`, `quest_giver`,  `rewards` and `locations` **.

**NOTES:**

* We've provided the necessary configuration for the database connection, some of the Model definition, and some of the basic express app boilerplate. Don't delete any of this! Your task is to add to what is provided.
* The general structure of the views has been provided, you can use this if you like, but you don't have to, you only need the tests to pass.
* The general structure of a seed is provided, this can help those that like to see what they are developing or those that cannot run the tests. It will not run as it is, it is missing something that has been explored in a previous project.
* If your tests time-out, don't exit, try hitting `ctrl-c`.
* Do not modify the tests in `tests/index.js`!

## Submission

Fork this repository and clone your fork locally. Commit as you go. When you are finished, push to GitHub.

**Wait until the end of the hour to make your Pull Request**
