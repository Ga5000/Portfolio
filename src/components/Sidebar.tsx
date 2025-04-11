import { useState, useEffect } from "react";
import { ChevronLeft, Compass, Briefcase, User, Mail, GithubIcon, LinkedinIcon, Layers2, Pencil, GraduationCap } from "lucide-react";
import ProfileCard from "./ui/ProfileCard";
import SidebarLink from "./SidebarLink";
import { cn } from "../lib/utils";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar } : SidebarProps) => {
  const location = useLocation();
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("explore");
  
  const navItems = [
    { id: "explore", label: t("nav.explore"), icon: Compass, path: "/explore" },
    { id: "experience", label: t("nav.experience"), icon: Briefcase, path: "/experience" },
    { id: "projects", label: t("nav.projects"), icon: Pencil, path: "/projects" },
    { id: "about", label: t("nav.about"), icon: User, path: "/about" },
    { id: "stack", label: t("nav.stack"), icon: Layers2, path: "/stack" },
    { id: "education", label: t("nav.education"), icon: GraduationCap, path: "/education" },
    { id: "github", label: t("nav.github"), icon: GithubIcon, href: "https://github.com/Ga5000" },
    { id: "linkedin", label: t("nav.linkedin"), icon: LinkedinIcon, href: "https://www.linkedin.com/in/gabriel-lisboa05" },
    { id: "email", label: t("nav.email"), icon: Mail, href: "mailto:gbr.lisboa@gmail.com" }
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentNavItem = navItems.find(item => item.path === currentPath);
    if (currentNavItem) {
      setActiveItem(currentNavItem.id);
    }
  }, [location.pathname, navItems]);

  return (
    <div className={cn("fixed top-0 left-0 h-full z-40 transition-all duration-500 ease-in-out shadow-md shadow-[#29292B] flex flex-col bg-[#1A1A1C] text-[#F4F4F5]", "w-20", { "md:w-64": isOpen, "md:w-20": !isOpen })}>
      <div className="hidden md:flex justify-end p-2">
        <button onClick={toggleSidebar} className="rounded-md p-1 cursor-pointer transition-all duration-500 hover:bg-neutral-800 text-neutral-100">
          <div className={cn("transform transition-transform duration-500", isOpen ? "rotate-180" : "rotate-0")}>
            <ChevronLeft size={18} />
          </div>
        </button>
      </div>
      <div className="hidden md:block">
        <ProfileCard isCollapsed={!isOpen} />
      </div>
      <nav className="flex-1 space-y-5 px-3 overflow-hidden">
        {navItems.map((item) => (
          <div key={item.id} className="my-5 md:my-3 transition-all duration-500">
            <SidebarLink
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id}
              isCollapsed={!isOpen}
              href={item.href}
              path={item.path}
              onClick={() => item.path && setActiveItem(item.id)}
            />
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-neutral-600 text-left">
        <div className={cn("text-xs text-[#6d6d6e] transition-all duration-500", { "text-center": !isOpen })}>
          {isOpen ? "© 2025 Portfolio" : "© 2025"}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
