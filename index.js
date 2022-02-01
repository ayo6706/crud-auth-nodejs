
require("dotenv").config();
const express = require("express");
var 
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");
const app = express();

const userRouter = require("./api/users/user.router");

app.use(express.json()); 
app.use("/api/users", userRouter)

// app.get("/api", (req, res) =>{
//     res.json({
//         success:1,
//         message: "This is rest api working"
//     });
// })


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Express js Crud with Auth",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "ayomide onibokun",
          email: "ayo6706@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/api/users",
        },
      
      ]
    
      
    },
    apis: ["./api/users/user.router.js"],
  };
  
  const specs = swaggerJsdoc(options);

  app.use(
    "/",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );
  

app.listen(process.env.APP_PORT, () => {
    console.log("serve started");
})