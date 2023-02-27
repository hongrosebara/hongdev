import Image from "next/image"

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      name: "Card Designer App",
      img: "/images/thumbnail-project-1-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://thijourney.com/",
      code: "https://github.com/hongrosebara/thijourney",
    },
    {
      id: 2,
      name: "Gift App",
      img: "/images/thumbnail-project-2-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://giftbeta.com/",
      code: "https://github.com/hongrosebara/giftbeta",
    },
    {
      id: 3,
      name: "Design Porfolio",
      img: "/images/thumbnail-project-3-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://thijourney.com/",
      code: "https://github.com/hongrosebara/thijourney",
    },
    {
      id: 4,
      name: "Design Porfolio",
      img: "/images/thumbnail-project-4-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://thijourney.com/",
      code: "https://github.com/hongrosebara/thijourney",
    },
    {
      id: 5,
      name: "Design Porfolio",
      img: "/images/thumbnail-project-5-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://thijourney.com/",
      code: "https://github.com/hongrosebara/thijourney",
    },
    {
      id: 6,
      name: "Design Porfolio",
      img: "/images/thumbnail-project-6-large.webp",
      label1: "HTML",
      label2: "CSS",
      label3: null,
      link: "https://thijourney.com/",
      code: "https://github.com/hongrosebara/thijourney",
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
              <Image src={project.img} alt={project.name} width={540} height={400} />
              <div className="project-card__overlay">
                <div className="project-card__overlay-link">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>

                <div className="project-card__overlay-link">
                  <a href={project.code} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <h2>{project.name}</h2>
            <span>{project.label1}</span>
            <span>{project.label2}</span>
            <span>{project.label3}</span>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default ProjectCard
