// const express = require('express');
// const db = require('./config/db');

// const app = express()


// const PORT = 3001;

// app.get('/', (req,res)=> {
//     res.send("hello")
// });

// app.get('/', (req,res)=> {
//     db.query('INSERT INTO posts (title, post_text, user_name) VALUES ('a title', 'asdf', 'dustin')')
// });

// app.post('/api/create', (req,res)=> {
//     db.query('INSERT INTO posts (title, post_text, user_name) VALUES ()',(err,result)=> {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(result);
//         }
//     })
// });

// app.listen(PORT, ()=> {
//     console.log(`Server running on port ${PORT}`)
// });