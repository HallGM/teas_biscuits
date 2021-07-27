const express = require("express");
const app = express();
const cors = require("cors");
const createRouter = require("./helpers/create_router");

const teas = [
  { name: "Early Grey", brand: "Twinings", id: 1 },
  { name: "Irish Breakfast", brand: "Barry's Tea", id: 2 },
  { name: "Lemon and Ginger", brand: "Lipton", id: 3 },
  { name: "Rooibos", brand: "Tick Tock", id: 4 },
  { name: "Green", brand: "Clipper", id: 5 },
];

let teaCounter = 5;
let biscuitsCounter = 3;

const biscuits = [
  { name: "digestives", brand: "McVities", id: 1 },
  { name: "HobNobs", brand: "McVities", id: 2 },
  { name: "Shortbread", brand: "Walkers", id: 3 },
];

app.use(cors());
app.use(express.json());

const teasRouter = createRouter(teas, teaCounter);
app.use("/api/teas", teasRouter);

const biscuitsRouter = createRouter(biscuits, biscuitsCounter);
app.use("/api/biscuits", biscuitsRouter);

app.listen(5000, function () {
  console.log(`App running on port ${this.address().port}`);
});
