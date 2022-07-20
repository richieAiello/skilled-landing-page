import HeroContext from './HeroContext';
import HeroImage from './HeroImage';
import '../../styles/hero.css';

const Hero = props => {
  return (
    <section className="container mb-16 relative md:flex md:mb-[11.625rem] lg:mb-[15.625rem]">
      <HeroContext />
      <HeroImage />
    </section>
  );
};

export default Hero;
