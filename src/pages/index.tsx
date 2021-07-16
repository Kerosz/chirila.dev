// components
import Hero from '../components/hero';
import Layout from '../components/layout';
import Container from '../components/ui/container';
import Work from '../components/work';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Work />
    </Layout>
  );
}
