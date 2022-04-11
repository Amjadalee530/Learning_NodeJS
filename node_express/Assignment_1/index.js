let express = require('express');
let morgan = require('morgan');
let dishRouter = require('./dishRouter');
let promoRouter = require('./promoRouter');
let leaderRouter = require('./leaderRouter');


let hostname = 'localhost';
let port = 3000;

let app = express();
app.use(morgan('dev'));


app.use('/dishes', dishRouter.router);
app.use('/promotions', promoRouter.router);
app.use('/leadership', leaderRouter.router);

app.use(express.static(__dirname + '/public'));
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});