const HeroContext = props => {
  return (
    <div
      className="mb-[2.875rem] max-w-md mx-auto md:m-0 md:max-w-[398px]
    lg:max-w-[457px]"
    >
      <h1
        className="text-blue text-[2.5rem] font-extrabold leading-[3.15rem] mb-[1.625rem]
      lg:leading-[4.41rem] lg:text-[3.5rem]"
      >
        Maximize skill, minimize budget
      </h1>
      <p className="text-grey mb-6 lg:mb-10">
        Our modern courses across a range of in-demand skills will
        give you the knowledge you need to live the life you want.
      </p>
      <a
        href="#"
        className="text-white bg-gradient-to-t from-grad-pink to-grad-orange 
        font-bold rounded-full px-9 py-4 inline-block duration-300 
        hover:text-blue hover:opacity-50
        focus:text-blue focus:opacity-50"
      >
        Get Started
      </a>
    </div>
  );
};

export default HeroContext;
