import Skill from '../components/Skill';
import skills from '../data/skillsData';

interface SkillsProps {
  darkMode: boolean;
}

function Skills({ darkMode }: SkillsProps): JSX.Element {
  return (
    <section className="relative w-full" id='skills-section'>
      <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 
                      top-16 sm:top-24 md:top-36 lg:top-44 xl:top-52 
                      grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
                      gap-2 sm:gap-3 md:gap-4 
                      skills">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Skill
              name={skill.name}
              image={skill.image}
              darkMode={darkMode}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;