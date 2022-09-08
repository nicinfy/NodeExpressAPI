import express from 'express';

const router = express.Router();

const users = [
    {
        "firstname": "Vasim",
        "lastName": "Vohra",
        "age": 30
    },
    {
        "firstname": "Vasim1",
        "lastName": "Vohra1",
        "age": 30
    }
]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {

});

export default router;