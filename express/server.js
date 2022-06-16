// "use strict";
// const express = require("express");
// const path = require("path");
// const serverless = require("serverless-http");
// const app = express();
// const bodyParser = require("body-parser");
// const axios = require("axios");
// const cors = require("cors");

// const router = express.Router();
// router.get("/a", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Hello from Express.js! hi hi hi</h1>");
//   res.end();
// });


// router.get("/another", (req, res) => res.send(
//   "<h2>Moin<h2>"));

//   router.get("/api/movie", (req, res) => {

//        axios.get('https://i-coders-name.herokuapp.com/namelist')
//     .then(movie => res.json(movie.data))
// })


// router.post("/", (req, res) => res.json({ postBody: req.body }));

// app.use(bodyParser.json());
// app.use(cors());

// app.use("/.netlify/functions/server", router); // path must route to lambda

// app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../dist/index.html")));




// module.exports = app;
// module.exports.handler = serverless(app);



// Imports
const express = require('express')
const axios = require("axios");
const fetch = require("node-fetch-commonjs");
// const fetch = require("node-fetch");
const cors = require("cors");
// const { json } = require('body-parser');
const app = express()
const port = 2000
app.use(cors());



// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})

app.get('/about', (req, res) => {
  async function fetchNames() { 
  const response = await fetch('https://i-coders-name.herokuapp.com/namelist');
const json = await response.json();
console.log("here", json[0].adjective);
// res.json(json);
res.json({ text: `${json[0].adjective}`}
)};
fetchNames();
}
  // .then(datares => res.json(datares.data))
  // .then(data => console.log(data))
    // res.render({ text: `${response.data}`}))


  // res.render('about', { text: 'moin'})
)

// app.get('/about', (req, res) => {
//   // axios.get('https://i-coders-name.herokuapp.com/namelist')
//   //     .then(movie =>
//          res.render({ text: 
//         // `${movie.data}`
//       "helo"
//       })
      // )
    // })
  // res.render('about', { text: 'About Page'})
// })


//  Listen on port 2000
app.listen(port, () => console.info(`Listening on port ${port}`))
