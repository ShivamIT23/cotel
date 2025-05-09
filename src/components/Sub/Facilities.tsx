export default function Facilities() {
  return (
    <section className="w-full flex flex-col items-center gap-3 justify-center">
      <h3 className="text-3xl font-semibold">Our Facilities</h3>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col w-32 group">
          <img
            src="/facility/img1.png"
            alt="washing"
            className="w-32 group-hover:drop-shadow-xl"
          />
          <p className="w-full flex justify-center text-sm font-[550] sans">
            Washing Machine
          </p>
        </div>
        <div className="flex flex-col w-32 group">
          <img
            src="/facility/img2.png"
            alt="washing"
            className="w-32 group-hover:drop-shadow-xl"
          />
          <p className="w-full flex justify-center text-sm font-[550] sans">
            House-Keeping
          </p>
        </div>
        <div className="flex flex-col w-32 group">
          <img
            src="/facility/img3.png"
            alt="washing"
            className="w-32 group-hover:drop-shadow-xl"
          />
          <p className="w-full flex justify-center text-sm font-[550] sans">
            Parking
          </p>
        </div>
        <div className="flex flex-col w-32 group">
          <img
            src="/facility/img4.png"
            alt="washing"
            className="w-32 group-hover:drop-shadow-xl"
          />
          <p className="w-full flex justify-center text-sm font-[550] sans">
            Free Wi-Fi
          </p>
        </div>
        <div className="flex flex-col w-32 group">
          <img
            src="/facility/img5.png"
            alt="washing"
            className="w-32 group-hover:drop-shadow-xl"
          />
          <p className="w-full sans flex justify-center text-sm font-[550]">
            Refrigerator
          </p>
        </div>
        <div className="flex flex-col w-32 group">
          <img
            src="/facility/img6.png"
            alt="washing"
            className="w-32 group-hover:drop-shadow-xl"
          />
          <p className="w-full sans flex justify-center text-sm font-[550]">
            Air-Conditioner
          </p>
        </div>
      </div>
    </section>
  );
}
