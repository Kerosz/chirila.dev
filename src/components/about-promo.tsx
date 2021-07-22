// components
import { Container, Link, Typography } from '~ui/index';

export interface IAboutPromo {}

function AboutPromo(): JSX.Element {
  return (
    <section className='py-20 relative z-10 bg-gray-100'>
      <Container className='flex flex-col items-center'>
        <Typography
          className='max-w-xl w-full text-gray-800 text-center sm:text-[1.9rem] text-2xl leading-10 pb-12'
          resetStyles>
          Web developer and life long curiosity seeker, my addiction is
          combining functionality, interaction and design adapted to fit
          user&apos;s needs and create memorable experiences.
        </Typography>
        <Link
          href='/about'
          className='w-36 h-36 rounded-full bg-black text-gray-50 flex items-center justify-center hover:bg-red-800 hover:text-black hover:-rotate-12 transition-all duration-200 font-medium'>
          About me
        </Link>
      </Container>
    </section>
  );
}

export default AboutPromo;
