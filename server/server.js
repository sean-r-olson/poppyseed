const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ------------ IMPORT ROUTES ------------ */
const homeRouter = require('./routes/home.router.js');
const workRouter = require('./routers/work.router.js');
const eventsRouter = require('./routes/events.router.js');
const aboutRouter = require('./routes/about.router.js');
const contactRouter = require('./routes/contact.router.js');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/home', homeRouter);
app.use('/work', workRouter);
app.use('/events', eventsRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});