import React from "react";

//images
import fakestore from "../img/fakestore-react.png";
import todo from "../img/todo-react.png";
import myLink from "../img/MyLink-app.png";
import productcard from "../img/productcard-html-css.png";
import pokedex from "../img/pokedex.png";
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
];

const Projects = () => {
  return (
    <div className=" bg-slate-200 my-5 px-4">
      <h3 className=" text-lg font-semibold text-center">My Projects 💻</h3>
      <p className="text-center">
        Take a look to my projects, you will find a link to the GitHub
        repository and to te Hosting deploy 👇🏼
      </p>
      <div className="flex flex-wrap justify-around m-4">
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
