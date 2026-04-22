//import express framework
const express = require('express')
const app = express();
const PORT = 3000;


/*
midleware, in this context, is a function that execute during the request-response cycle to
facilitates communication between different software components
*/
//midleware to parse json
app.use(express.json());

//some data
let users = [{id:1,name:'Leon',email:'leon@mail.com'},{id:2,name:'Ashley',email:'ashley@mail.com'}];

//  route: /users

//GET all users
app.get('/users',(req,res)=>{
    res.json(users);
})


//GET a single user by id
app.get('/users/:id',(req,res)=>{
    const user = users.find(u=>u.id===parseInt(req.params.id));//req.params.id is a string value, so we need to parse them to int
    if(user){
        res.json(user);
    }else{
        res.status(404).json(
            {
                message:'User not found'
            }
        );   
    }
});


//POST a new user
app.get('/users/:id',(req,res)=>{
    const newUser = {id:users.length+1, ...req.body} //id: array size + 1,unpack everything that came from the client( in that case: name, email)
    users.push(newUser);
    res.status(201).json(newUser);
});

//PUT to update a user
app.put('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    Object.assign(user, req.body); // update user properties
    res.json(user);
  } else {
    res.status(404).json(
        {
            message: 'User not found'
        }
    );
  }
});

//DELETE a user
app.get('/users/:id',(req,res)=>{
    const user = users.find(u => u.id === parseInt(req.params.id)); 
    if(userIndex !== -1){
        users.splice(userIndex,1); //remove user from users array
        res.status(204).send(); //no content response
    }else{
        res.status(404).json(
            {
                message: 'User not found'
            }
        );
    }
});


//listening the app in port 3000
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});

//we can test the API with curl