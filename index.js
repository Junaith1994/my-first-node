const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'Junaith Bin Elias Khan', email: 'junaith@gmail.com', phone: "01627676315" },
    { id: 2, name: 'Sonia', email: 'sonia@gmail.com', phone: "01852387005" },
    { id: 3, name: 'Mizanur Rahman Mizan', email: 'mizan@gmail.com', phone: "01833289482" },
    { id: 4, name: 'Abdul Wasay', email: 'wasay@gmail.com', phone: "018277287821" },
    { id: 5, name: 'Nasrin Chy', email: 'nasrin@gmail.com', phone: "01913422055" },
]

app.get('/', (req, res) => {
    res.send("I can update Node with nodemon")
})

app.get('/users', (req, res) => {
    const search = req.query.name.toLowerCase();

    if (search) {
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
})

app.post('/user', (req, res) => {
    console.log("Request", req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(!user ? 'No user found' : user);
})

app.listen(port, () => {
    console.log("Listening to port :", port);
})