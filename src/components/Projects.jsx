import React from "react";

//images
import fakestore from "../img/fakestore-react.png";
import todo from "../img/todo-react.png";
import myLink from "../img/MyLink-app.png";
import productcard from "../img/productcard-html-css.png";
import pokedex from "../img/pokedex.png";
import citasveterinario from "../img/citasveterinario.png";
import controlGastos from "../img/control-gastos.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "FakeStore-app",
    img: fakestore,
    gitHub: "https://github.com/FrancoVacc/FakeStoreApp-react-tailwind",
    deploy: "netlify",
    deployLink: "https://fakestoreapp-react.netlify.app/",
  },
  {
    name: "Todo-App",
    img: todo,
    gitHub: "https://github.com/FrancoVacc/vite-sass-todo-app",
    deploy: "netlify",
    deployLink: "https://vite-sass-todo-app.netlify.app/",
  },
  {
    name: "MyLink-app",
    img: myLink,
    gitHub: "https://github.com/FrancoVacc/ShortUrl-app-react-firebase",
    deploy: "firebase",
    deployLink: "https://react-firebase-a686e.web.app/login",
  },
  {
    name: "Product-Card",
    img: productcard,
    gitHub:
      "https://github.com/FrancoVacc/product-preview-card-frontend-mentor",
    deploy: "netlify",
    deployLink: "https://product-preview-card-fv.netlify.app/",
  },
  {
    name: "Poke-app-pokedex",
    img: pokedex,
    gitHub: "https://github.com/FrancoVacc/Poke-app-react-redux",
    deploy: "netlify",
    deployLink: "https://poke-app-pokedex.netlify.app/",
  },
  {
    name: "Citas Veterinario (ES)",
    img: citasveterinario,
    gitHub: "https://github.com/FrancoVacc/citas-vet",
    deploy: "netlify",
    deployLink: "https://citas-vet-react-tailwind.netlify.app/",
  },
  {
    name: "Control de Gastos (ES)",
    img: controlGastos,
    gitHub: "https://github.com/FrancoVacc/control-presupuesto",
    deploy: "netlify",
    deployLink: "https://controlador-de-gastos-react.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className=" my-5 px-4">
      <h3 className=" text-3xl font-semibold text-center text-slate-900">
        My Projects 💻
      </h3>
      <p className="text-center font-semibold text-slate-900">
        Take a look to my projects, you will find a link to the GitHub
        repository and to te Hosting deploy 👇🏼
      </p>
      <div className="flex flex-wrap justify-around m-4 md:p-10">
        {projects.map((project) => (
          <div key={project.name}>
            <ProjectCard object={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
