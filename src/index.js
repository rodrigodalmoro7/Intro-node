const express = require("express");

const app = express();

// app.get("/projects", (request, response) => {
//   return response.send("Hello Growdev!");
// });

app.get("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto 1", "Projeto 2", "projeto 3"]);
});

// http://localhost:3333/projects/2
app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto 4", "Projeto 2", "projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "projeto 3"]);
});

const port = 3334;
app.listen(3334, () => {
  console.log(`Back-end started! Up on PORT ${port}`);
});
