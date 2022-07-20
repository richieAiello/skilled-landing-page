import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Course from './components/course/Course';

const App = props => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Course />
      </main>
    </>
  );
};

export default App;
