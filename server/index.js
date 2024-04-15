const server = require("./src/server");
const { sequelize } = require("./src/db.js");
require("dotenv").config();
require("./src/models/User.js");
require("./src/models/PQR.js");

const PORT = 3001;

sequelize
  .sync({ force: false })
  .then(async () => {
    // Inicia el servidor
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error.message));
