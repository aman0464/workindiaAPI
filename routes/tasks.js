var express = require('express');
var bodyparser = require('body-parser');
var Tasks = require('../models/tasks');

var taskRouter = express();
taskRouter.use(bodyparser.json());

taskRouter.route('/')
    .get((req,res,next) => {
        Tasks.find({})
            .then((tasks) => {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(tasks);
            },(err) => next(err))
            .catch((err) => next(err));
    })
    .post((req,res,next) => {
        Tasks.create(req.body)
            .then((task) => {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.json(task);
            },(err) => next(err))
            .catch((err) => next(err));
    });


module.exports = taskRouter;