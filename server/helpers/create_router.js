const express = require("express");

const createRouter = function (data, counter) {
  const router = express.Router();

  // INDEX
  router.get("/", (req, res) => {
    res.json(data);
  });

  // SHOW
  router.get("/:id", (req, res) => {
    const returnItem = data.find(item => item.id === req.params.id)
    res.json(returnItem);
  });

  // CREATE
  router.post("/", (req, res) => {
    const newData = req.body;
    counter++;
    newData.id = counter; 
    data.push(newData);
    res.json(data);
  });

  // DESTROY
  router.delete("/:id", (req, res) => {
    // console.log("item id: " + data[1].id, "request id: " + req.params.id )
    data = data.filter((item) => {
      return item.id !== parseInt(req.params.id)}
      )
    res.json(data);
  });

  // UPDATE
  router.put("/:id", (req, res) => {
    data[req.params.id - 1] = req.body;
    res.json(data);
  });

  return router;
};

module.exports = createRouter;
