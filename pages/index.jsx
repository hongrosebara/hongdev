import { Layout } from "@/components/common"
import ProjectCard from "@/components/ProjectCard"
import SkillCard from "@/components/SkillCard"

export default function Home() {
  return (
    <>
      <SkillCard />
      <ProjectCard />
    </>
  )
}

Home.Layout = Layout
