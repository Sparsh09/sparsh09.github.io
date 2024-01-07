import { SocialIcon } from "react-social-icons";
const SidebarDiv = (props) => {
  const value = props.value;

  function openTab(url) {
    window.open(url, "_blank");
  }
  return (
    <div className="flex flex-row items-center justify-between w-80 p-4">
      <button
        className="flex bg-transparent justify-evenly items-center text-[#89888e] transform transition-transform duration-300 hover:-translate-y-1 text-sm gap-4 p-3"
        onClick={() => openTab(value.url)}
      >
        {value.icon === "twitter" ? (
          <SocialIcon network="x" style={{ height: "40px", width: "40px" }} />
        ) : (
          <img
            height={25}
            width={25}
            src={"/assets/" + value.icon + ".svg"}
            alt={value.title}
          ></img>
        )}
        <span>{value.title}</span>
      </button>
    </div>
  );
};

export default SidebarDiv;
