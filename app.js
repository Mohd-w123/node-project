const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello wazid! Welcome to homepage')

});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('Hey! wazid here');
});
