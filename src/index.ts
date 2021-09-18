import "reflect-metadata";

import { createConnection } from "typeorm";

createConnection()
  .then(function callBack(connection) {
    console.log("Conexão com o banco de dados estabelecida");
  })
  .catch(function (error) {
    console.log(error);
    console.log("Erro ao conectar ao banco de dados");
  });
