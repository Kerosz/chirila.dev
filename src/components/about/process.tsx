// components
import FadeIntoView from '~animations/fade-into-view';
import Link from '~components/common/link';
import { Container, Typography } from '~ui/index';
// data
import aboutData from '~data/about';

export default function Process() {
  return (
    <section className='bg-black-tone text-gray-100 py-20'>
      <FadeIntoView
        as={Container}
        className='flex lg:flex-row flex-col-reverse'>
        <div className='lg:w-2/5 lg:mb-0'>
          <div className='border border-gray-700 rounded-lg sm:p-12 xs:p-8 p-6 text-gray-400 shadow-lg space-y-14'>
            {aboutData.secondSection.process.map(({ title, description }) => (
              <div key={title}>
                <Typography
                  as='h3'
                  className='font-bold pb-4 text-4xl text-gray-200 xl:pr-12'
                  resetStyles>
                  {title}
                </Typography>
                <Typography
                  className='font-serif leading-8 xl:pr-5'
                  resetStyles>
                  {description}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className='h-full lg:w-3/5 lg:pl-24 lg:pb-14 pb-20 lg:sticky lg:top-4'>
          <Typography
            className='text-sm uppercase font-bold font-serif text-green-600 pb-8'
            resetStyles>
            {aboutData.secondSection.caption}
          </Typography>

          <Typography
            as='h2'
            className='text-5xl font-bold leading-[3.8rem] pb-12'
            resetStyles>
            {aboutData.secondSection.title}
          </Typography>

          <Typography
            className='text-gray-400 xs:w-9/12 text-lg pb-7'
            resetStyles>
            {aboutData.secondSection.description}
          </Typography>

          <Link
            href='mailto:andrei@chirila.dev'
            external
            className='text-3xl fill-color-dark font-black hover:fill-color max-w-max'>
            andrei@chirila.dev
          </Link>
        </div>
      </FadeIntoView>
    </section>
  );
}
