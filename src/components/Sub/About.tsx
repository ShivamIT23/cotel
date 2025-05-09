import { useState } from "react";
import Facilities from "./Facilities";
import Button from "./Button";

const images = [
  { imgSrc: "/about/img1.png", title: "Single Sharing" },
  { imgSrc: "/about/img2.png", title: "Double Sharing" },
  { imgSrc: "/about/img3.png", title: "Triple Sharing" },
  { imgSrc: "/about/img4.png", title: "Four Sharing" },
];

const aboutText = `Welcome to Cotel! We are dedicated to providing exceptional accommodation solutions tailored for students and working professionals. At Cotel, we believe in creating spaces that prioritize Comfort, Community, and Convenience. Our mission is to foster a vibrant living environment where residents can thrive, connect, and feel at home. Join us and experience a lifestyle that balances work and leisure seamlessly!`;

export default function About() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <section
      id="about"
      className="my-[2vh] px-[15vw] flex justify-center h-fit min-h-[80svh] w-svw"
    >
      <div className="flex flex-col gap-6 mt-10 pb-10 p-10 rounded-xl min-h-full h-fit w-full bg-white">
        <div className="mb-[5vh] w-svw -ml-[calc(15vw+40px)] h-fit min-h-full">
          <div className="flex flex-col-reverse md:flex-row items-center px-[6vw] min-h-[50vh] justify-center font-normal gap-4 max-h-fit bg-[#FEFEF6] ">
            <div className="w-full py-10 md:py-0 md:w-[50%] flex flex-col gap-10 items-start justify-start font-normal max-h-fit ">
              <h3 className="text-3xl md:text-5xl text-[#444823] font-bold">
                About Us
              </h3>
              <div className="flex flex-col items-start">
                <p
                  className={`"text-[12px] xl:text-lg sans text-start" about-text ${
                    expanded ? "expanded" : "clamped line-clamp-3"
                  }`}
                >
                  {aboutText}
                </p>
                <button
                  onClick={toggleExpanded}
                  className="read-more-btn text-sm font-semibold"
                >
                  {expanded ? "show less" : "...read more"}
                </button>
              </div>
              <Button>
                Find my COTEL <span className="pl-2"> &#8921;</span>
              </Button>
            </div>
            <div className="md:w-[50%] flex flex-col items-center justify-start font-normal gap-4 max-h-fit ">
              <img src="about1.png" alt="" className="h-full aspect-auto" />
            </div>
          </div>
          <div className="md:flex grid grid-cols-2 w-full bg-[#866C41] min-h-[10vh] justify-evenly items-center font-normal text-lg">
            {[
              "Clean Rooms and Hygienic foods",
              "Convenient rates",
              "Comfy Beds",
              "Prime Location",
            ].map((tag, idx) => {
              return (
                <div
                  key={idx}
                  className={` ${
                    idx == 0 || idx == 3
                      ? "col-span-full"
                      : "col-span-full xxs:col-span-1"
                  } text-white flex justify-center items-center gap-2`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39697 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39697 18.3337 9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003Z"
                      stroke="#FEFEF6"
                      stroke-width="2"
                    />
                    <path
                      d="M6.66602 10.4167L8.74935 12.5L13.3327 7.5"
                      stroke="#FEFEF6"
                      stroke-width="2"
                    />
                  </svg>
                  <h3>{tag}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <Facilities />
        <div className="flex flex-col gap-8 mt-5">
          <h3 className=" w-full flex justify-center font-normal text-3xl md:text-5xl pb-4">
            Types of Beds
          </h3>
          <div className="flex justify-between gap-8 mt-3">
            {images.map((card, index) => {
              return <Images key={index} card={card} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Images({ card }: { card: { imgSrc: string; title: string } }) {
  return (
    <article className="flex flex-col col-span-1 group w-full max-h-fit h-fit">
      <img
        src={card.imgSrc}
        alt="ProductImg"
        className="object-contain group-hover:drop-shadow-lg transition aspect-square rounded-xl max-h-[600px] w-full"
      />
      <h3 className="font-normal text-2xl cursor-pointer">{card.title} <span className="pl-2"> &#8921;</span></h3>
    </article>
  );
}
