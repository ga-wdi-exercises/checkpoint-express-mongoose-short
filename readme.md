# Checkpoint: Express & Mongoose


## Before You Start

The test suite files are located in `./test`. To install everything you need to run the tests, run `npm install`.

To run the tests in the terminal use `npm test`. *Unlike* the angular checkpoint, this test will only run once. Everytime you make a change and save your files, the test will need to be re-run manually.

A few files already exist in this repo. Examine them before you begin. You'll need to decide based on the specification, whether they should be kept as is or changed in *any* way.

## Instructions

For this checkpoint you'll be taking on the role of **"The Fixer."** A previous developer was assigned to create a json api using Express and Mongoose, but left it (very) incomplete and quite a bit broken.

Your mission, **Fixer**, is to follow the below specification and complete the api. Luckily there's a full test suite already written to validate the api's functionality...apparently the previous dev couldn't figure that out.

Are you up to the challenge? I hope so, did I mention this is a checkpoint?

## Specification

- **Part 1**
  - Create our express server in an `index` file at the project root
  - Create `CRUD` routes for `Authors` via the `/authors` path (these just need to respond successfully to web requests for now).
  - Use `_id` to identify author objects in the url.
  - Make sure to start the server at port 4000
  - Export the express application's variable

- **Part 2**
  - Create a `connection` file in the db folder
  - Create a mongoose schema and model for `Author`
  - The `Author` model needs these properties:
    - name, a string
    - publisher, a string
    - age, an integer
    - active, a boolean

- **Part 3**
  - In the `index`, load the new `connection` file to access it's database variable
  - Add mongoose functionality to CRUD routes (for create and update, expect the author properties to be namespaced under `author`)
  - The CRUD routes must respond with json data and read json data (if any) from the client/browser


### When you are finished
Commit your work, push to GitHub and make a Pull Request.