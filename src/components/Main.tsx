import { useState } from "react";
import Category from "../components/Sub/Category";
import SearchTab from "./Sub/SearchTab";

const cards = [
  {
    imgSrc: "/home/img1.png",
    title: "Asthapad (Girls) ",
    near: "500m away from Bhawanipur College",
    location: "12A,Chakraberia Road, Near Terapanth Bhawan, Kolkata- 700020",
    price: "₹15,000",
  },
  {
    imgSrc: "/home/img2.png",
    title: "Nivasa (Girls) ",
    near: "500m away from Bhawanipur College",
    location: "2No, Ho-Chi Min Sarani, Kolkata- 700070",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img3.png",
    title: "Sienna (Boys) ",
    near: "500m away from Bhawanipur College",
    location: "51B, Subhashini Ganguly Sarani, Kolkata-700025",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img4.png",
    title: "Shyamananda (Girls) ",
    near: "500m away from Bhawanipur College",
    location: "32/1A, Shyamananda Road, Kolkata-700025",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img5.png",
    title: "Kankurgachi (Girls) ",
    near: "500m away from Bhawanipur College",
    location: "P70, Ramkrishna Samadhi Road, Kolkata- 700054",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img6.png",
    title: "Ajanta (Boys) ",
    near: "500m away from Bhawanipur College",
    location: "93/2 Bokul Bagan Road, Kolkata-700025",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img7.png",
    title: "Northern Park (Boys) ",
    near: "500m away from Bhawanipur College",
    location: "18B, Balram Bose First Lane, Kolkata- 700020",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img8.png",
    title: "Elgin (Boys) ",
    near: "500m away from Bhawanipur College",
    location: "12C Sarat Bose Road, Kolkata-700020",
    price: "₹15,000",
  },
  {
    imgSrc: "/home/img9.png",
    title: "NBCC (Girls) ",
    near: "500m away from Bhawanipur College",
    location:
      "CE Block, NBCC, Vibgyor Tower, Newtown, Action Area 1, Kolkata- 700156",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img10.png",
    title: "37A Staywell (Boys) ",
    near: "500m away from Bhawanipur College",
    location: "37A, Paddapukur Road, Chakraberia, Ballygunge, Kolkata- 700019",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img11.png",
    title: "Newton Suparna Villa ",
    near: "500m away from Bhawanipur College",
    location: "Newtown, Mouza, Jatragachi, Purbapara, Kolkata- 700157",
    price: "₹13,000",
  },
  {
    imgSrc: "/home/img12.png",
    title: "Nivasa (Girls) ",
    near: "500m away from Bhawanipur College",
    location: "2No, Ho-Chi Min Sarani, Kolkata- 700070",
    price: "₹13,000",
  },
];

const chooseList = [
  {
    imgSrc: "/choose/img1.png",
    bgColor: "#F0F8FA",
    title: "Premium Living",
    para: "High quality premium living",
    to: "/",
  },
  {
    imgSrc: "/choose/img2.png",
    bgColor: "#FEF3EF",
    title: "Hygienic Washrooms",
    para: "Experience cleanliness like never before in our hostel bathrooms! Enjoy hygienic facilities designed for your comfort, with regular cleaning and top-notch amenities. ",
    to: "/",
  },
  {
    imgSrc: "/choose/img3.png",
    bgColor: "#F0F8FA",
    title: "Private Kitchen",
    para: "Welcome to the Private Kitchen at Cotel Hostels! Here, you can enjoy a cozy cooking space equipped with all the essentials to whip up your favorite meals.",
    to: "/",
  },
  {
    imgSrc: "/choose/img4.png",
    bgColor: "#ECEEDD",
    title: "About the Founder",
    para: "A visionary founder, he revolutionized hybrid stays by launching a company blending hotels and PGs seamlessly.",
    to: "/",
  },
];

