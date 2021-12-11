const { response } = require('express');
const express = require('express');
//const cors = require('cors');
//const routes = require('./src/routes');

const app = express();

//app.use(express.json());
//app.use(cors());
//app.use(routes);

app.get('/',(request, response) => {
    return response.json({
        event: 'hello Augusto'
    });
});

app.listen(3333);
