import { useEffect, useState } from "react";

const SkillCard = (props) => {
  const [color, setColor] = useState();
  useEffect(() => {
    const randomColor = [
      "rgb(239 68 68)",
      "rgb(250 204 21)",
      "rgb(52 211 153)",
      "rgb(34 211 238)",
    ];

    let rColor = randomColor[Math.floor(Math.random() * randomColor.length)];
    setColor(rColor);
  }, []);
  return (
    <div className="flex flex-col bg-[#1c1b23] h-[10rem] rounded-xl ml-4 mt-4">
      <h1 className="text-[#89888e] pl-4 pt-3">{props.value.title}</h1>
      <div className="flex flex-wrap gap-4 p-4">
        {props.value.skills.map((skill) => {
          return (
            <div
              className={`rounded-md bg-body text-xs text-primary text-[#89888e] p-2 border`}
              style={{ borderColor: color }}
            >
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
