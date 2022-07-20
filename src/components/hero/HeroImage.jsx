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
        className="w-[min(100%,400px)] mx-auto object-cover 
        md:absolute md:w-full md:left-[360px] md:top-[-260px]
        lg:left-[580px] lg:top-[-440px]"
      />
    </picture>
  );
};

export default HeroImage;
