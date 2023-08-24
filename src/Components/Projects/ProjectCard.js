import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";
import { toast } from 'react-toastify'; 



function ProjectCard({ project }) {
  const { scrollChange } = useContext(ScrollContext);


  return (
    <VisibilitySensor
     
      onChange={(isVisible) => {
        if (isVisible) {
          scrollChange("projects");
        }
      }}
    ><>
      <a href={project?.url}>
      <div className="project-card">
        <div className="content-wrapper">
          <img src={projectImg} alt="" className="project-card-img" />
          <div className="card-content">
            <div className="project-name">{project?.title}</div>
            <div className="card-bio">{project?.description}</div>
          </div>
        </div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name d-flex flex-wrap gap-1">
              {project?.tech?.map((stack, i) => (
                <button className="btn btn-secondary text-white btn-sm" key={i}>{stack}</button>
              ))}
            </div>
          </div>
        </div>
      
      </div>
      
      </a>
    
     </>
    </VisibilitySensor>
  );
}

export default ProjectCard;
