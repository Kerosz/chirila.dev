// components
import FadeIntoView from '~/components/animations/fade-into-view';
import Layout from '~components/layout';
import { Container, Typography } from '~ui/index';

export default function AboutPage() {
  return (
    <Layout>
      <section className='bg-white py-20'>
        <FadeIntoView as={Container}>
          <Typography
            as='h1'
            className='font-black text-7xl w-4/5 pb-12 leading-[5.25rem] fill-color'
            resetStyles>
            Hope you enjoyed your time in my personal space, here are some
            things you should know about me –
          </Typography>
        </FadeIntoView>
      </section>
    </Layout>
  );
}
