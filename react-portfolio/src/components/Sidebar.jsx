import React from "react";
import {Icon} from '@iconify/react'
import {Cards} from './index.js'

const Sidebar = () => {
  const languages = [{
    name:"MongoDB",icon: <Icon icon="simple-icons:mongodb" color="green" width="112" height="112" />
  },{
    name:"TailwindCSS",icon: <Icon icon="vscode-icons:file-type-tailwind" width="112" height="112" />
  },{
    name:"MySQL",icon: <Icon icon="logos:mysql"width="112" height="112" />
  },{
    name:"GraphQL",icon: <Icon icon="mdi:graphql" color="fuchsia" width="112" height="112" />
  },{
    name:"Express",icon: <Icon icon="logos:express" color="black" width="112" height="112" />
  },{
    name:"React",icon: <Icon icon="logos:react" width="112" height="112" />
  },{
    name:"Javascript",icon: <Icon icon="skill-icons:javascript" width="112" height="112" />
  },{
    name:"Git & Github",icon: <Icon icon="devicon:git" width="112" height="112" />
  },{
    name:"NodeJS",icon: <Icon icon="simple-icons:nodejs" width="112" height="112" />
  },{
    name:"CSS3",icon: <Icon icon="vscode-icons:file-type-css" width="112" height="112" />
  },{
    name:"HTML5",icon: <Icon icon="devicon:html5" width="112" height="112" />
  },{
    name:"Bootstrap CSS",icon: <Icon icon="logos:bootstrap" width="112" height="112" />
  }, {
    name:"Python",icon: <Icon icon="logos:python" width="112" height="112" />
  }, {
    name: "PHP", icon: <Icon icon="logos:php" width="112" height="112" />
  }
]
  return (
    <div className="md:w-[45vw] bg-slate-300 rounded-md p-2">
      <div>
        <h1 className="text-2xl">Skills</h1>
      </div>
      <div>
        <div>
          {languages.map((languages, index) => (
        <Cards key={index} icon={languages.icon} language={languages.name} />
      ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
