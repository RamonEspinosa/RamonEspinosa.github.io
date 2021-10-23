import Contact from "../components/Contact";
import Curriculum from "../components/Curriculum";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import ROUTES from "../utils/navigation";
const Home = () => {
  return (
    <>
      <Navbar />
      <div id={ROUTES.HOME.route} className="relative">
        <Welcome />
        {/** DIVIDER */}
        <div className="wave-divider absolute bottom-0">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-current text-black"
            ></path>
          </svg>
        </div>
        {/** END OF DIVIDER */}
      </div>

      <div id={ROUTES.CV.route} className="bg-black ">
        <Curriculum />
      </div>
      <div className="wave-divider--inverted bg-black">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-current text-gray-900"
          ></path>
        </svg>
      </div>
      <div
        id={ROUTES.CONTACT.route}
        className="bg-gray-900 shadow-2xl relative"
      >
        <Contact />
      </div>
    </>
  );
};
export default Home;
