// components
import Layout from '~components/layout';
import Newsletter from '~/components/common/newsletter';
import { Intro, Process, Story } from '~components/about/index';

export default function AboutPage() {
  return (
    <Layout>
      <Intro />
      <Process />
      <Story />
      <Newsletter />
    </Layout>
  );
}
