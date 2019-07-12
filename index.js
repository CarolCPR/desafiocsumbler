const express = require('express');
const app = express();
const port = 3000;

var requestTime = (req, res, next) => {
  req.requestTime = new Date();
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  var hora = req.requestTime.getHours();
  var min = req.requestTime.getMinutes();
  var responseText = `<h1>Hello World!</h1>`;
  responseText += `AGORA SÃO: ` + hora + ':' + min + '';
  res.send(responseText);
});

app.listen(port, () => console.log(`Mano Example app listening on port ${port}!`));