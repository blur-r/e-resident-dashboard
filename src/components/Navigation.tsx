import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
    return (
        <div className="navigation flex flex-col h-screen bg-[#2BB0EE] text-white w-1/5 gap-16 items-start pt-15 pl-10">
            <h1 className="font-bold text-[30px]">e-Resident</h1>

            {/* Main Navigation */}
            <div className="flex flex-col gap-8">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "bg-white text-[#2BB0EE] rounded-xl px-3 py-1 shadow-xl" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-home mr-2"></i>Dashboard
                </NavLink>

                <NavLink
                    to="/sales"
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-clipboard-list mr-2"></i>Sales
                </NavLink>

                <NavLink
                    to="/feed"
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-list mr-2"></i>Feed
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-signal mr-2"></i>Analytics
                </NavLink>

                <NavLink
                    to="/customers"
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-user mr-2"></i>Customers
                </NavLink>
            </div>

            {/* Bottom Navigation */}
            <div className="flex flex-col gap-8">
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-gear mr-2"></i>Settings
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-[22px] font-bold flex items-center ${isActive ? "text-yellow-300" : "text-white"
                        }`
                    }
                >
                    <i className="fas fa-circle-info mr-2"></i>About
                </NavLink>

                <button className="test w-20 text-red-500">Logout</button>
            </div>
        </div>
    );
};

export default Navigation;
