import { Sidebar } from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
    <div className=" h-full   bg-[#ebebeb]  md:w-72  md:flex-col md:fixed md:inset-y-0 ">
      <Sidebar />
    </div>
    <main className="md:pl-72">
      <Navbar />
      {children}
    </main>
  </div>
  );
};

export default DashboardLayout;
