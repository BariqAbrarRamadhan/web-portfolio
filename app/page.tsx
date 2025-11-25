import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Exhibitions from './components/Exhibitions';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Exhibitions />
      <Footer />
    </main>
  );
}

