const express = require('express');
const cors = require('cors');
require('./conf');

const app = express();
app.use(express.json());
app.use(cors());
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Server is running',
  });
});

app.use('/api', require('./routes'));

app.listen(5000, () => console.log('Server is up and running'));
