let express = require('express');
let bodyParser = require('body-parser');

let dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) =>{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get((req, res, next) =>{
        res.end('Will send all the dishes to you!');
    })

    .post((req, res, next) =>{
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete((req, res, next) =>{
        res.end('Deleting all dishes');
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get((req, res, next) =>{
        res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    })

    .put((req, res, next) =>{
        res.write('Updating the dish: ' + req.params.dishId + '\n');
        res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete((req, res, next) =>{
        res.end('Deleting dish: ' + req.params.dishId);
    });

exports.router = dishRouter;