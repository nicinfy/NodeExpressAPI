import express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = express.Router();

const users = [
    // {
    //     "firstname": "Vasim",
    //     "lastName": "Vohra",
    //     "age": 30
    // },
    // {
    //     "firstname": "Vasim1",
    //     "lastName": "Vohra1",
    //     "age": 30
    // }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    //const userdId = uuidv4();
    //const userWithId = { ...user, id:uuidv4() };
    
    users.push({ ...user, id:uuidv4() });

    res.send(`user with name ${user.firstname} added!`);


    // This will print in postman response screen, so if you want to test and print value then do this.
    //res.send("Post called")

});

router.get('/:id', (req, res) => {
    //const id = req.params.id;
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
});

router.delete()

export default router;