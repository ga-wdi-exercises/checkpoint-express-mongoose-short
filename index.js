const express = require("express");
const app = express();
app.use("/notes", noteRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.redirect("/notes");
});
app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app
