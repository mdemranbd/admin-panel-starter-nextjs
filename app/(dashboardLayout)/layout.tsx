import Navbar from "../components/ui/Navbar";
import { Sidebar } from "../components/ui/Sidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden p-2 bg-[#d4dcf0] h-full md:flex  md:w-72  md:flex-col md:fixed md:inset-y-0 ">
        {/* Left Sidebar start */}
        <Sidebar />
        {/* Left Sidebar end */}
      </div>
      <main className="md:pl-72">
        {/* Navbar Start */}
        <Navbar />
        {/* Navbar End*/}
        <div
          className="bg-blue-50/50 h-[calc(100vh-64px)] 
          w-full h-42 overflow-y-scroll no-scrollbar p-5
      "
        >
          {/* Main Content  Start*/}
          {children}
          {/* Main Content  End*/}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
