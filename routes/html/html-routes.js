const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/user-list.html'));
});

router.get('/add-user', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/add-user.html'));
});

router.get('/single-user', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/single-user.html'));
});