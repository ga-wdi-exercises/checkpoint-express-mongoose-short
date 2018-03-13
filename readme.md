# Checkpoint: Express & Mongoose

You may use outside resources during this checkpoint.

## Before You Start

The test suite is located in `./test`. **Before you begin anything, run `npm install`.**

To run the tests in the terminal, run `npm test`. Every time you make a change and save your files, you will need to manually re-run the tests. When you start, all of the tests will be failing; your goal is to make as many pass as you can in the hour provided.

> HINT: read the output of the failing tests. It will tell you why the test failed.

## Instructions

For this checkpoint, you need to build a simple application for tracking Notes. You will have a single model, `Note`, with three properties: an Author, a Title and a Body.

We've provided a `package.json` file with the dependencies to run your tests; you will need to install everything else necessary to build your application server with Express, Mongoose, and Handlebars.

Your application should have the following features:

* A home page that:
  * lists the most recently pushlished Notes
* A show view for a Note that:
  * Shows the Note title, body and author

**NOTES:**

* We've provided the necessary scaffolding for the database connection, some of the Model definition and some of the basic express app boilerplate. Don't delete any of this! Your task is to add to what we've provided.
* If your tests don't exit, try hitting `ctrl-c`.
* You do not (and should not) modify the tests in `tests/index.js`!

## Submission

Fork this repository and clone your fork locally. Commit as you go. When you are finished, push to GitHub.

**Wait until the end of the hour to make your Pull Request**
