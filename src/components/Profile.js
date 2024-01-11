import ProfileBody from "./ProfileBody";
import ProfileHead from "./ProfileHead";
import Skills from "./Skills";
const Profile = () => {
  return (
    <div className="w-full m-4 rounded flex flex-col">
      <div className="w-full m-4 rounded flex flex-col justify-around">
        <ProfileHead />
        <div className="h-full">
          <h2 className="text-2xl text-white">Projects</h2>
          <div className="grid grid-cols">
            <ProfileBody />
          </div>
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
