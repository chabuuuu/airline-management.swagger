const express = require('express')
const app = express()
const swaggerJsdoc = require("swagger-jsdoc")
const  swaggerUi = require("swagger-ui-express")
const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Airline management API Documentation",
        version: "0.1.0",
        description:
          "This is airline manageement   CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Thinh Ha",
          email: "haphuthinh332004@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/api/v1",
        },
      ],
    },
    apis: ["./swagger.yml"],
  };
  
const specs = swaggerJsdoc(options);

app.use(
    `/api-docs`,
    swaggerUi.serve,
    swaggerUi.setup(specs,  { explorer: true })
  );

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})