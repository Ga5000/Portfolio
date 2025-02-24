import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Skills from './Skills';

interface HomeProps {
  darkMode: boolean;
  isEnglish: boolean; 
}

const Home: React.FC<HomeProps> = ({ darkMode, isEnglish }) => {
  return (
    <section className="relative" id="home-section">
      <div className="absolute left-52 top-52 flex flex-col animate-home">
        <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-7xl animate-child delay-0`}>
          <span className="text-green-600 font-semibold cursor-pointer">Gabriel</span> Lisboa
        </h1>
        <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold italic text-3xl ml-3 mt-2 animate-child delay-1`}>
          {isEnglish ? 'CS Student' : 'Estudante de Ciência da Computação'}
        </h3>
        <ul className="flex space-x-4 ml-5 mt-10 animate-child delay-2">
          <li>
            <a
              href="https://github.com/Ga5000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer transition-transform hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                style={{ color: darkMode ? "white" : "black", transition: "color 0.5s ease" }}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/gabriel-lisboa05"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:-translate-y-1"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                style={{ color: "blue" }}
              />
            </a>
          </li>
        </ul>
      </div>
      <Skills darkMode={darkMode} />
    </section>
  );
};

export default Home;