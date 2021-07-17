// packages
import { useState } from 'react';
// components
import Project from './project';
import Media from './media';
import { Container, Typography } from '../ui';
// data
import moreProjectsData from '../../../data/more-projects';

function MoreWork(): JSX.Element {
  const [activeProjectIndexState, setActiveProjectIndex] = useState<number>(-1);

  return (
    <section className='pt-14 pb-20'>
      <Container className='flex lg:flex-row flex-col'>
        <div className='lg:w-1/2 lg:mb-0 mb-10'>
          <Typography
            as='h2'
            className='xs:text-8xl text-22vw font-black fill-color pb-1'
            resetStyles>
            More <br /> &nbsp;&nbsp;&nbsp;Work
          </Typography>
        </div>

        <div className='lg:w-1/2'>
          <Typography className='text-xl pb-10' resetStyles>
            Some more of the projects I&apos;ve developed and designed in the
            past.
          </Typography>

          {moreProjectsData.map(({ srcName, title }, index) => {
            const isActive = index === activeProjectIndexState;

            return (
              isActive && (
                <Media
                  key={title}
                  src={srcName}
                  title={title}
                  active={isActive}
                />
              )
            );
          })}

          <div className='z-10 relative'>
            {moreProjectsData.map((project, index) => (
              <Project
                key={project.title}
                index={index}
                setActiveIndex={setActiveProjectIndex}
                {...project}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default MoreWork;
