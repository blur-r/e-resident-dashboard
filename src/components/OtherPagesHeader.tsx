import { Link } from "react-router-dom";

const OtherPagesHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="other-pages-header bg-white flex items-center h-[80px] w-full mt-10 rounded-2xl px-10 gap-20">
            <h1 className="text-4xl font-bold">{title}</h1>
            <div className="flex gap-10">
                <div className="w-[250px] border-1 rounded-md pl-3 py-0.5">
                    <i className="fas fa-search mr-1.5 opacity-40 "></i>
                    <input className="px-1 outline-none" type="search" name="" id="" placeholder="Search" />
                </div>
                <button className="flex items-center gap-1.5 border-1 rounded-md px-2">
                    <i className="fas fa-align-left"></i>
                    Sort by
                    <i className="fas fa-chevron-down text-[10px] font-semibold"></i>
                </button>
            </div>
            <div className="flex gap-6 ml-auto">
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
    );
};

export default OtherPagesHeader;
