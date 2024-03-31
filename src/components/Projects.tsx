import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Acquiring the One Ring"
            des="Orchestrated a clandestine operation to locate and retrieve the One Ring, 
            Sauron's most potent weapon. Utilized a network of spies and informants."
            src={projectOne}
          />
          <ProjectsCard
            title="Terror Propagation"
            des="Utilized psychological warfare tactics, including propaganda campaigns and 
            targeted assassinations, to instill a sense of hopelessness among enemies."
            src={projectTwo}
          />
          <ProjectsCard
            title="Dark Arts Research"
            des="Oversaw research and development efforts to advance the study and practice 
            of dark magic and sorcery. "
            src={projectThree}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
