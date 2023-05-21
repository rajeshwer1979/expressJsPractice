const express = require('express'); // express js calling
const path = require('path');   // path calling 
// const exphbs  = require('express-handlebars');
const logger = require('./middleware/logger');


const app = express();

//init middleware
// app.use(logger);
// const defaultLayout = exphbs.create({})

//Handlebars Middleware
// app.engine('handlebars', exphbs({defaultLayout:'main'}));
// app.set('view engine', 'handlebars');


//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Call json file
// app.get('/api/members', (req, res) => res.render(members));

//Cannot GET /
// app.get('/', (req, res) => {
//    // res.send('<h1>Hello World</h1>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });

//Homepage Route
// app.get('/', (req, res) => res.render('index', {
    // title: 'Memebr App'
// }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/members', require('./routes/api/members'));  // api/members is here not need to write in api js file

// local host port 
const PORT = process.env.PORT || 5000;

//listen port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));