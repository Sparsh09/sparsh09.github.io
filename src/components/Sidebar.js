import SidebarDiv from "./SidebarDiv";

const Sidebar = () => {
  const sidebarList = [
    { title: "Github", icon: "github", url: "https://github.com/Sparsh09" },
    {
      title: "LinkedIn",
      icon: "linkedin",
      url: "https://in.linkedin.com/in/sparsh29",
    },
    {
      title: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/Sparsh_Mehta_",
    },
  ];
  return (
    <div className="flex flex-col h-100 bg-[#1c1b23] rounded-lg w-80 overflow-y-auto m-4">
      <h2 className="pt-4 pl-4 text-[#89888e] text-xl">Socials</h2>
      <div className="w-full items-start flex flex-col justify-center">
        {sidebarList.map((value) => {
          return <SidebarDiv value={value} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
