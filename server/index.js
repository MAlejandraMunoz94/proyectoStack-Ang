const server = require("./src/server");
const { conn } = require("./src/db.js");
require("dotenv").config();

const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    // Inicia el servidor
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
