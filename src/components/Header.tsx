import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    darkMode: boolean;
    toggleMode: () => void;
  }
  
  const Header : React.FC<HeaderProps> = ({ darkMode, toggleMode }: HeaderProps) => {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <button
          onClick={toggleMode}
          className={`absolute top-5 right-12 w-14 h-7 flex items-center border-none rounded-full p-1 cursor-pointer
            transition-all duration-300 ease-in-out
            ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center
              ${darkMode ? 'translate-x-7' : 'translate-x-0'}`}
          >
            <FontAwesomeIcon
              icon={darkMode ? faMoon : faSun}
              className={`text-sm transition-colors duration-300
                ${darkMode ? 'text-gray-400' : 'text-yellow-500'}`}
            />
          </div>
        </button>
      </header>
    );
  }
  
  export default Header;