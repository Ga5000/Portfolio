import { useState } from 'react';
import { Github, Calendar, ExternalLink } from 'lucide-react';

interface TechItem {
  icon: React.ReactNode;
  name: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  date: string;
  techStack: TechItem[];
}

const ProjectCard = ({id, title, description, image, githubUrl, liveUrl, date, techStack }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div key={id}
      className="rounded-lg overflow-hidden shadow-md bg-neutral-900 transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="flex space-x-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-neutral-700 transition-colors"
            >
              <Github size={16}/>
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-neutral-400 mb-3 text-sm overflow-auto">{description}</p>
        
        <div className="flex items-center text-xs text-neutral-400 font-bold mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <div className="border-t pt-3">
          <div className="flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center shadow-sm text-white bg-black rounded-lg px-2 py-1 text-xs"
              >
                <span className="mr-1">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;