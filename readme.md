# Checkpoint: Express & Mongoose

You may use lesson plans for guidance during this checkpoint, such as the [Express MVC lesson plan](https://git.generalassemb.ly/ga-wdi-lessons/express-mongoose).

## Set Up

Fiork and clone this repository. After cloning down **your fork**...

```bash
 $ cd checkpoint-express-mongoose-short
 $ npm install
```

To run the tests in the terminal, run `npm test`.
  - Every time you make a change and save your files, you will need to manually re-run the tests.
  - When you start, all of the tests will be failing; your goal is to make as many pass as you can in the hour provided.
  - Read the output of the failing tests. It will tell you why the test failed.

> Note: The test suite is located in `./test`. 

## Requirements

For this checkpoint, you need to build a simple application for tracking Notes. You will have a single model, `Note`, with three fields: an `author`, a `title` and a `body`.

You will also to create the following directories `controllers` and `views`. The names must match these exactly, so be careful to pluralize.

There is already a `package.json` file with the dependencies to run the tests. you will need to install everything else necessary to build your application server with Express, Mongoose, and Handlebars (use `hbs` instead of `express-handlebars`).

Your application should have the following features...

* A handlebars layout file named `views/layout.hbs`.
* A `views/index.hbs` lists the most recently published Notes, **showing the `title` and `author` of each `Note`**.
* A show view (`views/show.hbs`) for a `Note` that:
  * **Displays the `Note`'s `title`, `body` and `author`**.

**NOTES:**

* We've provided the necessary scaffolding for the database connection, some of the Model definition and some of the basic express app boilerplate. Don't delete any of this! Your task is to add to what we've provided.
* If your tests don't exit, try hitting `ctrl-c`.
* You do not (and should not) modify the tests in `tests/index.js`!

## Submission

Fork this repository and clone your fork locally. Commit as you go. When you are finished, push to GitHub.

**Wait until the end of the hour to make your Pull Request**
