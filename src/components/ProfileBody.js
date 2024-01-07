import Project from "./Project";

const ProfileBody = () => {
  let projectList = [
    {
      title: "Youtube Clone",
      description: "",
      image: "/assets/youtube.svg",
      alt: "Youtube Clone",
    },
    { title: "FileDrop", description: "", image: "", alt: "FileDrop" },
    {
      title: "WhatsApp Clone",
      description: "",
      image: "/assets/whatsapp.png",
      alt: "WhatsApp Clone",
    },
  ];
  return (
    <div className="h-52 grid grid-cols-2 md:grid-cols-4 gap-4">
      {projectList.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default ProfileBody;
