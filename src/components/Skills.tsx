import Card from "./Card";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <Title title="Skills" des="What I Do" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
          <Card
            title="Commander of Sauron's Forces"
            des=" I command vast armies of orcs and trolls in the war against the free 
            peoples, orchestrating strategic campaigns to spread fear and destruction."
          />
          <Card
            title="Incarnation of Terror"
            des="My presence alone instills fear and despair in the hearts of my enemies. 
            I was instrumental in paving the way for Sauron's conquest."
          />
          <Card
            title="Agent of Corruption"
            des="By turning the leaders of nations to darkness, I undermined the strength 
            and unity of the free peoples, paving the way for their eventual downfall."
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Skills;
