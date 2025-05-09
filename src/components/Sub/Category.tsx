import Amedities from "./Amedities";
import Facilities from "./Facilities";

export default function Category() {
  return (
    <section className="min-h-[30vh] h-fit flex gap-6 gap-y-[10vh] flex-col my-[13vh] px-[5vw]">
      <div className="flex justify-evenly w-full">
        <div className="flex flex-col items-center gap-1 text-xl font-medium">
          <h3 className="text-6xl flex items-center font-semibold">15+</h3>
          <p>Accomodations</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-xl font-medium">
          <h3 className="text-6xl flex items-center font-semibold">200+</h3>
          <p>Rooms</p>
        </div>
        <div className="flex flex-col items-center gap-1 text-xl font-medium">
          <h3 className="text-6xl flex items-center font-semibold">400+</h3>
          <p>Guests</p>
        </div>
      </div>
      <Facilities />
      <Amedities />
    </section>
  );
}
