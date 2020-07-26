const express = require("express");
const { uuid } = require("uuidv4");

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

  return response.json(projects);
});

app.post("/projects", (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

// http://localhost:3333/projects/2
app.put("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return response.status(400).json({ error: "Project not found." });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex((project) => project.id === id);

  const project = {
    id,
    title,
    owner,
  };

  projects.splice(projectIndex, 1);

  return response.json(projects);
});

const port = 3334;
app.listen(3334, () => {
  console.log(`Back-end started! Up on PORT ${port}`);
});
