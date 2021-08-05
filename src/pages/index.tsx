// components
import Layout from '~/components/layouts/base';
import {
  Hero,
  Work,
  AboutPromo,
  Extras,
  Contact,
} from '~/components/home/index';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Work />
      <AboutPromo />
      <Extras />
      <Contact />
    </Layout>
  );
}
