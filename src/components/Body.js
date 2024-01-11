import Profile from "./Profile";
import Sidebar from "./Sidebar";

const Body = () => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div
      className="flex flex-row h-lvh w-lvw bg-[#14131a] sm:overflow-auto md:overflow-auto"
      style={{ overflow: "auto" }}
    >
      {!isMobile ? <Sidebar /> : null}
      <Profile />
    </div>
  );
};

export default Body;
