import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'note-taker',
      description: 'Javascript/PWA',
      link: "https://emhat1.github.io/PWA_NoteTaker/",
      repo: "https://pwa-note-taker.herokuapp.com/"
    },
    {
      name: 'find-a-pet',
      description: 'Full Stack Development',
      link: "https://stormy-anchorage-52853.herokuapp.com/",
      repo: "https://github.com/emhat1/find-a-pet"
    },
    {
      name: 'go-to-your-movie',
      description: 'HTML/CSS',
      link: "https://black-mandarin.github.io/Go-to-your-Movie/",
      repo: "https://github.com/emhat1/Go-to-your-Movie"
    },
    {
      name: 'workday-scheduler',
      description: 'HTML/CSS/Javascript',
      link: "https://emhat1.github.io/Homework-w05/",
      repo: "https://github.com/emhat1/Homework-w05"
    },
    {
      name: 'searchable-weather-dashboard',
      description: 'HTML/CSS/API',
      link: "https://emhat1.github.io/Homework-w06/",
      repo: "https://github.com/emhat1/Homework-w06"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
