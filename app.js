import express from "express";
const app = express();
export default app;
import router from ("./api/router.js")
app.use('/employees', router)

app.use(express.json());

app.route("/").get((req, res) => { 
  res.send("hello Employees!")
})

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Sorry! Something went wrong :(");
  });


// TODO: this file!
