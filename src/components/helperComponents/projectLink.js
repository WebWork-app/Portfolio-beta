import { Globe, CaretRightFill, Controller } from "react-bootstrap-icons";

function ProjectLink({ link, projectName }) {
  return (
    <div class="project-btns" data-aos="zoom-in-up">
      {link[projectName] && (
        <a href={link[projectName]} class="main-btn main-link-btn">
          <Globe
            style={{
              "padding-right": "10px",
            }}
            size={30}
          />
          Link
          <CaretRightFill
            style={{ "padding-left": "10px" }}
            class="arrow"
            size={25}
          />
        </a>
      )}
    </div>
  );
}

export default ProjectLink;
