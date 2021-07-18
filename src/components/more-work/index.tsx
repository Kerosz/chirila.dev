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
            className='xs:text-9xl text-22vw font-black fill-color pb-1 relative z-10'
            resetStyles>
            More <br /> &nbsp;&nbsp;&nbsp;Work
          </Typography>
        </div>

        <div className='lg:w-1/2'>
          <Typography className='text-xl pb-10 relative z-10' resetStyles>
            Some more of the projects I&apos;ve developed and designed in the
            past.
          </Typography>

          <div className='fixed top-0 left-0 w-full h-full z-0'>
            {moreProjectsData.map(({ srcName, title }, index) => {
              const isActive = index === activeProjectIndexState;

              return (
                <Media
                  key={title}
                  src={srcName}
                  title={title}
                  active={isActive}
                />
              );
            })}
          </div>

          <div className='z-10 relative mix-blend-difference divide-y-2 divide-gray-800 flex flex-col'>
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
