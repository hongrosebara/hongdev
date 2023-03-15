import Image from "next/image"

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      name: "DESIGN PORTFOLIO",
      img: "/images/thumbnail-project-1-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo",
      code: "https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo",
    },
    {
      id: 2,
      name: "E-LEARNING LANDING PAGE",
      img: "/images/thumbnail-project-2-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q",
      code: "https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q",
    },
    {
      id: 3,
      name: "TODO WEB APP",
      img: "/images/thumbnail-project-3-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: "JAVASCRIPT",
      link: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW",
      code: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW",
    },
    {
      id: 4,
      name: "ENTERTAINMENT WEB APP",
      img: "/images/thumbnail-project-4-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: "JAVASCRIPT",
      link: "https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X",
      code: "https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X",
    },
    {
      id: 5,
      name: "MEMORY GAME",
      img: "/images/thumbnail-project-5-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: "JAVASCRIPT",
      link: "https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM",
      code: "https://www.frontendmentor.io/challenges/memory-game-vse4WFPvM",
    },
    {
      id: 6,
      name: "ART GALLERY SHOWCASE",
      img: "/images/thumbnail-project-6-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: "JAVASCRIPT",
      link: "https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6",
      code: "https://www.frontendmentor.io/challenges/galleria-slideshow-site-tEA4pwsa6",
    },
  ]

  return (
    <section className="section-projects">
      <div className="project-header">
        <h1 className="project-heading">Projects</h1>
        <div className="project-contact">CONTACT ME</div>
      </div>
      <div className="project-main">
        {projects.map((project) => (
          <figure key={project.id} className="project-card">
            <div className="project-card__image">
              <Image
                src={project.img}
                alt={project.name}
                width={540}
                height={400}
              />
              <div className="project-card__overlay">
                <div className="project-card__overlay-links">
                  <div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  </div>
                  <div>
                    <a href={project.code} target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h2>{project.name}</h2>
            <span>{project.label1}</span>
            <span>{project.label2}</span>
            <span>{project.label3}</span>
            <div className="project-card__links">
              <div className="contact-me">
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
              <div className="contact-me">
                <a href={project.code} target="_blank" rel="noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ProjectCard
