// components
import AboutPromo from '../components/about-promo';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Work from '../components/work';
import MoreWork from '../components/work/more';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Work />
      <AboutPromo />
      <MoreWork />
    </Layout>
  );
}
