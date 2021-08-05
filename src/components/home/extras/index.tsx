// packages
import { useState } from 'react';
// components
import Project from './project';
import Media from './media';
import { Container, Typography } from '~ui/index';
// data
import extrasData from '~data/home/extras';

export default function Extras(): JSX.Element {
  const [activeProjectIndexState, setActiveProjectIndex] = useState<number>(-1);

  return (
    <section className='pt-12 pb-20 bg-gray-100'>
      <Container className='flex lg:flex-row flex-col'>
        <div className='xl:w-2/5 lg:w-[45%] lg:mb-0 mb-10'>
          <Typography
            as='h2'
            className='xs:text-9xl lg:text-[7.2rem] xl:text-9xl text-22vw font-black fill-color pb-1 relative z-10'
            resetStyles>
            Extras
          </Typography>
        </div>

        <div className='xl:w-3/5 lg:w-[55%] lg:pl-6 lg:pt-3'>
          <Typography className='text-xl pb-10 relative z-10' resetStyles>
            Some more of the projects I&apos;ve developed and designed in the
            past.
          </Typography>

          <div className='fixed top-0 left-0 w-full h-full z-0'>
            {extrasData.map(({ srcName, title }, index) => {
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
            {extrasData.map((project, index) => (
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
