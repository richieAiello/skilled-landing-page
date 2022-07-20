const CourseHeading = props => {
  return (
    <div
      className="max-w-md min-h-[120px] rounded-[10px] pt-6 pb-8 px-7 mx-auto
      bg-gradient-to-t from-grad-pink to-grad-orange
      md:h-[260px] md:max-w-full md:pt-14 md:px-8 lg:pt-16 lg:h-[322px]"
    >
      <h2 className="text-white text-2xl font-extrabold lg:text-[2rem] lg:leading-10">
        Check out our most popular courses!
      </h2>
    </div>
  );
};

export default CourseHeading;
