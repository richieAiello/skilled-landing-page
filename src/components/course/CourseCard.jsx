const CourseCard = props => {
  return (
    <div className="relative w-full h-[259px] bg-white rounded-[10px] pt-14 px-7">
      <h3 className="text-blue font-extrabold text-[1.25rem] leading-[1.575rem] capitalize mb-4">
        {props.heading}
      </h3>
      <p className="mb-6  max-w-md">{props.text}</p>
      <a
        href="#"
        className="text-hot-pink text-lg font-bold capitalize duration-300 hover:text-pink focus:text-pink"
      >
        Get Started
      </a>
      <img
        src={props.src}
        className="absolute bottom-[227px] left-7 w-14 h-14"
        loading="lazy"
      />
    </div>
  );
};

export default CourseCard;
