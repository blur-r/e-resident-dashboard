import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"
import AnalyticsComp from "../components/AnalyticsComp"
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const data = [
    { month: "Jan", revenue: 150 },
    { month: "Feb", revenue: 100 },
    { month: "Mar", revenue: 200 },
    { month: "Apr", revenue: 250 },
    { month: "May", revenue: 300 },
    { month: "Jun", revenue: 280 },
    { month: "Jul", revenue: 310 },
    { month: "Aug", revenue: 330 },
    { month: "Sep", revenue: 350 },
    { month: "Oct", revenue: 270 },
    { month: "Nov", revenue: 400 },
    { month: "Dec", revenue: 450 },
];

type BestSellingType = {
    name: string;
    percent: number;
    color: string;
};

const bestSelling: BestSellingType[] = [
    { name: "Self Contained Apartments", percent: 35, color: "bg-green-400" },
    { name: "Mini Apartments", percent: 28, color: "bg-lime-400" },
    { name: "2 Bedroom Apartments", percent: 20, color: "bg-yellow-300" },
    { name: "3 Bedroom Apartments", percent: 10, color: "bg-orange-300" },
    { name: "4 Bedroom Apartments", percent: 5, color: "bg-red-300" },
    { name: "5 Bedroom Apartments", percent: 2, color: "bg-red-500" },
];

const Analytics: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] ml-auto pr-7">
                <OtherPagesHeader title="Analytics" />
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

                <div className="flex mt-4 justify-between">
                    <div className="w-[72%]">
                        <div className="bg-white p-4 rounded-xl shadow w-full">
                            <h2 className="font-semibold mb-4">Revenue Analytics</h2>
                            <ResponsiveContainer width="100%" height={400}>
                                <AreaChart data={data}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
                                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip formatter={(val) => `₦${val}M`} />
                                    <Area
                                        type="monotone"
                                        dataKey="revenue"
                                        stroke="#3B82F6"
                                        strokeWidth={2}
                                        fill="url(#colorRevenue)"
                                        activeDot={{ r: 6 }}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="w-[25%]">
                        <div className="bg-white p-4 rounded-xl shadow w-full">
                            <h2 className="font-semibold mb-4">Best Selling</h2>
                            <div className="space-y-3">
                                {bestSelling.map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>{item.name}</span>
                                            <span>{item.percent}%</span>
                                        </div>
                                        <div className="w-full h-10 bg-gray-200 rounded-lg flex gap-3 items-center">
                                            <div
                                                className={`h-10 rounded-lg ${item.color}`}
                                                style={{ width: `${item.percent}%` }}
                                            >
                                            </div>
                                            <span className="text-center">{item.percent}%</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics