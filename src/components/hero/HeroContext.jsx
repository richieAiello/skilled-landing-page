const HeroContext = props => {
  return (
    <div className="mb-[2.875rem] max-w-md">
      <h1 className="text-blue text-hero mb-[1.625rem]">
        Maximize skill, minimize budget
      </h1>
      <p className="text-grey mb-6">
        Our modern courses across a range of in-demand skills will
        give you the knowledge you need to live the life you want.
      </p>
      <a
        href="#"
        className="text-white bg-gradient-to-t from-grad-pink-1 to-grad-pink-2 
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
