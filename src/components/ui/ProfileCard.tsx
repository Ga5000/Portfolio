import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "../../lib/utils";
import profile from '../../assets/proflie.png';
import { useTranslation } from "react-i18next";

interface ProfileCardProps {
  isCollapsed: boolean;
}

const ProfileCard = ({ isCollapsed } : ProfileCardProps) => {
  const { t } = useTranslation();
  
  return (
    <div className={cn("flex items-center gap-3 mr-10", isCollapsed ? "justify-center mr-0" : "px-4")}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={profile} alt="Profile" />
        <AvatarFallback className="bg-[#F5F5F7] text-[#3F3F47]">GL</AvatarFallback>
      </Avatar>
      {!isCollapsed && (
        <div className="flex flex-col overflow-hidden">
          <h3 className="text-sm font-medium text-[#ffffff] truncate">Gabriel Lisboa</h3>
          <p className="text-xs text-[#9f9f9f] truncate">{t("profile.job")}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
