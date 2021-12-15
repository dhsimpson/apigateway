const express = require("express");
const app = express();
const cors = require('cors');
const port = 10000;
const rootRouter = express.Router();
// const accessRouter = require("./routes/access");

// config api gateway urls 
const {ROUTES} = require('./middleware/routes');
const {setupProxies} = require('./middleware/proxy');
setupProxies(app, ROUTES);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
// app.use('/user', rootRouter);
// rootRouter.use('/access', accessRouter);

app.listen(port, () => {
    console.log(`api gateway server is listening at http://localhost:${port}`);
});