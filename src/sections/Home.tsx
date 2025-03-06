interface HomeProps {
  darkMode: boolean;
  isEnglish: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode, isEnglish }) => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center "
      id="home-section"
    >
      <div className="flex flex-col items-center text-center animate-home px-4">
        <h1
          className={`
            ${darkMode ? 'text-white' : 'text-gray-900'}
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-light tracking-tight animate-child delay-0
          `}
        >
          <span className="text-green-500 font-light bg-clip-text hover:text-green-400 transition-colors duration-300">
            Gabriel
          </span>{' '}
          Lisboa
        </h1>
        <h3
          className={`
            ${darkMode ? 'text-gray-200' : 'text-gray-700'}
            text-lg sm:text-xl md:text-2xl lg:text-3xl 
            font-medium italic mt-3 sm:mt-4 
            animate-child delay-1
          `}
        >
          {isEnglish ? 'CS Student' : 'Estudante de CCOMP'}
        </h3>
        <p
          className={`
            ${darkMode ? 'text-gray-300' : 'text-gray-600'}
            text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-xl animate-child delay-2
          `}
        >
          {isEnglish
            ? 'Building robust and scalable backend systems with a focus on efficiency and reliability.'
            : 'Construindo sistemas backend robustos e escaláveis com foco em eficiência e confiabilidade.'}
        </p>
      </div>
    </section>
  );
};

export default Home;