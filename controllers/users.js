import {v4 as uuidv4} from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;

    //const userdId = uuidv4();
    //const userWithId = { ...user, id:uuidv4() };
    
    users.push({ ...user, id:uuidv4() });

    res.send(`user with name ${user.firstname} added!`);

    // This will print in postman response screen, so if you want to test and print value then do this.
    //res.send("Post called")
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUserById = (req, res) => {
    //const id = req.params.id;
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`user with id ${id} deleted!`);

}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.firstName = lastName;
    }

    if(age){
        user.firstName = age;
    }

    res.send(`user has updated ${id}`);
}