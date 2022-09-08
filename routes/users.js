import express from 'express';

import { createUser, getUsers, getUserById, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// const users = [
//     // {
//     //     "firstname": "Vasim",
//     //     "lastName": "Vohra",
//     //     "age": 30
//     // },
//     // {
//     //     "firstname": "Vasim1",
//     //     "lastName": "Vohra1",
//     //     "age": 30
//     // }
// ]

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;