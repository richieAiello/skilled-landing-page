import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Course from './components/course/Course';
import Footer from './components/footer/Footer';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Course />
      </main>
      <Footer />
    </>
  );
};

export default App;
