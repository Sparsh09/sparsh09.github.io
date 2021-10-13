import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
// import code from "assets/code.gif";
// import down from "../../../public/assets/down.png";


export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
      init(textRef.current, {   
          backDelay: 1500,
          backSpeed:60,
          showCursor:true,
          strings: ["Full-Stack Developer", "React-Native & Flutter Developer","Data-Scientist"],
      }); 
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
//           <img src="assets/code.gif" alt="" />
              <div style="width:100%;height:0;padding-bottom:56%;position:relative;">
                <iframe src="https://giphy.com/embed/RbDKaczqWovIugyJmW" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen />
              </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hola,there!! I'm </h2>
          <h1>Sparsh Mehta</h1>
          <h3>
            <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
