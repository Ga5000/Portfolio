// TechCard.tsx
interface Tech {
  name: string;
  logo: React.ReactNode;
}

interface TechCardProps {
  tech: Tech;
}

const TechCard = ({ tech }: TechCardProps) => (
  <div className="group border border-zinc-800 rounded-lg p-2 transition-all duration-300 w-40 sm:w-48">
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-neutral-800 rounded p-2">
        {tech.logo}
      </div>
      <span className="font-medium text-zinc-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
        {tech.name}
      </span>
    </div>
  </div>
);

export default TechCard;
