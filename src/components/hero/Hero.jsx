import HeroContext from './HeroContext';
import HeroImage from './HeroImage';
import '../../styles/hero.css';

const Hero = props => {
  return (
    <section className="container mb-16">
      <HeroContext />
      <HeroImage />
    </section>
  );
};

export default Hero;
