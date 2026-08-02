import IconSprite from './components/IconSprite.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Modules from './components/Modules.jsx';
import Process from './components/Process.jsx';
import Testimonials from './components/Testimonials.jsx';
import Reach from './components/Reach.jsx';
import BookCall from './components/BookCall.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <IconSprite />
      <Nav />
      <main id="top">
        <Hero />
        <Modules />
        <Process />
        <Testimonials />
        <Reach />
        <BookCall />
      </main>
      <Footer />
    </>
  );
}