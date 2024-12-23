import React from "react";

function Projects() {
  const projects = [
    {
      title: "BMI Calculator",
      description:
        "This project has been created by using HTML , CSS  , JAVASCRIPT .",
      icon: "fa-solid fa-heart-pulse",
      projectLink: "https://bmicalciproject.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "This project has been created by using HTML , CSS , BOOTSTRAP 5 , JAVASCRIPT , REACT JS.",
      icon: "fa-solid fa-user-tie",
      projectLink: "https://my-resume-portfolio-website.netlify.app/",
    },
    {
      title: "Fitness Vibe Website",
      description:
        "This project has been created by using HTML , CSS , BOOTSTRAP 5 , JAVASCRIPT , REACT JS. ",
      icon: "fa-solid fa-dumbbell",
      projectLink: "https://fitness-vibe.netlify.app/",
    },
    {
      title: "Sweet Cafe Website",
      description:
        "This project has been created by using HTML, CSS, BOOTSTRAP 5, JAVASCRIPT, REACT JS, AI.",
      icon: "fa-solid fa-mug-saucer",
      projectLink: "https://sweet-cafe-website.netlify.app/",
    },

    {
      title: "Ms. Foodie Restarant Website",
      description:
        "This project has been created by using HTML , CSS , BOOTSTRAP 5, JAVASCRIPT, REACT JS, AI. ",
      icon: "fa-solid fa-utensils",
      projectLink: "https://ms-foodie-restaurant.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="projects bg-light p-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <i className={`${project.icon} fa-3x mb-3`}></i>
                  {/* Adding Icon */}
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Click Me</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
