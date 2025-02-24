interface SkillProps{
    darkMode : boolean,
    name : string,
    image : string
}

function Skill({darkMode, name, image} : SkillProps) : JSX.Element{
    return (
        <div
          className={`flex items-center justify-start w-40 h-12 bg-transparent rounded-lg p-3 cursor-pointer ${
            darkMode
              ? 'shadow-[0_0_5px_rgba(255,255,255,0.4),0_0_10px_rgba(255,255,255,0.1)]'
              : 'shadow-[0_0_5px_rgba(0,0,0,0.4),0_0_10px_rgba(0,0,0,0.1)]'
          } backdrop-blur-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_10px_rgba(0,0,0,0.6),0_0_15px_rgba(0,0,0,0.2)]`}
        >
          <img src={image} alt="Skill icon" className="w-8 h-8 mr-3" />
          <p className={`${darkMode ? 'text-white' : 'text-black'} font-light text-sm`}>
            {name}
          </p>
        </div>
      );
        
      
      
}

export default Skill;