import { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "./Title";
import { Sauron, Saruman, Gothmog, Gollum } from "../assets";
import { FadeIn } from "./FadeIn";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonials" />
        </div>
        <div className="max-w-6xl mx-auto">
          {/* ================ Slider One ================== */}
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={Sauron}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Middle Earth
                    </p>
                    <h3 className="text-2xl font-bold">Sauron</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      The Great Eye
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Mordor Enterprises
                        </h3>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    As the Dark Lord of Mordor, I have had the pleasure of working closely with the Lord of the Nazgul for 
                    many ages. His unwavering loyalty and formidable leadership have been crucial in advancing our dark 
                    ambitions across Middle-earth. With a keen sense of strategy and an unmatched ability to inspire fear 
                    and obedience, the Lord of the Nazgul has proven to be an invaluable asset to our cause. His dedication 
                    to the will of Mordor is unwavering, and his service is indispensable. I can attest, with the certainty 
                    that comes from seeing all, that the Lord of the Nazgul is a reliable and formidable leader, whose presence 
                    instills dread in our enemies and commands respect from our allies. I wholeheartedly endorse his
                    capabilities and commend his commitment to our dark purpose.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Two ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={Gothmog}
                    alt="testimonialTwo"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Middle Earth
                    </p>
                    <h3 className="text-2xl font-bold">Lieutenant Gothmog</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Lord of Balrogs
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Mordor Enterprises
                        </h3>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    As Gothmog, Lieutenant of Morgul, I have had the honour of serving alongside the Lord of the Nazgul in our relentless pursuit of domination. His ferocity in battle and 
                    mastery of dark sorcery are unmatched. From the dark halls of Barad-dûr to the desolate plains of Mordor, the Lord of the Nazgul has proven himself to be a formidable 
                    force, wielding his dark powers with precision and cunning. His strategic insight and unwavering resolve have been pivotal in achieving our dark objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={Saruman}
                    alt="testimonialThree"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Middle Earth
                    </p>
                    <h3 className="text-2xl font-bold">Saruman</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Head of White Council
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Mordor Enterprises
                        </h3>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    The Lord of the Nazgul's prowess in commanding the forces of darkness is unparalleled. His strategic 
                    acumen and unwavering dedication to our shared objectives have been instrumental in furthering the 
                    goals of our dark alliance. He is a steadfast and reliable ally, whose loyalty to our cause is beyond 
                    question. From my tower of Orthanc, I have beheld his actions, and I, Saruman the Wise, can attest to 
                    his effectiveness and reliability as a commander.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}

            <div className="w-full">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                  <img
                    className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                    src={Gollum}
                    alt="testimonialFour"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Middle Earth
                    </p>
                    <h3 className="text-2xl font-bold">Gollum</h3>
                    <p className="text-base tracking-wide text-gray-500">
                      Servant to the One Ring
                    </p>
                  </div>
                </div>
                <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                  <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                    <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                          Mordor Enterprises
                        </h3>
                      </div>
                      <div className="text-yellow-500 flex gap-1">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    GOLLUM!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
