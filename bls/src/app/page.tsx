import Mission from '@/components/mission'
import Media from '@/components/media'
import Join from '@/components/Join'
import Footer from '@/components/Footer';
import Blog from '@/components/blogs';
import Videos from '@/components/videos';
import Count from '@/components/count';
import NavBar from '@/components/NavBar';
//import Home from '@/components/Home';
import Team from '@/components/team';
import Goals from '@/components/goals';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonial';
import Booklet from '@/components/booklet';
import CPR from '@/components/cpr';
import Newyear from '@/components/newyear';
//import Quiz from '@/components/quiz';

export default function HomePage() {
  return (
    <>
      <NavBar />
      {/* <section id="home">
        <Home />
      </section> */}
      <section id="pledge">
        <Newyear />
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
      <section id="gallery">
        <Gallery />
      </section>
      <section>
        <CPR />
      </section>
      {/* <section>
        <Quiz />
      </section> */}
      <section>
        <Booklet />
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
      <section>
        <Testimonials />
      </section>
      <section id="blogs">
        <Blog />
      </section>
      <section>
        <Media />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
