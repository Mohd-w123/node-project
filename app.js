const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello wazid! Welcome to homepage')

});

app.listen(3000, () => {
    console.log('Hey! wazid here');
});
