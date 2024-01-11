import { useState } from "react";
import useIsOnline from "../utils/useIsOnline";
import Contact from "./ContactInfo";
const ProfileHead = () => {
  let profileUrl = "/assets/Sparsh.jpeg";
  const isOnline = useIsOnline();
  const isOnlineColor = isOnline ? "rgb(34, 197, 94)" : "rgb(239 68 68)";
  const isOnlineTitle = isOnline ? "Online" : "Offline";
  const [showModal, setShowModal] = useState(false);

  return (
    <div class="flex w-full h-32">
      <div className="flex rounded-lg w-full  bg-[url(/assets/cover.jpeg)] bg-no-repeat bg-cover">
        <div className="flex justify-between items-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
          <div className="flex flex-row items-center">
            <div className="rounded-full bg-white h-[6.5rem] w-[6.5rem] flex justify-center items-center">
              <div class="rounded-full bg-yellow-300 h-[6rem] w-[6rem] items-center justify-center flex">
                <div className="rounded-full h-[5.5rem] w-[5.5rem]">
                  <span
                    className="absolute rounded-full h-[0.75rem] w-[0.75rem] z-[2] mt-20 ml-[4.5rem] bg-red-500"
                    style={{ backgroundColor: isOnlineColor }}
                    title={isOnlineTitle}
                  ></span>
                  <img
                    src={profileUrl}
                    alt="Sparsh Mehta"
                    className="rounded-full cursor-pointer"
                    onClick={() => setShowModal(true)}
                  ></img>
                </div>
              </div>
            </div>
            <span className="pl-4 text-white text-xl">Sparsh Mehta</span>
          </div>
          <div>
            <button
              className="bg-[#1c1b23] text-[#89888e] w-[10rem] h-[2rem] rounded-lg"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1iWs8_QLVxxJr_lFvs8dDZciF6F3kluyl/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Resume
            </button>
          </div>
        </div>
      </div>
      {showModal ? <Contact setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default ProfileHead;
