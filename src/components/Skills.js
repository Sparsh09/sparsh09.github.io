import SkillCard from "./SkillCard";

const Skills = () => {
  let skills = [
    { title: "Frontend", skills: ["HTML", "CSS", "React Js", "Angular Js"] },
    { title: "Backend", skills: ["Node JS", "Express JS", "Nest"] },
    { title: "Database", skills: ["Redis", "Mongo DB"] },
  ];
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-xl">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
        {skills.map((value) => {
          return <SkillCard value={value} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
