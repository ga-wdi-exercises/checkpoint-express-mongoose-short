# Checkpoint: Express & Mongoose

## Set Up

Fork and clone this repository. After cloning down **your fork**...

```bash
 $ cd checkpoint-express-mongoose-short
 $ npm install
```

To run the tests in the terminal, run `npm test`.

- Every time you make a change and save your files, you will need to manually
  re-run the tests.
- When you start, all of the tests will be failing; your goal is to make as many
  pass as you can in the hour provided. There are 18 tests total.
- Read the output of the failing tests. It will tell you why the test failed.

> Note: The test suite is located in `./test`.

## Instructions

For this checkpoint, you need to build a simple application for tracking Notes.

### Requirements

1. There is already a `package.json` file with the dependencies necessary for
   running the tests. You will have to manually `npm install` everything else
   required to build your application server with Express and Mongoose.

2. Create a `controllers` directory. Inside `controllers`, create two files:
   `notes.js` and `users.js`.

3. Set up/build out express properly in your `index.js` file. Include the
   controllers later, once you've built them.

4. Create two models:

   A. `Note`, with three fields

   - `title`
   - `body`
   - a ref called `author` to `User`. A note will only be associated with a
     single user, so this should be a plain object.

   B. `User`, with three fields

   - `username`
   - `email`
   - a ref called `notes` to `Note`. This should be an array of objects.

5. You should have 5 routes. They should return JSON unless otherwise specified.

- `GET '/'` which should redirect to `/notes'
- `GET '/notes'` which return a list of notes
- `GET '/notes/:someParameter'` where `:someParameter` grabs a single `Note`
  from the database by id. **NOTE** You can name `:someParameter` whatever you
  want 😬
- `GET '/users'` which will return a list of all users
- `GET '/users/:someParameter` which will return a single user by id. **NOTE**
  see previous note.

**NOTES:**

- You can refer to previous lessons and notes that you have if you forget
  syntax.
- We've provided the necessary configuration for the database connection, some
  of the Model definition, and some of the basic express app boilerplate. Don't
  delete any of this! Your task is to add to what is provided.
- If your tests time-out, don't exit, try hitting `ctrl-c`.
- Pay attention to when you're returning single values versus multiple values.
  The tests will only pass for the appropriate types.
- You don't need to create any data in the database for the tests to pass.
- If something doesn't work, try reordering it.
- Test with postman!
- Do not modify the tests in `tests/index.js`!

## Submission

Fork this repository and clone your fork locally. Commit as you go. When you are
finished, push to GitHub.

**Wait until the end of the hour to make your Pull Request**
