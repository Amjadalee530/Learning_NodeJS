let express = require('express');
let bodyParser = require('body-parser');

let promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
    .all((req, res, next) =>{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get((req, res, next) =>{
        res.end('Will send all the promotions to you!');
    })

    .post((req, res, next) =>{
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete((req, res, next) =>{
        res.end('Deleting all promotions');
    });

promoRouter.route('/:promoId')
    .all((req, res, next) =>{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        next();
    })

    .get((req, res, next) =>{
        res.end('Will send details of the promotion: ' + req.params.promoId + ' to you!');
    })

    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /promotion/'+ req.params.promoId);
    })

    .put((req, res, next) =>{
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.end('Will update the promotion: ' + req.body.name +
            ' with details: ' + req.body.description);
    })

    .delete((req, res, next) =>{
        res.end('Deleting promotion: ' + req.params.promoId);
    });

exports.router = promoRouter;