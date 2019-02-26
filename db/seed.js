const Item = require("../models/index");

// Always start by deleting everything
Item.remove({}).then(function() {
  // Then create "seed" items
  
  Item.create({
    name: "Finish homework",
    description: "???",
    status: "Complete",
    priority: 3
  });
});
