import Mission from '@/components/mission'
import Feature from '@/components/feature'
import Join from '@/components/Join'
import Footer from '@/components/Footer';
import Blog from '@/components/blogs';
import Videos from '@/components/videos';
import Count from '@/components/count';
import NavBar from '@/components/NavBar';
import Home from '@/components/Home';
import Team from '@/components/team';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="goals">
        <Mission />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <Videos />
      </section>
      <section>
        <Join />
      </section>
      <section>
        <Count />
      </section>
      <section id="blogs">
        <Blog />
      </section>
      <section>
        <Feature />
      </section>
      <section id="about">
        <Footer />
      </section>
    </>
  );
}
