import Image from "next/image"

const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      name: "Canva-like Card Designer App",
      img: "/images/card designer app.svg",
      label1: "Django",
      label2: "Python",
      label3: "Fabric.js",
      label4: "Async",
      link: "https://thijourney.com/art-prints/",
      code: "https://github.com/hongrosebara/thijourney.git",
    },
    {
      id: 2,
      name: "Nextjs Shopify Ecommerce",
      img: "/images/nextjs shopify ecommerce.jpg",
      label1: "Next.js",
      label2: "Shopify Storefront API",
      label3: "Tailwind CSS",
      link: "https://next-giftbeta-shopify.vercel.app/",
      code: "https://github.com/hongrosebara/next-giftbeta-shopify",
    },
    {
      id: 3,
      name: "Gift App With Countdown Tool",
      img: "/images/giftbeta with countdown-01.svg",
      label1: "Vue.js",
      label2: "Gridsome",
      label3: "Sass",
      link: "https://www.giftbeta.com/",
      code: "https://github.com/hongrosebara/giftbeta",
    },
    {
      id: 4,
      name: "Virtual Coffee App",
      img: "/images/wedreamofcoffee-01.svg",
      label1: "Nextjs",
      label2: "CSS",
      label3: "HTML",
      link: "https://www.wedreamofcoffee.com/",
      code: "https://github.com/hongrosebara/virtualcafe",
    }
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
            <span>{project.label4}</span>
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
