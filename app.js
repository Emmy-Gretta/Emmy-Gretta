const express = require("express");
require("dotenv").config();
const app = express();
const url = require('url')

const PORT = process.env.PORT;

app.get("/addition", (req, res) => {
  let numbers = req.query.numbers.split(" ");
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === "") {
      numbers[i] = "0";
    }
  }

  numbers.forEach((num) => {
    sum += parseInt(num);
  });

  res.json({ sum: sum });
});

app.get("/multiplication", (req, res) => {
  let numbers = req.query.numbers.split(" ");

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === "") {
      numbers[i] = "0";
    }
  }

  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == "0") {
      continue;
    }

    product *= parseInt(numbers[i]);
  }

  console.log(product);

  res.json({ product: product });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
