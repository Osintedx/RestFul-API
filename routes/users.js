import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = []

// all routes in here are starting with /users
router.get('/', (req, res) => {
    res.send(users);
});


router.post('/',(req, res) => {
   const user = req.body;

  const userWithID = ({ ...user, id: uuidv4() }); 

   users.push(userWithID);

    res.send(`User with the username ${user.Username} Has added DataStore`);
});



router.get('/:id', (req, res) => {
   const { id } = req.params;

   const foundUser = users.find((user) => user.id == id)

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id == id);

    res.send(`User with the ID ${id} has been deleted from the DataStore`);
});

router.patch('/:id,', (req, res) => {
    const { id } = req.params;

    const user = users.find(() => user.id == id);

// Change User name and other stuff.
    const { username, Password, age } = req.body;

      if(username) user.username = username;
     if(password) user.password = password;
    if(age) user.age = age;

    res.send(`User with the id ${id} Has been Updated`);


});

export default router;

// 48:53 