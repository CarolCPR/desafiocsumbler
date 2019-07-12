const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    var requestTime =  new Date().toLocaleTimeString();
    var responseText = `<h1>Hello World!</h1>`;
    responseText += `AGORA SÃO: ` + requestTime + '';
    res.send(responseText);
  });

app.listen(port, () => console.log(`Mano Example app listening on port ${port}!`));