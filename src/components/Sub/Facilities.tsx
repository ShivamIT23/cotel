const facilityList = [
  {
    imgSrc: "/facility/img1.png",
    title: "Washing Machine",
  },
  {
    imgSrc: "/facility/img2.png",
    title: "House-Keeping",
  },
  {
    imgSrc: "/facility/img3.png",
    title: "Parking",
  },
  {
    imgSrc: "/facility/img4.png",
    title: "Free Wi-Fi",
  },
  {
    imgSrc: "/facility/img5.png",
    title: "Refrigerator",
  },
  {
    imgSrc: "/facility/img6.png",
    title: "Air-Conditioner",
  },
  {
    imgSrc: "/facility/img7.png",
    title: "Kitchen Appliances",
  },
  {
    imgSrc: "/facility/img8.png",
    title: "TV",
  },
  {
    imgSrc: "/facility/img9.png",
    title: "Dining Area",
  },
  {
    imgSrc: "/facility/img10.png",
    title: "CCTV Surveillance",
  },
  {
    imgSrc: "/facility/img11.png",
    title: "Clean Toilets",
  },
  {
    imgSrc: "/facility/img12.png",
    title: "Comfy Beds",
  },
];

export default function Facilities() {
  return (
    <section className="w-full flex flex-col items-center gap-4 xl:gap-10 justify-center">
      <h3 className="text-3xl xl:text-6xl font-semibold">Our Facilities</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center gap-8">
        {facilityList.map((list, idx) => {
          return (
            <div key={idx} className="flex flex-col w-32 xl:w-40 group">
              <img
                src={list.imgSrc}
                alt={list.title}
                className="w-full group-hover:drop-shadow-xl"
              />
              <p className="w-full flex justify-center text-sm font-[550] sans">
                {list.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
