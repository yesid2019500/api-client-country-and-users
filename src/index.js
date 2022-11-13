const express = require('express');
const cors = require('cors')
const app = express();
const { connectDB  } = require('./database/db')

connectDB()

// middleware
app.use(cors())
app.use(express.json())

app.use('/api/user',require('./routes/users') )
app.use('/api/pais',require('./routes/pais') )

app.listen( process.env.PORT || 4000 , ()=> {
    console.log( `SERVER RUNNING ON PORT 4000 o ${process.env.PORT}`);
})