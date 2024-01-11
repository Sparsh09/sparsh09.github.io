const Project = (props) => {
  const project = props.project;
  return (
    <div className="flex flex-col bg-white mt-4 ml-4 h-[11rem] w-[14rem] rounded-xl items-center justify-center">
      <div className="items-center p-2 justify-center flex w-full mt-0 h-[40%]">
        <img
          src={project.image}
          alt={project.alt}
          className="w-full h-full"
        ></img>
      </div>
      <div className="flex flex-col h-[50%] w-full border border-t-2 border-l-0 border-r-0 border-b-0 justify-center items-center p-[0.5rem]">
        <h3 className="text-md">{project.title}</h3>
        <span className="text-sm">{project.description}</span>
      </div>
    </div>
  );
};

export default Project;
