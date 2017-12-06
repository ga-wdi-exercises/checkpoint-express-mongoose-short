# Checkpoint: Express & Mongoose

## Before You Start

The test suite files are located in `./test`. **Before you begin anything, run `npm install`.**

To run the tests in the terminal, run `npm test`. Every time you make a change and save your files, you will need to manually re-run the tests.

## Instructions

For this checkpoint, you need to build a simple message board application. You will have a single model, Messages, with two properties: an Author and a Body.

We've provided a `package.json` file with the dependencies to run your tests; you will need to install everything else necessary to build your application server with Express and Mongoose.

Your application should have the following features:

* A home page ('/') that:
  * lists the most recently pushlished messages
  * has a link to create a new message
* A view for creating a new message that:
  * has a form for creating a new form
  * submits that form to your server to save the new message in your MongoDB database
* A show view for a message that:
  * Shows the message body and author

### When you are finished
Commit your work, push to GitHub and make a Pull Request.
