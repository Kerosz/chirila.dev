import { Link, Typography } from './ui';
import Container from './ui/container';

export interface IAboutPromo {}

function AboutPromo(): JSX.Element {
  return (
    <section className='py-20'>
      <Container className='flex flex-col items-center'>
        <Typography
          className='max-w-screen-xs w-full text-gray-700 text-center sm:text-3xl text-2xl leading-9 pb-12'
          resetStyles>
          Web developer and life long curiosity seeker, my addiction is
          combining functionality, interaction and design adapted to fit
          user&apos;s needs and create memorable experiences.
        </Typography>
        <Link
          href='/about'
          className='w-28 h-28 rounded-full bg-black text-gray-50 flex items-center justify-center text-sm hover:bg-red-800 hover:text-black hover:-rotate-12 transition-all duration-200'>
          About me
        </Link>
      </Container>
    </section>
  );
}

export default AboutPromo;
