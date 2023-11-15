const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require("path");
const getChannels = require('./worker/getChannels');
const cors = require("cors")
const port = process.env.PORT || 8080;
// app.get('/', function(req, res) {
//   res.sendFile('index.html', { root: path.join(__dirname, "./pages" )})
// });
app.use(cors())

app.get('/api/v1/getChannels', (req, res) => {
  getChannels().then(data => {
    res.send(data)
  })
})

app.get('/js/channels.js', (req, res) => {
  res.sendFile('channels.js', { root: path.join(__dirname, "./js" )})
})
server.listen(port, "192.168.86.235");