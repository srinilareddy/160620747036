const express = require('express');
const numbersData = require('./numbersData');

const app = express();
const PORT = 8008;

app.get('/numbers/:type', (req, res) => {
  const { type } = req.params;
  const validTypes = Object.keys(numbersData);

  if (!validTypes.includes(type)) {
    return res.status(400).json({ error: 'Invalid number type' });
  }

  const numbers = numbersData[type];
  res.json({ numbers });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});