const CourseCard = props => {
  return (
    <div
      className="relative flex flex-col max-w-md min-h-[260px] bg-white rounded-[10px] pt-14 pb-8 px-7 mx-auto
     md:max-w-full md:m-[unset] lg:h-[322px] lg:pt-16 lg:pb-10 shadow-card"
    >
      <h3
        className="text-blue font-extrabold text-[1.25rem] leading-[1.575rem] capitalize mb-4
      lg:mb-6 lg:text-[1.5rem] lg:leading[1.89rem]"
      >
        {props.heading}
      </h3>
      <p className="text-grey mb-6">{props.text}</p>
      <a
        href="#"
        className="text-hot-pink text-lg font-bold mt-auto
        capitalize duration-300 hover:text-pink focus:text-pink"
      >
        Get Started
      </a>
      <img
        src={props.src}
        alt=""
        className="absolute top-[-24px] left-7 w-14 h-14"
      />
    </div>
  );
};

export default CourseCard;
