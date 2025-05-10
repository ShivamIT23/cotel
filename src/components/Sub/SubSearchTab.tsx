export default function SubSearchTab({
  name,
  setName,
  checkIn,
  setCheckIn,
  bedType,
  setBedType,
  bedOption,
}: {
  name: string;
  setName: (val: string) => void;
  checkIn: string;
  setCheckIn: (val: string) => void;
  bedType: string;
  setBedType: (val: string) => void;
  bedOption: {
    type: string;
    price: number;
  }[];
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-2 px-2 md:gap-2 border-gray-300 border-[1px] rounded-full shadow-md bg-white max-w-[120%] md:max-w-[150%] w-fit min-w-[30vw] mx-auto">
      {/* Name */}
      <div className="md:w-[35%] hover:bg-[#444823] hover:text-white m-2 md:m-0 py-6 md:py-2 group px-4 rounded-b-[4444px] md:rounded-r-[4444px] rounded-t-full md:rounded-l-full">
        <label className="block text-sm font-normal group-hover:text-white text-black">
          Name
        </label>
        <input
          type="text"
          placeholder="eg: khusboo"
          className="w-[110%] group-hover:bg-white bg-transparent group-hover:text-black rounded-3xl"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="w-px h-16 md:h-8 bg-gray-300 rotate-90 md:rotate-0" />

      {/* Check In */}
      <div className="md:w-[35%] hover:bg-[#444823] hover:text-white py-2 group px-4 rounded-[8px]">
        <label className="block text-sm font-normal group-hover:text-white text-black">
          Check in
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full group-hover:bg-[#444823] text-sm outline-none"
        />
      </div>

      <div className="w-px h-16 md:h-8 bg-gray-300 rotate-90 md:rotate-0" />

      {/* Bed Type */}
      <div className="md:w-[35%] hover:bg-[#444823] hover:text-white m-2 md:m-0 py-2 group px-4 rounded-t-[4444px] md:rounded-l-[4444px] rounded-b-full md:rounded-r-full">
        <label className="block text-sm font-normal group-hover:text-white whitespace-nowrap text-black">
          Bed Type
        </label>
        <select
          value={bedType}
          onChange={(e) => setBedType(e.target.value)}
          className="w-full text-sm group-hover:bg-[#444823] group-hover:text-white bg-transparent text-[#444823] outline-none"
        >
          {bedType === "" && (
            <option value="" disabled hidden>
              Add Bed
            </option>
          )}
          <option value="">Any</option>
          {[
            ...new Set(
              bedOption.map((b) => {
                const cleaned = b.type.split(/[\s-]/)[0]; // split on space or hyphen
                return (
                  cleaned.charAt(0).toUpperCase() +
                  cleaned.slice(1).toLowerCase()
                );
              })
            ),
          ].map((bed, idx) => (
            <option key={idx} value={bed.toLowerCase()}>
              {bed}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
