import useIsOnline from "../utils/useIsOnline";

const Avatar = () => {
  const isOnline = useIsOnline();
  const isOnlineColor = isOnline ? "rgb(34, 197, 94)" : "rgb(239 68 68)";
  const isOnlineTitle = isOnline ? "Online" : "Offline";

  return (
    <div
      className="w-full flex justify-end cursor-pointer"
      title="User"
      onClick={() => {}}
    >
      <img
        src="/assets/avatar.png"
        alt="Avatar"
        height={40}
        width={40}
        className="rounded-full absolute z-[1]"
      ></img>
      <span
        className="rounded-full h-[0.75rem] w-[0.75rem] z-[2] mt-7 mr-[-0.15rem] bg-red-500"
        style={{ backgroundColor: isOnlineColor }}
        title={isOnlineTitle}
      ></span>
    </div>
  );
};

export default Avatar;
