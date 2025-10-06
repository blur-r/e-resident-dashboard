import Navigation from "../components/Navigation"
import DashboardHeader from "../components/DashboardHeader"
import DateRangeSelector from "../components/DateRangeSelector"
import AnalyticsComp from "../components/AnalyticsComp"
import Enquires from "../components/Enquires"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import RecentTransactionTableRow from "../components/RecentTransactionTableRow"
import { Link } from "react-router-dom"

const dailyData = [
    { day: "Sun", value: 50 },
    { day: "Mon", value: 30 },
    { day: "Tue", value: 100 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 80 },
    { day: "Sat", value: 150 },
];

const Dashboard: React.FC = () => {

    return (
        <div>
            <div className="hidden info">
                <p className="text-red-500 text-3xl text-center">Open On a Larger Screen</p>
            </div>
            <div className="dashboard flex">
                <Navigation />
                <div className=" w-[77%] ml-auto pr-7">
                    <DashboardHeader />
                    <div className="flex items-center justify-between mt-4">
                        <p className="font-bold  text-[30px]">
                            Overview
                        </p>
                        <DateRangeSelector />
                    </div>
                    <hr className="mt-5" />
                    <div className="flex mt-10 justify-between">
                        <div className="flex flex-col gap-3 w-[22%] bg-white rounded-[15px] shadow-lg py-5 px-4 justify-center">
                            <div className="flex justify-between">
                                <p>
                                    New Leads
                                </p>
                                <span className="bg-[#E8E8E8] rounded-full  w-7 h-7 flex items-center justify-center">
                                    <i className="fas fa-users"></i>
                                </span>
                            </div>
                            <div className="flex items-center gap-12">
                                <p className="font-bold text-[45px]">
                                    104
                                </p>
                                <span className="bg-[#E8E8E8] text-[#2BB0EE] px-2.5 py-1 rounded-lg">
                                    +49%
                                </span>
                            </div>
                            <p>Last Month: <span className="font-semibold">56</span></p>
                        </div>

                        <div className="flex flex-col gap-3 w-[22%] bg-white rounded-[15px] shadow-lg py-5 px-4 justify-center">
                            <div className="flex justify-between">
                                <p>
                                    Total Sales
                                </p>
                                <span className="bg-[#E8E8E8] rounded-full  w-7 h-7 flex items-center justify-center">
                                    <i className="fas fa-money-bill"></i>
                                </span>
                            </div>
                            <div className="flex items-center gap-12">
                                <p className="font-bold text-[45px]">
                                    30
                                </p>
                                <span className="bg-[#E8E8E8] text-[#0DBC30] px-2.5 py-1 rounded-lg">
                                    +49%
                                </span>
                            </div>
                            <p>Last Month: <span className="font-semibold">14</span></p>
                        </div>

                        <div className="flex flex-col gap-3 w-[22%] bg-white rounded-[15px] shadow-lg py-5 px-4 justify-center">
                            <div className="flex justify-between">
                                <p>
                                    Total Revenue
                                </p>
                                <span className="bg-[#E8E8E8] rounded-full  w-7 h-7 flex items-center justify-center">
                                    <i className="fas fa-circle-dollar-to-slot"></i>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="font-bold text-[45px]">
                                    ₦1.67B
                                </p>
                            </div>
                            <p>Last Month: <span className="font-semibold">₦250M</span></p>
                        </div>

                        <div className=" w-[25%] bg-white rounded-[15px] shadow-lg py-5 px-4">
                            <AnalyticsComp />
                        </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="w-[55%] bg-white rounded-md pt-7" >
                            <ResponsiveContainer width="100%">
                                <BarChart height={250} data={dailyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="day" />
                                    <YAxis tickFormatter={(value) => `₦${value}M`} />
                                    <Tooltip formatter={(value) => [`₦${value}M`, "Revenue"]} />
                                    <Bar dataKey="value" fill="#2BB0EE" radius={[5, 5, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="w-[45%] bg-white rounded-md p-3">
                            <div className="flex justify-between">
                                <p className="font-bold text-[20px]">Enquires</p>
                                <button className="border-1 rounded-md px-2">
                                    <i className="fas fa-align-left pr-2"></i>
                                    Sort By
                                </button>
                            </div>
                            <div className="flex gap-30 mt-4">
                                <div className="flex gap-1 mb-2">
                                    <input type="checkbox" name="" id="" />
                                    <p>Name</p>
                                </div>
                                <p>Message</p>
                            </div>
                            <Enquires />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-3 mt-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold text-xl">Recent Transaction</p>
                                <p className="text-[#7F8C8D] text-[12px]">Last Updated: 11:36am</p>
                            </div>
                            <Link to="/sales" className="cursor-pointer">
                                <button className="border-1 rounded-md px-2 py-1 cursor-pointer">
                                    See all
                                    <i className="fas fa-angle-right pl-1.5"></i>
                                </button>
                            </Link>
                        </div>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="text-left text-gray-500 border-b">
                                        <th className="p-3">Order ID</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Status</th>
                                        <th className="p-3">Amount</th>
                                        <th className="p-3">Category</th>
                                        <th className="p-3">Property Title</th>
                                        <th className="p-3">Property Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <RecentTransactionTableRow />
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 