# Checkpoint: Express & Mongoose

You may use lesson plans for guidance during this checkpoint, such as the [Express MVC lesson plan](https://git.generalassemb.ly/ga-wdi-lessons/express-mongoose).

## Set Up

Fork and clone this repository. After cloning down **your fork**...

```bash
 $ cd checkpoint-express-mongoose-short
 $ npm install
```

To run the tests in the terminal, run `npm test`.
  - Every time you make a change and save your files, you will need to manually re-run the tests.
  - When you start, all of the tests will be failing; your goal is to make as many pass as you can in the hour provided.
  - Read the output of the failing tests. It will tell you why the test failed.

> Note: The test suite is located in `./test`. 

## Instructions

For this checkpoint, you need to build a simple application for tracking Notes.

### Requirements

1. There is already a `package.json` file with the dependencies necessary for running the tests. Install everything else required to build your application server with Express, Mongoose, and Handlebars (use `hbs` instead of `express-handlebars`).

2. Create the following directories `controllers` and `views`. The names must match these exactly, so be careful to pluralize.

3. There will be a single model, `Note`, with three fields: an `author`, a `title` and a `body`. Each field expects a string value.

4. You should have 3 routes...
  - `GET '/'` which should redirect to `/notes'
  - `GET '/notes'` which render view with a list of notes
  - `GET '/notes/:someParameter'` where `:someParameter` can be used to identify or grab a single `Note` from the database. _Note:_ `:someParameter` is an arbitrary placeholder name in the description, and the tests will pass if you name it something else.

5. Your application should have the following views...

  - A handlebars layout file named `views/layout.hbs`.
  - A `views/index.hbs` lists the most recently published Notes, **showing the `title` and `author` of each `Note`**.
  - A show view (`views/show.hbs`) for a `Note` that, **displays the `Note`'s `title`, `body` and `author`**.

**NOTES:**

* We've provided the necessary configuration for the database connection, some of the Model definition, and some of the basic express app boilerplate. Don't delete any of this! Your task is to add to what is provided.
* If your tests time-out, don't exit, try hitting `ctrl-c`.
* Do not modify the tests in `tests/index.js`!

## Submission

Fork this repository and clone your fork locally. Commit as you go. When you are finished, push to GitHub.

**Wait until the end of the hour to make your Pull Request**
