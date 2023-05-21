const express = require('express'); // express js calling
const path = require('path');  // path calling
// const moment = require('moment')  // moment calling
const members = require('./Members'); // json file calling

const app = express();

const logger = (req, res, next) => {
    // console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
   console.log('hello')
    next();
}

//init middleware
app.use(logger);

// app.get('/api/members', (req, res) => res.render(members));

//Cannot GET /
// app.get('/', (req, res) => {
//    // res.send('<h1>Hello World</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

app.get('/api/members', (req,res) => {
    res.json(members);
})

//Set static folder
 app.use(express.static(path.join(__dirname, 'public')));

// local host port 
const PORT = process.env.PORT || 5000;

//listen port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));