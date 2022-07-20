import { ReactComponent as Logo } from '../../assets/logo-dark.svg';

const Header = props => {
  return (
    <header className="container flex justify-between items-center mt-4 mb-[2.375rem]">
      <Logo />
      <a
        href="#"
        className="text-white font-bold leading-7 bg-blue px-6 py-2.5 rounded-full 
        cursor-pointer inline-block duration-300 
        hover:bg-light-blue focus:bg-light-blue"
      >
        Get Started
      </a>
    </header>
  );
};

export default Header;
