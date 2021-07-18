// packages
import { useRef } from 'react';
// components
import Project from './project';
import { Container, Typography } from '../ui';
// utils
import projectData from '../../../data/projects';

function Work(): JSX.Element {
  return (
    <section className='bg-gray-50 py-20 relative z-10'>
      <Container>
        <Typography
          as='h2'
          className='text-right xs:text-8xl text-22vw font-black fill-color pb-5'
          resetStyles>
          Case Studies <br /> & Projects
        </Typography>
        {projectData.map((project, index) => (
          <Project
            key={project.title + '__' + index}
            index={index + 1}
            {...project}
          />
        ))}
      </Container>
    </section>
  );
}

export default Work;
