router.get("/", (req, res) => {
    res.send("notes/ GET -> INDEX");
  });

  router.post("/", (req, res) => {
    res.send("notes/ POST -> CREATE");
  });