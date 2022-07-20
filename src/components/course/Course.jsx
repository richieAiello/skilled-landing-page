import CourseHeading from './CourseHeading';
import CourseCard from './CourseCard';
import animationIcon from '../../assets/icon-animation.svg';
import designIcon from '../../assets/icon-design.svg';
import photographyIcon from '../../assets/icon-photography.svg';
import cryptoIcon from '../../assets/icon-crypto.svg';
import businessIcon from '../../assets/icon-business.svg';

const Course = props => {
  return (
    <section className="bg-gradient-to-b from-white to-white-blue">
      <div className="container">
        <CourseHeading />
        <CourseCard
          heading="Heading"
          text="text"
          src={animationIcon}
        />
      </div>
    </section>
  );
};

export default Course;
