const express = require("express");

const app = express();

app.use(express.json());

// app.get("/projects", (request, response) => {
//   return response.send("Hello Growdev!");
// });

const projects = [];

app.get("/projects", (request, response) => {
  // const { title, owner } = request.query;

  // console.log(title);
  // console.log(owner);
  // console.log(request.query);

  return response.json(["Projeto 1", "Projeto 2"]);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const projects = { title, owner };

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
