const CourseHeading = props => {
  return (
    <div
      className="max-w-md min-h-[120px] rounded-[10px] pt-6 pb-8 px-7 mx-auto
      bg-gradient-to-t from-grad-pink to-grad-orange
      md:h-[260px] md:max-w-full"
    >
      <h2 className="text-white text-2xl font-extrabold">
        Check out our most popular courses!
      </h2>
    </div>
  );
};

export default CourseHeading;
