import { Sidebar } from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
    {/* Left Sidebar */}
    <Sidebar />

    <div className="flex flex-col flex-1">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="p-5 bg-blue-50/50 h-[calc(100vh-64px)] overflow-hidden overflow-y-auto rounded-tl-3xl shadow-inner flex-1">
        {children}
      </div>
    </div>
  </div>
  );
};

export default DashboardLayout;
