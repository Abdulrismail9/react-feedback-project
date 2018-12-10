const express = require('express');
const router = express();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    let responses = req.body;
    console.log('POST req receieved:', req.body);
    let queryText = `INSERT INTO "feedback" ( "feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [responses.pageUno, responses.pageDos, responses.pageTres, responses.pageQuatro])
        .then(result => {
            // send back results
            res.sendStatus(204);
        }).catch((error) => {
            console.log('error in POST', error);
            res.sendStatus(500);
        })
})

module.exports = router;