import React from "react";
import { Card } from "react-bootstrap";

const githubUser = "https://github.com/MichaelW1996/";
const projects = [
  {
    id: 0,
    name: "Wizdumb",
    repo: "Wizdumb",
    desc: "MERN stack & GraphQL app to share educational resources",
    url: "https://wizdumb-app-a832fc305640.herokuapp.com/",
  },
  {
    id: 1,
    name: "Ludicrous Display",
    repo: "projectLudicrousDisplay",
    desc: "Front end app using 3rd Party API's for Football scores and trivia",
    url: "https://philiptart.github.io/projectLudicrousDisplay",
  },
  {
    id: 2,
    name: "Attendme",
    repo: "AttendMe",
    desc: "Event planner with Homemade REST API for guestlist management",
    url: "https://attend-me-proj2.herokuapp.com/",
  },
  {
    id: 3,
    name: "EnigmaGram",
    repo: "EnigmaGram",
    desc: "Coming soon - A messaging app where you do the encryption yourself",
    url: "https://www.tnmoc.org/bh-2-the-enigma-machine",
  },
  {
    id: 4,
    name: "One More Social Network",
    repo: "onemoresocialnetwork",
    desc: "Social network backend using MongoDB ",
    url: "https://drive.google.com/file/d/1kEFaleLZApCdlf-LZ2jZRXZm4rG_JkEk/view",
  },
  {
    id: 5,
    name: "NotionButWorse",
    repo: "notionbutworse",
    desc: "Note taker, Uses Express.JS & stores in a JSON file",
    url: "https://radiant-beyond-76665-ebe8b3d12b2c.herokuapp.com/",
  },
  {
    id: 6,
    name: "DayPlanner",
    repo: "dayplanner",
    desc: "A simple workday planner using local storage",
    url: "https://michaelw1996.github.io/Week_planner/",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly mx-2">
      {projects.map((project) => {
        const imagePath =
          process.env.PUBLIC_URL + `/assets/${project.repo}.jpg`;
        return (
          <Card key={project.id} className="md:w-[45vw] md:h-[33vw] mb-5">
            <Card.Body className="md:absolute mx-[2.5%] md:mt-[15%] lg:mt-[20%] md:w-[40vw] bg-slate-200 rounded-xl p-2">
              <Card.Title className="text-2xl">{project.name}</Card.Title>
              <Card.Text className="">{project.desc}</Card.Text>
              <div className="flex justify-between m-2">
              <Card.Link href={githubUser + project.repo} className="ProjectGH">GitHub</Card.Link>
              <Card.Link href={project.url} className="ProjectLD">Live Demo</Card.Link></div>
            </Card.Body>
            <Card.Img variant="top" src={imagePath} className="rounded-3xl md:w-[45vw] w-[95vw] md:h-[33vw] h-[70vw]"/>
          </Card>
        );
      })}
    </div>
  );
}
