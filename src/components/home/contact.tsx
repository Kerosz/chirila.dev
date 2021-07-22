// components
import Link from '~components/common/link';
import ArrowNarrowRight from '~icons/arrow-narrow-right';
import { Container, Typography } from '../ui';

function Contact(): JSX.Element {
  return (
    <section className='py-20 bg-black-tone text-gray-50 relative z-10'>
      <Container>
        <Typography
          as='h2'
          className='xs:text-9xl text-22vw font-black fill-color-dark pb-20'
          resetStyles>
          Contact
        </Typography>

        <div className='flex lg:flex-row flex-col'>
          <div className='lg:w-1/2 lg:mb-0'>
            <div className='bg-gray-200 lg:w-4/5 p-12 text-gray-900 shadow-lg'>
              <Typography
                as='h3'
                className='font-medium pb-7 text-4xl leading-[3rem] xl:pr-12'
                resetStyles>
                Building digital products for the wide web
              </Typography>

              <Typography
                className='font-serif leading-8 text-lg pb-16 border-gray-900 border-b xl:pr-5'
                resetStyles>
                Specialized in fullstack development with the ability to take on
                a general idea and carry it on from initial planning to design,
                development all the way to marketing.
              </Typography>

              <Link
                href='/about'
                className='flex justify-end text-gray-900 hover:text-red-800 text-lg font-bold group pt-7'>
                <Typography className='pr-2'>Find out more</Typography>
                <ArrowNarrowRight
                  className='w-9 -mt-1.5 group-hover:transform-gpu group-hover:translate-x-3 transition-all duration-150'
                  strokeWidth={1}
                />
              </Link>
            </div>
          </div>

          <div className='lg:w-1/2 lg:pt-36 pt-20'>
            <Typography
              as='h3'
              className='text-5xl font-bold leading-[4rem] pb-7'
              resetStyles>
              Have something in mind ? <br /> Reach out and let&apos;s do it.
            </Typography>

            <Typography className='text-gray-400 xs:w-9/12 pb-12' resetStyles>
              I’m not really active on{' '}
              <Link
                href='https://www.twitter.com/chirila_'
                external
                className='text-gray-50 font-medium hover:text-cyan'>
                Twitter
              </Link>{' '}
              but you can stay in touch with me on{' '}
              <Link
                href='https://www.linkedin.com/in/c-andrei/'
                external
                className='text-gray-50 font-medium hover:text-cyan'>
                Linkedin
              </Link>
              . I post some articles on my{' '}
              <Link
                href='https://blog.chirila.dev'
                external
                className='text-gray-50 font-medium hover:text-cyan'>
                Blog
              </Link>{' '}
              and some experiments and open source on{' '}
              <Link
                href='https://github.com/Kerosz'
                external
                className='text-gray-50 font-medium hover:text-cyan'>
                GitHub
              </Link>
              .
            </Typography>

            <Link
              href='mailto:andrei@chirila.dev'
              external
              className='xs:text-[2.45rem] text-8vw fill-color-dark font-black hover:fill-color max-w-max'>
              andrei@chirila.dev
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
