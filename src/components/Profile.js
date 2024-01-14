import ProfileBody from "./ProfileBody";
import ProfileHead from "./ProfileHead";
import Skills from "./Skills";
const Profile = () => {
  return (
    <div className="w-full lg:m-4 rounded flex flex-col md:m-4 sm:m-0">
      <div className="w-full lg:m-4 rounded flex flex-col justify-around sm:m-0 md:m-4">
        <ProfileHead />
        <div className="h-full p-2">
          <h2 className="text-2xl text-white">Projects</h2>
          <div className="grid grid-cols">
            <ProfileBody />
          </div>
          <div className="flex justify-center p-2">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
