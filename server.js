import app from "#app";
import db from "#db/client";

await db.connect();


// import router from '/api/employees.js'
// app.use('/api/v1/', router)

app.get("/").get((req, res ) => {
  res.send('welcome to employees api')
})

app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    message: err.message || 'something went wrong'
  })
})


const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
