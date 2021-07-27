// components
import Layout from '~components/layouts/base';
import Newsletter from '~/components/common/newsletter';
import { Intro, Process, Story } from '~components/about/index';

export default function AboutPage() {
  return (
    <Layout title='About | Andrei Chirila'>
      <Intro />
      <Process />
      <Story />
      <Newsletter />
    </Layout>
  );
}
