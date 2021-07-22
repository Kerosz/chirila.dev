// components
import Layout from '~components/layout';
import FadeIntoView from '~/components/animations/fade-into-view';
import ArrowNarrowRight from '~icons/arrow-narrow-right';
import { Container, Typography, Link } from '~ui/index';
// data
import aboutData from '~data/about';

export default function AboutPage() {
  return (
    <Layout>
      <section className='bg-black-tone text-gray-50 pb-20 sm:pt-32'>
        <FadeIntoView as={Container}>
          <Typography
            as='h1'
            className='font-black sm:text-7xl text-12vw lg:w-4/5 w-11/12 xl:pr-3 pb-12 fill-color-dark'
            resetStyles>
            Hope you enjoyed your time in my personal space, here are some
            things you should know about me –
          </Typography>
        </FadeIntoView>
      </section>

      <section className='bg-black-tone text-gray-100 py-20'>
        <FadeIntoView as={Container} className='flex lg:flex-row flex-col'>
          <div className='lg:w-2/5 lg:mb-0'>
            <div className='border border-gray-700 rounded-lg p-12 text-gray-400 shadow-lg space-y-14'>
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

          <div className='h-full lg:w-3/5 lg:pl-24 lg:pt-14 pt-20 sticky top-4'>
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
              Every project is a new story, yet some things never change. I
              picked a set of tools for each story we might get the oportunity
              to tell.
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
            <div className='flex flex-row pb-12'>
              <Typography
                className='text-xl text-gray-200 font-medium font-serif leading-9 text-justify lg:w-3/5'
                resetStyles>
                {aboutData.thirdSection.bio.intro[1]}
              </Typography>

              <aside className='lg:w-2/5'>
                <Typography
                  className='text-3xl text-gray-200 font-black text-right fill-color-dark'
                  resetStyles>
                  {aboutData.thirdSection.bio.intro[0]}
                </Typography>
              </aside>
            </div>

            <div className='flex flex-row pb-12 text-gray-200'>
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
                    className='w-9 -mt-1 group-hover:transform-gpu group-hover:translate-x-2 transition-all duration-150'
                    strokeWidth={1}
                  />
                </Link>
              </div>

              <aside className='lg:w-2/5'>
                <Typography
                  className='text-3xl font-black pb-12 text-right fill-color-dark'
                  resetStyles>
                  {aboutData.thirdSection.bio.spareTime[0]}
                </Typography>
              </aside>
            </div>

            <div className='flex flex-row pb-12'>
              <Typography
                className='text-xl text-gray-200 font-medium font-serif leading-9 text-justify lg:w-3/5'
                resetStyles>
                {aboutData.thirdSection.bio.hobbies[1]}
              </Typography>

              <aside className='lg:w-2/5'>
                <Typography
                  className='text-3xl text-gray-200 font-black text-right fill-color-dark'
                  resetStyles>
                  {aboutData.thirdSection.bio.hobbies[0]}
                </Typography>
              </aside>
            </div>

            <div className='flex flex-row'>
              <Typography
                className='text-xl text-gray-200 font-medium font-serif leading-9 text-justify lg:w-3/5'
                resetStyles>
                {aboutData.thirdSection.bio.mantra[1]}
              </Typography>

              <aside className='lg:w-2/5'>
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
    </Layout>
  );
}
