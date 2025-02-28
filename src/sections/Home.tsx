import Skills from './Skills';

interface HomeProps {
  darkMode: boolean;
  isEnglish: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode, isEnglish }) => {
  return (
    <section className="relative w-full min-h-screen" id="home-section">
      <div className="absolute left-4 sm:left-12 md:left-24 lg:left-36 xl:left-52 
                      top-16 sm:top-24 md:top-36 lg:top-44 xl:top-52 
                      flex flex-col animate-home">
        <h1 className={`${darkMode ? 'text-white' : 'text-black'} text-4xl sm:text-5xl md:text-6xl xl:text-7xl animate-child delay-0`}>
          <span className="text-green-600 font-semibold cursor-pointer">Gabriel</span> Lisboa
        </h1>
        <h3 className={`${darkMode ? 'text-white' : 'text-black'} font-semibold italic text-xl sm:text-2xl md:text-2xl xl:text-3xl ml-1 sm:ml-2 md:ml-3 mt-1 sm:mt-2 animate-child delay-1`}>
          {isEnglish ? 'CS Student' : 'Estudante de CCOMP'}
        </h3>
      </div>
      
      <Skills darkMode={darkMode} />
    </section>
  );
};

export default Home;