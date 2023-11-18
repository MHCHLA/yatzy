const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/roll-dices', (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.json({ diceValue });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});