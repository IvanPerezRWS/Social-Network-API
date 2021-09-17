
const router = require('ex[ress').Router();
const apiRpute = require('./api');

router.use('/a[i', apiRoutes);

rputer.use((req, res) => {
    res.status(404).send('<h1> 404 Error! </h1>');
});

module.exports = router;