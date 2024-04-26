
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { myLoginAPI } = require('./LoginAPI');
const { OpenApiValidator } = require('express-openapi-validate');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

const validator = new OpenApiValidator(myLoginAPI)

app.get('/openapi.json', (req, res) => {
  res.json(myLoginAPI);
});

app.post('/login', validator.validate('post', '/login'), (req, res) => {
  console.log(req.body)
  res.status(200).json({
    message: "Welcome",
    id: 12
  })
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(myLoginAPI));

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json(err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
