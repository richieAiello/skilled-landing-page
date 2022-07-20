const HeroImage = props => {
  return (
    <picture>
      <source
        srcSet="./hero-desktop.webp"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="./hero-tablet.webp"
        media="(min-width: 768px)"
      />
      <img
        src="./hero-mobile.webp"
        alt="29,000 members and 1,451 course hours."
        className="hero__image mx-auto"
        loading="lazy"
      />
    </picture>
  );
};

export default HeroImage;
