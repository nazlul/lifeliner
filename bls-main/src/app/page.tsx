import Home from '@/components/Home'
import Mission from '@/components/mission'
import Feature from '@/components/feature'
import Join from '@/components/Join'
import Footer from '@/components/Footer';
import Blog from '@/components/blogs';
import Videos from '@/components/videos';
import Count from '@/components/count';

export default function HomePage() {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section>
        <Mission />
      </section>
      <section>
        <Feature />
      </section>
      <section>
        <Videos />
      </section>
      <section>
        <Join />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Count />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
