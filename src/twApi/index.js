const express = require('express');
const app = express();
const headlines = require('./headlines');

app.get('/headlines', function(req, res) {
    headlines().then(function(headlines) {
        res.json(headlines);
    }).catch(function() {
        res.sendStatus(500);
    });
});

app.listen(8080, () => console.log(`I'm listening`));
