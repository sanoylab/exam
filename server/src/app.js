const express = require('express');
const cors = require('cors');

require('./db/connection');

const router =  require('./routers/index');
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api/v1', router);

app.use(errors.notFound);
app.use(errors.errorHandler);

app.listen(process.env.PORT, ()=>{
    console.log(`Server stated on ${process.env.PORT}`);
})