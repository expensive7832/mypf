import React, { useContext, Fragment } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Fade from "react-reveal/Fade";
import "./about.css";
import { ScrollContext } from "../../Context/scroll";
import { aboutSection } from "../../techfolio";
import Heading from "../common/Heading";

function About() {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <Fragment>
     <div className="d-block d-md-none">
     <Heading heading={"About"} />
     </div>
      <section
        className="about_section section section2"
        id="aboutSection"
        name="about"
      >
        <VisibilitySensor
          onChange={(isVisible) => {
            if (isVisible) {
              scrollChange("about");
            }
          }}
        >
          <Fade bottom cascade>
            <div className="container">
              <div className="device">
                <div className="frame">
                  <div className="screen">
                    <div className="window-content">
                      <p>
                        <Typist
                        
                          cursor={{
                            show: true,
                            hideWhenDone: false,
                            hideWhenDoneDelay: 1000,
                          }}
                          avgTypingSpeed={200}
                          avgTypingDelay={20}
                        >
                          <p className="line">
                            
                            {aboutSection.admin}:
                            <span style={{ color: "#7f5af0" }}>~</span>$
                            {aboutSection.firstCommand}
                          </p>
                          <Typist.Delay ms={1500} />
                          <p className="line">
                            {aboutSection.admin}:
                            <span style={{ color: "#7f5af0" }}>~</span>$
                            {aboutSection.secondCommand}
                          </p>
                          <br />
                          <p className="line">{aboutSection.about}</p>
                          <span>
                           
                            {aboutSection.admin}:
                            <span style={{ color: "#7f5af0" }}>~</span>${" "}
                          </span>
                        </Typist>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </VisibilitySensor>
      </section>
    </Fragment>
  );
}

export default About;
