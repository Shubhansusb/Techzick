const router = require('express').Router();

const mailer = require('./controller/mailer');

router.post('/submit', mailer);
module.exports = router;