import { Sidebar } from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar start */}
      <div className="bg-[#d4dbeb] h-screen max-w-[280px] p-4 overflow-hidden">
        <Sidebar />
      </div>
      {/* Left Sidebar end */}

      <div className="flex flex-col flex-1">
        {/* Navbar Start */}
        <Navbar />
        {/* Navbar End*/}

        <div className="p-5 bg-blue-50/50 h-[calc(100vh-64px)] overflow-hidden overflow-y-auto rounded-tl-3xl shadow-inner flex-1">
          {/* Main Content  Start*/}
          {children}
          {/* Main Content  End*/}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
