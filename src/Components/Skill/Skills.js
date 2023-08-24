import React, { useContext, Fragment, useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./skills.css";
import VisibilitySensor from "react-visibility-sensor";
import skillsIllustration from "../../assets/imgs/focused_working.svg";
import { skillsSection } from "../../techfolio";
import { ScrollContext } from "../../Context/scroll";
import fire from "./../../assets/imgs/fire.png";
import Heading from "../common/Heading";
import { FaCss3Alt, FaHtml5, FaReact, FaPython } from "react-icons/fa"
import { TbBrandJavascript, TbBrandTailwind, TbBrandNextjs, TbBrandDjango} from "react-icons/tb"
import { BsFillBootstrapFill } from "react-icons/bs"

function Skills() {



  const { scrollChange } = useContext(ScrollContext);
 
  const skillsTagLines = skillsSection.skillsTagLines.map((tagline, i) => {
    return (
      <h3 className="skills_section_skill" key={i}>
        <img
          draggable="false"
          className="emoji"
          alt="💠"
          src={fire}
        ></img>
        {tagline}
      </h3>
    );
  });

  return (
    <Fragment>
      <div className="d-block d-md-none">
      <Heading heading={"Skills"} style={{ marginBottom: "60px" }} />
      </div>
      <section className="" id="skillsSection" name="skills">
        <div className="site-container">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                scrollChange("skills");
              }
            }}
          >
            <div className="row justify-content-center">
              <div className="col-xs-12 col-md-6" >
                <Flip left>
              
                  <img src={skillsIllustration} alt="skills" />{" "}
                </Flip>
              </div>
              <div className="col-xs-12 col-md-6">
                <Fade bottom cascade>
                 <div className="d-flex flex-wrap gap-3 ">
                 <FaHtml5 size={32}/>
                 <FaReact size={32}/>
                 <FaCss3Alt size={32}/>
                 <TbBrandJavascript size={32}/>
                 <BsFillBootstrapFill size={32}/>
                 <TbBrandTailwind size={32}/>
                 <TbBrandNextjs size={32}/>
                 <FaPython size={32}/>
                 <TbBrandDjango size={32}/>
                 </div>
                  {skillsTagLines}
                </Fade>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>
    </Fragment>
  );
}

export default Skills;
