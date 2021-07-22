// components
import Link from '~components/common/link';
import FadeIntoView from '~animations/fade-into-view';
import ArrowNarrowRight from '~icons/arrow-narrow-right';
import { Container, Typography } from '~ui/index';
// data
import aboutData from '~data/about';

export default function Story() {
  return (
    <section className='bg-black-tone text-gray-50 py-20'>
      <FadeIntoView as={Container}>
        <Typography
          className='text-sm uppercase font-bold font-serif text-green-600 pb-8'
          resetStyles>
          {aboutData.thirdSection.caption}
        </Typography>

        <Typography
          as='h2'
          className='text-5xl lg:w-4/5 font-bold leading-[3.8rem] pb-12'
          resetStyles>
          {aboutData.thirdSection.title}
        </Typography>

        <div className='flex flex-col mt-6'>
          <div className='flex lg:flex-row flex-col-reverse pb-12 text-gray-200'>
            <Typography
              className='text-xl font-medium font-serif leading-9 text-justify lg:w-3/5'
              resetStyles>
              {aboutData.thirdSection.bio.intro[1]}
            </Typography>

            <aside className='lg:w-2/5 lg:pb-0 pb-7'>
              <Typography
                className='text-3xl font-black text-right fill-color-dark'
                resetStyles>
                {aboutData.thirdSection.bio.intro[0]}
              </Typography>
            </aside>
          </div>

          <div className='flex lg:flex-row flex-col-reverse pb-12 text-gray-200'>
            <div className='lg:w-3/5'>
              <Typography
                className='text-xl font-medium font-serif leading-9 text-justify'
                resetStyles>
                {aboutData.thirdSection.bio.spareTime[1]}
              </Typography>

              <Link
                href='https://github.com/Kerosz/chirila.dev'
                className='flex hover:text-green-700 font-bold group pt-7 max-w-max'
                external>
                <Typography className='pr-2 text-xl underline' resetStyles>
                  Read the code that powers this space
                </Typography>
                <ArrowNarrowRight
                  className='w-9 -mt-0.5 group-hover:transform-gpu group-hover:translate-x-2 transition-all duration-150'
                  strokeWidth={1}
                />
              </Link>
            </div>

            <aside className='lg:w-2/5 lg:pb-0 pb-7'>
              <Typography
                className='text-3xl font-black text-right fill-color-dark'
                resetStyles>
                {aboutData.thirdSection.bio.spareTime[0]}
              </Typography>
            </aside>
          </div>

          <div className='flex lg:flex-row flex-col-reverse pb-12'>
            <Typography
              className='text-xl text-gray-200 font-medium font-serif leading-9 text-justify lg:w-3/5'
              resetStyles>
              {aboutData.thirdSection.bio.hobbies[1]}
            </Typography>

            <aside className='lg:w-2/5 lg:pb-0 pb-7'>
              <Typography
                className='text-3xl text-gray-200 font-black text-right fill-color-dark'
                resetStyles>
                {aboutData.thirdSection.bio.hobbies[0]}
              </Typography>
            </aside>
          </div>

          <div className='flex lg:flex-row flex-col-reverse'>
            <Typography
              className='text-xl text-gray-200 font-medium font-serif leading-9 text-justify lg:w-3/5'
              resetStyles>
              {aboutData.thirdSection.bio.mantra[1]}
            </Typography>

            <aside className='lg:w-2/5 lg:pb-0 pb-7'>
              <Typography
                className='text-3xl text-gray-200 font-black text-right fill-color-dark'
                resetStyles>
                {aboutData.thirdSection.bio.mantra[0]}
              </Typography>
            </aside>
          </div>
        </div>
      </FadeIntoView>
    </section>
  );
}
