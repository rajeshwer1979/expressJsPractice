const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members'); // json file calling

//Get all members json file
router.get('/', (req,res) => {
    res.json(members);
});

//Get single Number
router.get('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`No memeber with the id of ${req.params.id}`});
    }
});

// Post single memebers
router.post('/', (req,res) => {
   // res.send(req.body);
    const newMemebr = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if(!newMemebr.name || !newMemebr.email){
        return res.status(400).json({msg: 'Please inclue a name and email'})
    }

    members.push(newMemebr);
    // res.json(members);
    // res.redirect('/');
});


//Update single Number
router.put('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.name : member.email;
                
               res.json({ msg: 'Member updated', number});
            }
        });
    } else {
        res.status(400).json({msg:`No memeber with the id of ${req.params.id}`});
    }
});

//Delete single Number
router.delete('/:id', (req, res) => {
    //res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json({
            msg: 'Member dleted', 
        members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg:`No memeber with the id of ${req.params.id}`});
    }
});

module.exports = router;