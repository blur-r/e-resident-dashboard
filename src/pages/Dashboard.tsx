import Navigation from "../components/Navigation"
import DashboardHeader from "../components/DashboardHeader"
import DateRangeSelector from "../components/DateRangeSelector"

const Dashboard: React.FC = () => {

    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] mx-auto">
                <DashboardHeader />
                <div className="flex items-center justify-between mt-4">
                    <p className="font-bold  text-[30px]">
                        Overview
                    </p>
                    <DateRangeSelector />
                </div>
                <hr className="mt-5" />
                <div className="flex mt-10 justify-between">
                    <div className="flex flex-col gap-3 w-[22%] bg-white rounded-[15px] shadow-lg py-5 px-4">
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

                    <div className="flex flex-col gap-3 w-[22%] bg-white rounded-[15px] shadow-lg py-5 px-4">
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

                    <div className="flex flex-col gap-3 w-[22%] bg-white rounded-[15px] shadow-lg py-5 px-4">
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

                    <div className="flex flex-col gap-3 w-[25%] bg-white rounded-[15px] shadow-lg py-5 px-4">
                        <div className="flex justify-between">
                            <p>
                                Activities
                            </p>
                            <span className="bg-[#E8E8E8] rounded-full  w-7 h-7 flex items-center justify-center">
                                <i className="fas fa-users"></i>
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="font-bold text-[39px]">
                                104
                            </p>
                            <span className="bg-[#E8E8E8] text-[#2BB0EE] px-2.5 py-1 rounded-lg">
                                +49%
                            </span>
                        </div>
                        <p>Last Month: <span className="font-semibold">56</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard 