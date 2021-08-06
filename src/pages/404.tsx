// components
import Link from '~components/common/link';
import Layout from '~/components/layouts/base';
import FadeIntoView from '~animations/fade-into-view';
import { Container, Typography } from '~ui/index';

export default function NotFoundPage() {
  return (
    <Layout title='Not Found | Andrei Chirila'>
      <Container maxW='max-w-screen-lg' className='min-h-screen'>
        <FadeIntoView className='flex flex-col h-full justify-center items-center py-20'>
          <Typography
            as='h1'
            className='font-black text-8xl text-center fill-color pb-14'
            resetStyles>
            OPS
          </Typography>

          <Typography
            className='font-medium text-2xl text-center pb-12'
            resetStyles>
            Looks like I caught you on the wrong lane, are you sure your web
            surfing license is valid ? In case you need a reference for a good
            instructor feel free to{' '}
            <Link href='mailto:andrei@chirila.dev' className='underline'>
              shoot me an email
            </Link>
            , anyhow...
          </Typography>
          <Link
            href='/'
            className='w-32 h-32 rounded-full bg-black text-gray-50 flex items-center justify-center hover:bg-red-800 hover:text-black hover:-rotate-12 transition-all duration-200 font-medium'>
            Return Home
          </Link>
        </FadeIntoView>
      </Container>
    </Layout>
  );
}
