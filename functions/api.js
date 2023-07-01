const express = require('express');
// running the API server using express
const app = express();
// initiating CORS 
const cors = require('cors');

const port = process.env.PORT || 5000;

// calling CORS function
app.use(cors());

app.get('/',(req, res) => {
    res.send('API running');
})
// calling nodemon
app.listen(port, () => {
    console.log('Base server is running at port 5000');
})


