import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarLinkProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  path?: string;
  href?: string;
  onClick?: () => void;
}

const SidebarLink = ({
  icon: Icon,
  label,
  isActive = false,
  isCollapsed = false,
  path,
  href,
  onClick,
}: SidebarLinkProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  const content = (
    <div
      className={cn(
        "flex items-center py-4 rounded-md text-sm transition-colors",
        isCollapsed ? "justify-center px-2" : "px-2",
        isActive ? "bg-neutral-800 text-white" : "text-neutral-400 hover:bg-neutral-800"
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4",
          isCollapsed ? "mr-0" : "mr-3",
          isActive ? "text-white" : "text-neutral-400"
        )}
      />
      {!isCollapsed && <span className="text-xs">{label}</span>}
    </div>
  );

  return href ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      title={isCollapsed ? label : undefined}
    >
      {content}
    </a>
  ) : (
    <Link 
      to={path || "/"} 
      title={isCollapsed ? label : undefined}
      onClick={handleClick}
    >
      {content}
    </Link>
  );
};

export default SidebarLink;