// components
import AboutPromo from '~/components/about-promo';
import Hero from '~/components/hero';
import Layout from '~/components/layout';
import Work from '~/components/work';
import MoreWork from '~/components/more-work';
import Contact from '~/components/contact';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Work />
      <AboutPromo />
      <MoreWork />
      <Contact />
    </Layout>
  );
}
