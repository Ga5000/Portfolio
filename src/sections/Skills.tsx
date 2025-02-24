import Skill from '../components/Skill';
import skills from '../data/skillsData'; 

interface SkillsProps {
  darkMode: boolean;
}

function Skills({ darkMode }: SkillsProps): JSX.Element {
  return (
    <section className="relative" id='skills-section'>
      <div className="absolute right-20 top-52 grid grid-cols-4 gap-4">
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