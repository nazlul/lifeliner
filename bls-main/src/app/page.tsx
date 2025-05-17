import Home from '@/components/Home'
import Mission from '@/components/mission'
import Feature from '@/components/feature'
import Join from '@/components/Join'

export default function HomePage() {
  return (
    <>
      <section>
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
    </>
  );
}
