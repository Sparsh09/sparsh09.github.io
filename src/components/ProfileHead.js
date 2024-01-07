const ProfileHead = () => {
  let profileUrl = "/assets/Sparsh.jpeg";
  return (
    <div class="flex w-full h-36">
      <div className="flex rounded-lg w-full  bg-[url(/assets/cover.jpeg)] bg-no-repeat bg-cover">
        <div className="flex justify-between items-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
          <div className="flex flex-row items-center">
            <div className="rounded-full bg-white h-[6.5rem] w-[6.5rem] flex justify-center items-center">
              <div class="rounded-full bg-yellow-300 h-[6rem] w-[6rem] items-center justify-center flex">
                <div className="rounded-full h-[5.5rem] w-[5.5rem]">
                  <img
                    src={profileUrl}
                    alt="Sparsh Mehta"
                    className="rounded-full"
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
    </div>
  );
};

export default ProfileHead;
