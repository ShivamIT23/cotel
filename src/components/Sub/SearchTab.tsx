import { FaSearch } from "react-icons/fa";

const kolkataLocalities = [
  "Salt Lake",
  "Park Street",
  "Garia",
  "Behala",
  "New Town",
  "Dumdum",
  "Howrah",
  "Rajarhat",
  "Ballygunge",
  "Tollygunge",
  "Kasba",
  "Jadavpur",
  "Baranagar",
  "Kankurgachi",
  "Sealdah",
];

export default function SearchTab({
  location,
  setLocation,
  checkIn,
  setCheckIn,
  gender,
  setGender,
}: {
  location: string;
  setLocation: (val: string) => void;
  checkIn: string;
  setCheckIn: (val: string) => void;
  gender: string;
  setGender: (val: string) => void;
}) {
  return (
    <div className="flex items-center justify-between py-2 px-2 gap-2 border-gray-300 border-[1px] rounded-full shadow-md bg-white max-w-6xl min-w-[50vw] mx-auto">
      {/* Where */}
      <div className="flex-1 hover:bg-[#444823] hover:text-white py-2 group px-4 rounded-r-[4444px] rounded-l-full">
        <label className="block text-sm font-normal group-hover:text-white text-black">
          Where
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full text-sm group-hover:bg-[#444823] bg-transparent outline-none max-h-[2.2rem] overflow-y-auto pr-1"
          size={1}
        >
          <option value="">Select Locality</option>
          {kolkataLocalities.map((loc) => (
            <option key={loc} value={loc} className="text-sm py-1">
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="w-px h-8 bg-gray-300" />

      {/* Check In */}
      <div className="flex-1 hover:bg-[#444823] hover:text-white py-2 group px-4 rounded-[8px]">
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

      <div className="w-px h-8 bg-gray-300" />

      {/* Gender */}
      <div className="flex-1 hover:bg-[#444823] hover:text-white py-2 group px-4 rounded-l-[4444px] rounded-r-full">
        <label className="block text-sm font-normal group-hover:text-white text-black">
          Gender
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full text-sm group-hover:bg-[#444823] group-hover:text-white bg-transparent text-[#444823] outline-none"
        >
          {gender === "" && (
            <option value="" disabled hidden>
              Add your gender
            </option>
          )}
          <option value="">Any</option>
          <option value="boy">Boy</option>
          <option value="girl">Girl</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Search Button */}
      <button className=" p-3 rounded-full bg-[#4b4a26] text-white hover:bg-[#3e3d20]">
        <FaSearch />
      </button>
    </div>
  );
}
