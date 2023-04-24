import { Layout } from "@/components/common"
import ProjectCard from "@/components/ProjectCard"
import SkillCard from "@/components/SkillCard"
import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <>
      <NextSeo
        title="Hong Le Web Developer"
        description="Welcome to my website! I am a talented front end web developer with a passion for creating stunning and responsive websites that leave a lasting impression. With expertise in HTML, CSS, JavaScript, and more, I can bring your online vision to life. Browse my portfolio to see some of my latest projects and let's work together to build your next digital masterpiece."
      />
      <SkillCard />
      <ProjectCard />
    </>
  )
}

Home.Layout = Layout
