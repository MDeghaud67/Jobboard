const app = require('./app');
const db = require("./models");


db.sequelize.authenticate().then(_ => {
  console.log("Connected to database");
}).catch(err => {
  throw err;
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});