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
import Goals from '@/components/goals';
import Gallery from '@/components/gallery';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <Mission />
      </section>
      <section id="goals">
        <Goals />
      </section>
      <section id="learn">
        <Videos />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <Join />
      </section>
      <section id="team">
        <Team />
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
      <section>
        <Footer />
      </section>
    </>
  );
}
