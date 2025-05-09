import Button from "./Sub/Button";

export default function Footer() {
  return (
    <section className="w-full min-h-screen h-fit">
      <div className=" min-h-[40vh] h-fit pt-[6vh] pb-[10vh] px-[8vw] text-[#39302A]">
        <h2 className="w-full flex justify-center text-4xl lg:text-5xl xl:text-7xl font-semibold pt-[3vh] pb-[6vh] text-center">
          Contact Us
        </h2>
        <section
          style={{
            backgroundColor: "#ECEEDD",
          }}
          className="w-[90%] md:flex flex-row-reverse rounded-3xl h-fit mx-auto min-h-[60vh] gap-4 group"
        >
          <div className="md:w-[50%] text-[#39302A] p-4 my-auto h-fit min-h-full col-span-1 flex flex-col items-start text-start gap-8 justify-center">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#1A1F13] font-medium text-xl">Name</label>
              <input
                type="text"
                className="rounded-[14px] text-[#575757] p-3 border-[1px] border-[#44482380]"
                placeholder="Eg : Khusboo Chainani"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#1A1F13] font-medium text-xl">
                Phone Number
              </label>
              <input
                type="number"
                className="rounded-[14px] text-[#575757] p-3 border-[1px] border-[#44482380]"
                placeholder="Eg : 9836623291"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#1A1F13] font-medium text-xl">
                Email Address
              </label>
              <input
                type="text"
                className="rounded-[14px] text-[#575757] p-3 border-[1px] border-[#44482380]"
                placeholder="Eg : khusboo@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-[#1A1F13] font-medium text-xl">
                Select Your Gender
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="boy"
                    className="accent-[#1A1F13]"
                  />
                  <span>Boy</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="girl"
                    className="accent-[#1A1F13]"
                  />
                  <span>Girl</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    className="accent-[#1A1F13]"
                  />
                  <span>Other</span>
                </label>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <Button>Submit &#8919;</Button>
            </div>
          </div>
          <div className="md:w-[50%] col-span-1 flex flex-col gap-8 items-center justify-center p-4">
            <img
              src="/footer.png"
              alt="about"
              className="object-cover h-full group-hover:drop-shadow-lg transition rounded-3xl"
            />
          </div>
        </section>
      </div>
      <footer className="bg-[#FEFEF6] gap-[6%] min-h-[20vh] h-fit flex flex-col md:flex-row justify-between pt-[6vh] md:pb-[3vh] px-[8vw] text-[#0A92C1] font-bold sans text-[16px]">
        <div className="flex flex-col justify-between w-[45%] mt-[2vh] md:my-[3vh]">
          <p className="cursor-pointer text-[#5C5423]">
            We at Cotel are excited to partner with you in providing exceptional
            experiences for our guests. Together, let's create memorable stays
            that keep them coming back.
          </p>
          <Button>
            Contact Us <img className="h-4 aspect-auto" src="/phone.png" />
          </Button>
        </div>
        <div className="flex flex-col justify-between w-[20%] text-[#5C5423] h-full mb-4 md:mb-0 md:my-[1vh]">
          <img src="/home/logo1.png" alt="logo-footer" className="h-1/2 " />
          <div className="max-w-full w-full flex justify-center font-medium text-[14px] gap-2">
            <p>COMFORT</p>
            <div className="h-4 w-[1px] bg-[#5C5423]"></div>
            <p>COMMUNITY </p>
            <div className="h-4 w-[1px] bg-[#5C5423]"></div>
            <p>SPACE</p>
          </div>
          <div className="max-w-full w-full flex text-[16px] justify-center">
            PREMIUM PG ACCOMODATION
          </div>
        </div>
        <div className="flex flex-col justify-between w-[30%] gap-3 mt-[2vh] md:my-[3vh] text-[#565656]">
          <h3 className="text-2xl text-[#39302A]">Contact Us</h3>
          <div className="w-full -px-5 flex gap-2 font-medium">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z"
                stroke="#1A1F13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z"
                stroke="#1A1F13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>12 A, Chakraberia Ln Ballygunge, 700019</p>
          </div>
          <div className="w-full -px-5 flex gap-2 font-medium">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.50246 4.25722C9.19873 3.4979 8.46332 3 7.64551 3H4.89474C3.8483 3 3 3.8481 3 4.89453C3 13.7892 10.2108 21 19.1055 21C20.1519 21 21 20.1516 21 19.1052L21.0005 16.354C21.0005 15.5361 20.5027 14.8009 19.7434 14.4971L17.1069 13.4429C16.4249 13.1701 15.6483 13.2929 15.0839 13.7632L14.4035 14.3307C13.6089 14.9929 12.4396 14.9402 11.7082 14.2088L9.79222 12.2911C9.06079 11.5596 9.00673 10.3913 9.66895 9.59668L10.2363 8.9163C10.7066 8.35195 10.8305 7.57516 10.5577 6.89309L9.50246 4.25722Z"
                stroke="#1A1F13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>+91 74393 68713</p>
          </div>
          <div className="w-full -px-5 flex gap-2 font-medium">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                stroke="#1A1F13"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p>cotel.arihant@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[10%] gap-3 mt-[2vh] md:my-[3vh]text-[#565656]">
          <h3 className="text-2xl text-[#39302A]">Follow Us</h3>
        </div>
      </footer>
    </section>
  );
}
