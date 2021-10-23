import {
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineGithub,
  AiOutlinePhone,
} from "react-icons/ai";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
const PHONE_NUMBER = "+52 55 47 15 33 51";
const SocialMedia = () => {
  return (
    <div className="w-11/12 md:w-4/12 flex flex-col">
      <p className="text-3xl text-center font-bold text-white w-full">
        You may also find me in
      </p>
      <div className="w-full flex justify-center items-center h-full  space-x-5">
        <a
          href="https://www.facebook.com/Ramon.espinosa.1996"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineFacebook className="text-white text-5xl" />
        </a>
        <Tooltip
          // options
          title={PHONE_NUMBER}
          position="top"
          trigger="mouseenter"
          interactive
        >
          <a href="https://wa.link/lykfss" target="_blank" rel="noreferrer">
            <AiOutlineWhatsApp className="text-white text-5xl" />
          </a>
        </Tooltip>

        <a
          href="https://github.com/RamonEspinosa"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className="text-white text-5xl" />
        </a>
        <Tooltip
          // options
          title={PHONE_NUMBER}
          position="top"
          trigger={"mouseenter"}
          interactive
        >
          <a href="tel:+525547153351">
            <AiOutlinePhone className="text-white text-5xl" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};
export default SocialMedia;
