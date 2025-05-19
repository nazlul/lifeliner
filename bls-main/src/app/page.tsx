import Home from '@/components/Home'
import Mission from '@/components/mission'
import Feature from '@/components/feature'
import Join from '@/components/Join'
import Footer from '@/components/Footer';

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
        <Join />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
