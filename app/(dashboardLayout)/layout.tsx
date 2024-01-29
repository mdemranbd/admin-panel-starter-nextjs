import { Sidebar } from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-[#9eb5ca] relative">
    <div className="h-full bg-[#9eb5ca]  md:w-72  md:flex-col md:fixed md:inset-y-0 ">
      <Sidebar />
    </div>
    <main className="md:pl-72 ">
      <Navbar />
      <div className="bg-gray-200 h-screen rounded-tl-lg">
      {children}
      </div>
    </main>
  </div>
  );
};

export default DashboardLayout;
