import { FC} from "react";
import { Link as LinkIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Education {
  id: string;
  type: string;
  title: string;
  institution: string;
  period: string;
  link: string;
  icon: React.ReactNode;
  category: { icon: React.ReactNode; name: string }[];
}

interface EducationCardProps {
  education: Education;
}

const EducationCard: FC<EducationCardProps> = ({ education }) => {
  const {t} = useTranslation();
  return (
    <div className="p-6 rounded-xl bg-zinc-800/50 shadow-xl shadow-black transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          {education.icon}
          <h3 className="text-xl font-bold text-white">{education.title}</h3>
        </div>
        <p className="text-zinc-400 mb-2">{education.institution}</p>
        {education.category && education.category.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {education.category.map((cat, index) => (
              <span key={index} className="flex items-center space-x-1 bg-zinc-700 px-2 py-1 rounded-md text-sm text-white">
                {cat.icon}
                <span>{cat.name}</span>
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-zinc-500">{education.period}</span>
        {education.link ? (
          <a
            href={education.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-sm font-medium text-green-500 hover:underline"
          >
            <LinkIcon size={16} />
            <span>{t('education.viewCertificate')}</span>
          </a>
        ) : (
          <span className="text-sm font-medium text-green-500">{t('education.inProgress')}</span>
        )}
      </div>
    </div>
  );
};

export default EducationCard;