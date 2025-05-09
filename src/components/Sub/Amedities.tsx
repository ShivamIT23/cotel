export default function Amedities() {
  return (
    <section className="w-full flex flex-col items-center pt-[6vh] gap-6 justify-center">
      <h3 className="text-3xl font-semibold">Amenities we provide</h3>
      <div className="flex justify-center gap-8">
        <img
          src="/amedity/img1.png"
          alt="refrigerator"
          className="h-36 object-contain hover:drop-shadow-xl"
        />
        <img
          src="/amedity/img2.png"
          alt="A.C."
          className="h-36 object-contain hover:drop-shadow-xl"
        />
        <img
          src="/amedity/img3.png"
          alt="washing"
          className="h-36 object-contain hover:drop-shadow-xl"
        />
        <img
          src="/amedity/img4.png"
          alt="C.C.T.V."
          className="h-36 object-contain hover:drop-shadow-xl"
        />
      </div>
    </section>
  );
}
