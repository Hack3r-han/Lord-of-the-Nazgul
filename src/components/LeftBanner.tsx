import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaFirefox } from "react-icons/fa";
import { GiSpikedDragonHead,  GiBroadsword, GiDeathSkull   } from "react-icons/gi";
import { FadeIn } from "./FadeIn";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Bearer of Darkness.", "Captain of Sauron's Armies.", "Shadow Lord."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <FadeIn className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY DOMAIN</h4>
        <h1 className="text-6xl font-bold text-white">
          I am the <span className="text-designColor capitalize">Lord of the Nazgûl</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorStyle="|" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wider">
          I am the harbinger of despair, weilding shadows as my tools and shaping 
          fear in every corner. In the deep abyss of night, I dwell, a specter of dread.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://www.youtube.com/" target="_blank">
              <span className="bannerIcon">
                <FaYoutube />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            STARRED SKILLS
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <GiSpikedDragonHead />
            </span>
            <span className="bannerIcon">
              <GiBroadsword />
            </span>
            <span className="bannerIcon">
              <FaFirefox />
            </span>
            <span className="bannerIcon">
              <GiDeathSkull  />
            </span>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default LeftBanner;
