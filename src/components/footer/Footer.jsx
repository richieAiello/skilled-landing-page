import { ReactComponent as Logo } from '../../assets/logo-light.svg';

const Footer = props => {
  return (
    <footer className="bg-blue py-9">
      <div className="container flex flex-col space-y-12 justify-between items-center sm:flex-row sm:space-y-0">
        <Logo />
        <a
          href="#"
          className="bg-gradient-to-b from-grad-blue to-grad-pink
          text-white font-bold text-lg rounded-full px-8 py-3.5
          duration-300 cursor-pointer hover:opacity-50 focus:opacity-50"
        >
          Get Started
        </a>
      </div>
    </footer>
  );
};

export default Footer;
