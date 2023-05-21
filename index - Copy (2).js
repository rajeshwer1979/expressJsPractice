const express = require('express'); // express js calling
const path = require('path');  // path calling

const logger = require('./middleware/logger');
const members = require('./Members'); // json file calling

const app = express();



//init middleware
// app.use(logger);

// app.get('/api/members', (req, res) => res.render(members));

//Cannot GET /
// app.get('/', (req, res) => {
//    // res.send('<h1>Hello World</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

//Get all members json file
app.get('/api/members', (req,res) => {
    res.json(members);
})

//Get single Number
app.get('/api/members/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`No memeber with the id of ${req.params.id}`});
    }
})

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// local host port 
const PORT = process.env.PORT || 5000;

//listen port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));