import Project from "./Project";

const ProfileBody = () => {
  let projectList = [
    // {
    //   title: "Youtube Clone",
    //   description: "",
    //   image: "/assets/youtube.svg",
    //   alt: "Youtube Clone",
    // },
    // { title: "FileDrop", description: "", image: "", alt: "FileDrop" },
    {
      title: "WhatsApp UI Clone",
      description:
        "Created WhatsApp UI Using React-Native, Type Script, and its libraries.",
      image: "/assets/whatsapp.png",
      alt: "WhatsApp Clone",
    },
    {
      title: "Crowd Funding Contract",
      description: "Application for crowd funding created in Solidity.",
      image: "/assets/crowd-funding.webp",
      alt: "Crowdfunding Contract",
    },
    {
      title: "Covid-19 App",
      image: "/assets/covid-19.webp",
      description:
        "A Flutter application that displays the global COVID-19 case count.",
      alt: "Covid-19 App",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
      {projectList.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default ProfileBody;
