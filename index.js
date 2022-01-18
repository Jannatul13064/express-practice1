const express = require('express');
const cors = require('cors');
const app = express()
app.use(cors());
app.use(express.json());

const port = 5000;



const users = [
    { id: '0', name: 'Sarowar Jahan', email: 'sarowar937@gmail.com', age: '23' },
    { id: '1', name: 'Dragon Ballz', email: 'dragon@gmail.com', age: '23' },
    { id: '2', name: 'Taylor Swift', email: 'taylor@gmail.com', age: '23' },
    { id: '3', name: 'Ketty Perry', email: 'ketty@gmail.com', age: '23' },
    { id: '4', name: 'Kolmilota', email: 'kolmilota@gmail.com', age: '23' },
    { id: '5', name: 'Ahona Zaman', email: 'ahona@gmail.com', age: '23' },
    { id: '6', name: 'Samiha Rahman', email: 'samiha@gmail.com', age: '23' },
]
app.get('/', (req, res) => {
    res.send('Hello Node')
})

app.get('/users', (req, res) => {
    const search = req.query.search;  ///Search Query
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

//Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'fazli']);
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('Yammy');
})
///Post API
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting my post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})
app.listen(port, () => {
    console.log('Hitting my Server', port);
})