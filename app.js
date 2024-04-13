const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

// Set up middleware and other imports
const app = express();
app.use(morgan('combined'));

// Use dynamic import for chalk
import('chalk').then(chalk => {
    const port = 3000;

    app.get('/', (req, res) => {
        res.render('index', { username: "Woradet", customers: ["Woradet", "Woradet2"] });
    });

    app.listen(port, () => {
        debug("Listen on port " + chalk.default.red(port));
    });
}).catch(err => {
    console.error(err);
});
