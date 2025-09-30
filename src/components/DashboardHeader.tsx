import { Link } from "react-router-dom";

const DashboardHeader: React.FC = () => {
    return (
        <div className="dashboard-pages-header bg-white flex items-center justify-between h-[80px] w-full mx-auto mt-10 rounded-2xl px-10 gap-20">
            <div>
                <p className="text-2xl font-bold">
                    Hi, Welcome Back.
                </p>
                <p className="text-sm text-gray-500">
                    Manage all activites on the platform
                </p>
            </div>
            <div className="flex gap-8">
                <div className="w-[250px] bg-[#F8F8F8] rounded-xl pl-3 pt-2 items-center">
                    <i className="fas fa-search mr-1.5 opacity-40 "></i>
                    <input className="px-1 outline-none" type="search" name="" id="" placeholder="Search" />
                </div>
                <div className="flex gap-6">
                    <Link to="/notification">
                        <span className="bg-[#f8f8f8] rounded-full w-10 h-10 flex items-center justify-center">
                            <i className="far fa-bell text-black text-xl"></i>
                        </span>
                    </Link>
                    <span className="bg-[#04C72B] text-white text-xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                        C
                    </span>
                </div>
            </div>

        </div>
    );
};

export default DashboardHeader;
