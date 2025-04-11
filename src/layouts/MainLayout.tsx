import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#1A1A1C]">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main 
        className={`flex-1 transition-all duration-500 ease-in-out overflow-auto
          ${sidebarOpen ? 'ml-62' : 'ml-20'}`}
      >
        <div className="h-full w-full min-h-screen ">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;