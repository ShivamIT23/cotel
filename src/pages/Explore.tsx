import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

interface Residence {
  name: string;
  address: string;
  contact: string;
}

const residences: Residence[] = [
  {
    name: "Ashapad (Girls)",
    address: "12A, Chakraberia Road, Near Terapanth Bhawan, Kolkata-700020",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Nivasa (Girls)",
    address: "2No., Ho-Chi Minh Sarani, Kolkata-700070",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Sienna (Boys)",
    address: "51B, Subhasini Ganguly Sarani, Kolkata-700025",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Shyamananda (Girls)",
    address: "32/A, Shyamananda Road, Kolkata-700025",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Kankurgachi (Girls)",
    address: "P70, Ramkrishna Samadhi Road, Kolkata-700054",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Ajanta (Boys)",
    address: "93/2 Baku Bagan Road, Kolkata-700025",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Northern Park (Boys)",
    address: "18B, Baran Bose First Lane, Kolkata-700020",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Elgin (Boys)",
    address: "12C Sarat Bose Road, Kolkata-700020",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "NBCC (Girls)",
    address:
      "CE Block, NBCC, Vibgyor Tower, Newtown, Action Area I, Kolkata-700156",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "37A Staywell (Boys)",
    address: "37A, Paddapukur Road, Chakraberia, Ballygunge, Kolkata-700019",
    contact: "Arihant Jain - 7435968713",
  },
  {
    name: "Newtown Suparna Villa",
    address: "Newtown, Mouza, Jatragachi, Purbapara, Kolkata-700157",
    contact: "Arihant Jain - 7435968713",
  },
];

const slideVariants = {
  initial: { x: "100%", opacity: 0 }, // Start offscreen right
  animate: { x: 0, opacity: 1 }, // Slide into center
  exit: {},
};

export default function Explore() {
  return (
    <motion.section
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: "spring",
        mass: 1,
        stiffness: 100,
        damping: 15,
      }}
      className="mt-[4vh] bg-[#FEFEF6] min-h-screen px-[6vw] w-svw py-[5vh]"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-center mb-12">
        Our Residences
      </h2>

      <div className="grid grid-cols-2 mx-auto sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-6xl ">
        {residences.map((residence, index) => (
          <div
            key={index}
            style={{
              border: "1.5px solid",
              borderImageSource:
                "linear-gradient(180deg, #A4AE55 0%, #444823 100%);",
            }}
            className="col-span-2 hover:shadow-xl transition rounded-md p-6 bg-[#FDF5E7] shadow-sm"
          >
            <div className="flex items-center justify-center mb-4">
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_397_58)">
                  <path
                    d="M47.6762 16.3823L25.6762 0.382278C25.3344 0.133825 24.9228 0 24.5002 0C24.0777 0 23.666 0.133825 23.3242 0.382278L1.32423 16.3823C0.895105 16.6942 0.60746 17.1638 0.524569 17.6877C0.483525 17.9472 0.493985 18.2122 0.555352 18.4676C0.616719 18.723 0.72779 18.9638 0.882225 19.1763C1.03666 19.3888 1.23143 19.5687 1.45542 19.7059C1.67941 19.8431 1.92824 19.9349 2.18768 19.9759C2.71166 20.0588 3.2471 19.9302 3.67623 19.6183L6.50023 17.5643V42.0003C6.50339 43.0602 6.92583 44.0757 7.67529 44.8252C8.42476 45.5747 9.44033 45.9971 10.5002 46.0003H18.5002V28.0003C18.5002 27.4698 18.7109 26.9611 19.086 26.5861C19.4611 26.211 19.9698 26.0003 20.5002 26.0003H28.5002C29.0307 26.0003 29.5394 26.211 29.9144 26.5861C30.2895 26.9611 30.5002 27.4698 30.5002 28.0003V46.0003H38.5002C39.5601 45.9971 40.5757 45.5747 41.3252 44.8252C42.0746 44.0757 42.4971 43.0602 42.5002 42.0003V17.5643L45.3242 19.6183C45.5367 19.7727 45.7775 19.8838 46.0329 19.9452C46.2883 20.0065 46.5533 20.017 46.8128 19.9759C47.0722 19.9349 47.321 19.8431 47.545 19.7059C47.769 19.5687 47.9638 19.3888 48.1182 19.1763C48.2727 18.9638 48.3837 18.723 48.4451 18.4676C48.5065 18.2122 48.5169 17.9472 48.4759 17.6877C48.4348 17.4283 48.3431 17.1795 48.2059 16.9555C48.0687 16.7315 47.8887 16.5367 47.6762 16.3823Z"
                    fill="#444823"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_397_58">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">
              {residence.name}
            </h3>
            <div className="flex items-start gap-2 font-normal mb-1">
              <MapPin className="w-5 h-5 mt-1" />
              <p>{residence.address}</p>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <Phone className="w-5 h-5 mt-1" />
              <p>
                <span className="font-normal">
                  {residence.contact.split(" - ")[0]}
                </span>{" "}
                - {residence.contact.split(" - ")[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
