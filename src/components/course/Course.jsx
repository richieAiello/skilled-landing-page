import CourseHeading from './CourseHeading';
import CourseCard from './CourseCard';
import animationIcon from '../../assets/icon-animation.svg';
import designIcon from '../../assets/icon-design.svg';
import photographyIcon from '../../assets/icon-photography.svg';
import cryptoIcon from '../../assets/icon-crypto.svg';
import businessIcon from '../../assets/icon-business.svg';

const Course = props => {
  return (
    <section
      className="bg-gradient-to-b from-white to-white-blue pb-20 
      md:pb-[5.375rem] lg:pb-[8.75rem]"
    >
      <div
        className="container grid gap-y-10
        md:grid-cols-[repeat(2,340px)] md:gap-y-14 md:justify-between
        lg:grid-cols-[repeat(3,350px)] lg:gap-y-20"
      >
        <CourseHeading />
        <CourseCard
          heading="Animation"
          text="Learn the latest animation techniques to create stunning motion 
            design and captivate your audience."
          src={animationIcon}
        />
        <CourseCard
          heading="Design"
          text="Create beautiful, usable interfaces to help shape the future of 
            how the web looks."
          src={designIcon}
        />
        <CourseCard
          heading="Photography"
          text="Explore critical fundamentals like lighting, composition, and focus 
            to capture exceptional photos."
          src={photographyIcon}
        />
        <CourseCard
          heading="Crypto"
          text="All you need to know to get started investing in crypto. Go from beginner 
            to advanced with this 54 hour course."
          src={cryptoIcon}
        />
        <CourseCard
          heading="Business"
          text="A step-by-step playbook to help you start, scale, and sustain your business 
            without outside investment."
          src={businessIcon}
        />
      </div>
    </section>
  );
};

export default Course;
