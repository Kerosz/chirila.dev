// components
import Link from '~components/common/link';
import FadeIntoView from '~animations/fade-into-view';
import { Container, Typography } from '~ui/index';

export interface IWorkInProgress {
  title?: string;
  description?: string;
}

function WorkInProgress({
  title = 'FEATURE',
  description = 'Under development',
}: IWorkInProgress): JSX.Element {
  return (
    <section className='h-[75vh] w-full relative z-10 py-20 bg-gray-100'>
      <FadeIntoView
        as={Container}
        className='flex flex-col h-full justify-center items-center'>
        <Typography
          as='h1'
          className='font-black text-5xl text-center fill-color pb-12'
          resetStyles>
          {title} – {description}
        </Typography>
        <Link
          href='/'
          className='w-28 h-28 rounded-full bg-black text-gray-50 flex items-center justify-center hover:bg-red-800 hover:text-black hover:-rotate-12 transition-all duration-200 font-medium'>
          To Home
        </Link>
      </FadeIntoView>
    </section>
  );
}

export default WorkInProgress;
