const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.get('/', (req, res) => {
    const user = {
        name: 'sally',
    }
    res.send(user)
})
app.get('/profile', (req, res) => {
    res.send("profile")
})
app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send("success");
})
app.listen(3000);