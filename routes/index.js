var express = require('express');
var router = express.Router();
var {models} = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'P5_Quiz' });
});

//GET Credits
router.get('/credits', function(req, res, next) {
    res.render('credits');
});

//GET quizzes
router.get('/quizzes', function(req, res, next) {
    let quizzes = [];
    let n =0;
    models.quiz.findAll()
        .each(quiz=>{

            quizzes[n]=quiz;
            n++

        })
        .then(() =>{
            res.render('quizzes',{quizzes: quizzes});
        })


});


module.exports = router;
