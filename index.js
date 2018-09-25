// partials can be used to complete this checkpoint, they are not required though. in order to use partials you can use hbs to register the partials directory
// partials have been provided in views/partials/


//the below routes can be used or changed as you see fit
app.get("/", (req, res) => {
 res.send('this should redirect to the /quests route')
})

app.get("/quests", (req, res) => {
  res.send('this should show all the quests')
})

app.get("/quest/:id", (req, res) => {
  res.send('this should show a single quest')
})


app.listen(3000, () => console.log('app is running'))

// DO NOT REMOVE THIS LINE:
module.exports = app

