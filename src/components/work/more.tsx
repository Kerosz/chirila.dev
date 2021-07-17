// components
import ArrowNarrowRight from '../../assets/icons/arrow-narrow-right';
import { Container, Typography, Link } from '../ui';
// data
import moreProjectsData from '../../../data/more-projects';

function MoreWork(): JSX.Element {
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

          {moreProjectsData.map((project) => {
            return (
              <Link
                href={project.link}
                key={project.title}
                external
                className='group'>
                <header className='flex justify-between mb-1 mt-10'>
                  <Typography
                    className='xs:text-4xl text-3xl font-serif'
                    resetStyles>
                    {project.title}
                  </Typography>
                  <ArrowNarrowRight
                    className='w-9 -mt-1.5 group-hover:-rotate-45 transition-all duration-200'
                    strokeWidth={1}
                  />
                </header>
                <div className='pb-10 border-b border-gray-300'>
                  {project.tags.map((tag, index) => (
                    <span key={tag} className='text-sm pr-2 text-gray-500'>
                      {index !== 0 && <span className='pr-2'>⦿</span>}
                      {tag}
                    </span>
                  ))}

                  <Typography className='mt-5 text-gray-800' resetStyles>
                    {project.summary}
                  </Typography>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default MoreWork;