export default function Main() {
  const [inputLocation, setInputLocation] = useState("");
  const [inputGender, setInputGender] = useState("");
  const [inputCheckIn, setInputCheckIn] = useState("");

  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checkIn, setCheckIn] = useState("");

  const handleSearch = () => {
    setLocation(inputLocation);
    setGender(inputGender);
    setCheckIn(inputCheckIn);
  };

  const filteredCards = cards.filter((card) => {
    const matchLocation = location
      ? card.location.toLowerCase().includes(location.toLowerCase())
      : true;

    const titleLower = card.title.toLowerCase();
    const matchGender = gender
      ? gender === "other"
        ? !titleLower.includes("boy") && !titleLower.includes("girl")
        : titleLower.includes(gender)
      : true;

    return matchLocation && matchGender;
  });

  return (
    <main className="min-h-svh h-fit flex flex-col">
      <section className="h-fit w-full flex justify-center">
        <SearchTab
          location={inputLocation}
          setLocation={setInputLocation}
          checkIn={inputCheckIn}
          setCheckIn={setInputCheckIn}
          gender={inputGender}
          setGender={setInputGender}
          handleSearch={handleSearch}
        />
      </section>
      <section className="min-h-[20vh] h-fit grid grid-cols-4 gap-4 gap-y-6 pt-10 sm:px-[5vw] mb-[23px]">
        {filteredCards.map((card, idx) => (
          <ItemCard key={idx} card={card} />
        ))}
        {filteredCards.length === 0 && (
          <p className="col-span-4 h-full flex justify-center items-center text-4xl text-center text-gray-500">
            No results found for your search.
          </p>
        )}
      </section>
      <Category />
      <section className="bg-div min-h-[40vh] h-fit flex flex-col gap-[8vh] justify-between pt-[6vh] pb-[10vh] px-[8vw] font-bold text-[16px] text-[#39302A]">
        <h2 className="w-full flex justify-center text-4xl lg:text-5xl xl:text-7xl font-semibold py-[3vh] text-center">
          Why Choose Us
        </h2>
        {chooseList.map((card, idx) => {
          return <ChooseCard card={card} idx={idx} />;
        })}
      </section>
    </main>
  );
}

function ItemCard({
  card,
}: {
  card: {
    imgSrc: string;
    title: string;
    near: string;
    location: string;
    price: string;
  };
}) {
  return (
    <div className="group col-span-1 flex flex-col text-sm font-normal gap-1">
      <img
        src={card.imgSrc}
        alt="locationImg"
        className="w-full aspect-square group-hover:drop-shadow-lg transition object-contain"
      />
      <h3 className="font-semibold text-[15px]">{card.title}</h3>
      <p>{card.near}</p>
      <p className="line-clamp-2">{card.location}</p>
      <p>
        Starting from{" "}
        <span className="font-semibold text-[15px]">{card.price}</span> Onwards
      </p>
    </div>
  );
}

function ChooseCard({
  card,
  idx,
}: {
  card: {
    imgSrc: string;
    bgColor: string;
    title: string;
    para: string;
    to: string;
  };
  idx: number;
}) {
  return (
    <section
      style={{
        backgroundColor: card.bgColor,
      }}
      className={`w-[90%] rounded-3xl h-fit md:flex ${
        idx == 1 ? "flex-row-reverse pr-[8%]" : "flex-row pl-[8%]"
      } mx-auto min-h-[60vh] gap-4 group`}
    >
      <div
        className={`md:w-[50%] p-4 my-auto h-fit min-h-full col-span-1 flex flex-col gap-8 ${
          idx == 1 ? "items-end text-end" : "items-start"
        } justify-center`}
      >
        <h3 className="text-4xl font-bold">{card.title}</h3>
        <p className="font-normal text-xl">{card.para}</p>
        <button className="bg-transparent border-[1px] border-[#ED653B] hover:shadow-xl transition text-[#ED653B] p-2 rounded-full sans font-semibold text-lg">
          Learn more &#8921;
        </button>
      </div>
      <div className="md:w-[50%] col-span-1 flex flex-col gap-8 items-center justify-center p-4">
        <img
          src={card.imgSrc}
          alt="about"
          className="object-cover h-full group-hover:drop-shadow-lg transition rounded-3xl"
        />
      </div>
    </section>
  );
}
