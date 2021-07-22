// components
import Layout from '~/components/layout';
import Newsletter from '~/components/common/newsletter';
import {
  Hero,
  SelectedWord,
  AboutPromo,
  MoreWork,
  Contact,
} from '~/components/home/index';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <SelectedWord />
      <AboutPromo />
      <MoreWork />
      <Contact />
      <Newsletter />
    </Layout>
  );
}
