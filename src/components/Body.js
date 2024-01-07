import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex flex-row h-lvh w-lvw bg-[#14131a]">
      <Sidebar />
      <Profile />
    </div>
  );
};

export default Body;
