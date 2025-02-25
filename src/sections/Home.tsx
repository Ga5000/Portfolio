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
      
      </div>
      <Skills darkMode={darkMode} />
    </section>
  );
};

export default Home;