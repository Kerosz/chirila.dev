// packages
import { useRef } from 'react';
// components
import Project from './project';
// utils
import projectData from '../../../data/projects';

function Work(): JSX.Element {
  return (
    <section className='bg-gray-100'>
      {projectData.map((project, index) => (
        <Project
          key={project.title + '__' + index}
          number={index + 1}
          {...project}
        />
      ))}
    </section>
  );
}

export default Work;
