import Counter from "./counter";
import Facilities from "./Facilities";

export default function Category() {
  return (
    <section className="min-h-[30vh] h-fit flex gap-6 gap-y-[10vh] w-full flex-col my-[13vh] px-[5vw]">
      <div className="flex flex-col sm:flex-row justify-evenly w-full gap-6 font-bold mx-auto">
        <div className="flex flex-col items-center gap-1 text-3xl sm:text-2xl lg:text-3xl">
          <h3 className=" text-8xl sm:text-5xl xl:text-8xl flex items-center">
            <Counter to={15} />+
          </h3>
          <p>Accomodations</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-3xl sm:text-2xl lg:text-3xl">
          <h3 className=" text-8xl sm:text-5xl xl:text-8xl flex items-center">
            <Counter to={200} duration={4} />+
          </h3>
          <p>Rooms</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-3xl sm:text-2xl lg:text-3xl">
          <h3 className=" text-8xl sm:text-5xl xl:text-8xl flex items-center">
            <Counter to={400} duration={8} />+
          </h3>
          <p>Guests</p>
        </div>
      </div>
      <Facilities />
    </section>
  );
}
