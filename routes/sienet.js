var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
let parser = bodyParser.urlencoded({ extended: true});
const sieni = require('../dbhandling/sienidb');

router.route('')
.get((req, res, next) => {
    console.log('Täällä')
    sieni.getSienet(result => {
        res.json(result)
    })  
})
.post((req, res) => {
    sieni.createSieni(req, result => {
        console.log(req.body)
        res.json(result).
        status(201).end();
    })
})

router.route('/:id')
.get((req, res) => {
    sieni.getSieniById(req, result => {
            res.json(result);
    })
})
.delete((req, res) => {
    sieni.deleteSieni(req, result => {
        res.status(201).end();
    })
})
.put((req, res) => {
    sieni.updateSieni(req, result => {
        res.send(result);
    })
    console.log(req.body)

})


module.exports = router;
