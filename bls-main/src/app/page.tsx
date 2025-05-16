import Home from '@/components/Home'
import Mission from '@/components/mission'
import Feature from '@/components/feature'

export default function HomePage() {
  return (
    <>
      <section className="h-screen">
        <Home />
      </section>
      <section className="h-screen">
        <Mission />
      </section>
      <section className="h-screen">
        <Feature />
      </section>
    </>
  );
}
