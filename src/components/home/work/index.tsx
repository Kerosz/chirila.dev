// components
import Project from './project';
import FadeIntoView from '~animations/fade-into-view';
import { Container, Typography } from '~ui/index';
// utils
import projectData from '~data/home/projects';

export default function Work(): JSX.Element {
  return (
    <section className='bg-gray-100 py-20 relative z-10'>
      <FadeIntoView as={Container}>
        <Typography
          as='h2'
          className='text-right xs:text-8xl text-22vw font-black fill-color pb-7'
          resetStyles>
          Case Studies <br /> & Work
        </Typography>
        {projectData.map((project, index) => (
          <Project
            key={project.title + '__' + index}
            index={index + 1}
            {...project}
          />
        ))}
      </FadeIntoView>
    </section>
  );
}
