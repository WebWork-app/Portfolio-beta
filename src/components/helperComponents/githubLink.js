import { Github, CaretRightFill, Controller } from "react-bootstrap-icons";

function GithubLink({ project, repo }) {
  return (
    <div class="project-btns" data-aos="zoom-in-up">
      <a
        href={
          !repo.includes(Object.entries(project)[0][1][2])
            ? "javascript:void(0)"
            : "https://github.com/SaqibA1i/" + Object.entries(project)[0][1][2]
        }
        class={
          !repo.includes(Object.entries(project)[0][1][2])
            ? "disabled main-btn"
            : "main-btn"
        }
      >
        <Github
          style={{
            "padding-right": "10px",
          }}
          size={30}
        />
        Github
        <CaretRightFill
          style={{ "padding-left": "10px" }}
          class="arrow"
          size={25}
        />
      </a>
    </div>
  );
}

export default GithubLink;
