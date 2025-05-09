import { useLocation } from "react-router-dom";
import { residenceList } from "../lib/residenceInfo"; // adjust path as needed
import { useEffect, useState } from "react";

type Residence = {
  title: string;
  location: string;
  contactInfo: {
    contactName: string;
    contactNum: number;
  };
  mainSrc: string[];
  facilities: {
    dining: string[];
    security: string[];
    healthcare: string[];
  };
  bedTypes: {
    type: string;
    price: number;
  }[];
  additionalImages: string[];
};

export default function ResidencePage() {
  const location = useLocation();
  const [residence, setResidence] = useState<Residence | null>(null);

  useEffect(() => {
    const nameFromPath = decodeURIComponent(
      location.pathname.split("/").pop()?.toLowerCase() || ""
    );
    const matched = residenceList.find((r) =>
      r.title.toLowerCase().includes(nameFromPath)
    );
    setResidence(matched || null);
  }, [location.pathname]);

  if (!residence)
    return <div className="text-center py-10">Loading or Not Found</div>;

  return (
    <div className="w-svw px-[15vw] lg:px-[20vw] mx-auto py-6 bg-[#FEFEF6] ">
      <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-1">
        {residence.title}
      </h1>
      <p className="text-gray-600 text-lg lg:text-xl xl:text-2xl mb-4">
        {residence.location}
      </p>
      <div className="flex flex-col md:flex-row gap-4 mb-6 h-fit">
        <div className="w-[50%] h-fit">
          <img
            src={residence.mainSrc[0]}
            alt="Image1"
            className=" aspect-auto w-full object-cover"
          />
        </div>
        <div className="w-[50%] grid grid-cols-2 gap-2">
          {residence.mainSrc.map((src, idx) => {
            return idx == 0 ? null : (
              <img
                key={idx}
                src={src}
                alt="room"
                className="w-full object-contain rounded"
              />
            );
          })}
        </div>
      </div>

      <div className="bg-white shadow-md p-4 rounded-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Elgin Facilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            {Object.entries(residence.facilities).map(([category, items]) => (
              <li key={category} className="font-medium">
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <ul className="list-disc pl-6 text-sm font-normal">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Types of Bed</h2>
          <ul className="space-y-1">
            {residence.bedTypes.map((bed, i) => (
              <li key={i} className="flex justify-between border-b pb-1">
                <span className="font-medium">{bed.type}</span>
                <span className="text-gray-700">
                  ₹{bed.price.toLocaleString()}/month
                </span>
              </li>
            ))}
          </ul>

          <form className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <input type="date" className="w-full p-2 border rounded" />
            <select className="w-full p-2 border rounded">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
      <h1 className="text-3xl lg:text-4xl xl:text-5xl w-full flex justify-center my-[8vh] font-bold mb-1">
        More of {residence.title.split(" ")[0]}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        {residence.additionalImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="more"
            className="w-full object-cover hover:drop-shadow-lg transition aspect-square rounded-3xl"
          />
        ))}
      </div>
    </div>
  );
}
