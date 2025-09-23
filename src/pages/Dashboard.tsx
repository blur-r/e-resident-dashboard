import Navigation from "../components/Navigation"
import DashboardHeader from "../components/DashboardHeader"
// import { useState } from "react";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

const Dashboard: React.FC = () => {
    // const [range, setRange] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: "selection"
    //     }
    // ]);

    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] mx-auto">
                <DashboardHeader />
                <div>
                    <input type="date" id="start" />
                    <span>-</span>
                    <input type="date" id="end" />
                </div>
                {/* <div>
                <p>Overview</p>
                <div>
                    <div className="p-4">
                        <DateRangePicker
                            ranges={range}
                            onChange={(item) => setRange([item.selection])}
                        />
                        <div className="mt-4 bg-gray-100 px-3 py-2 rounded flex items-center gap-2">
                            <span>📅</span>
                            <span>
                                {range[0].startDate.toDateString()} - {range[0].endDate.toDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default Dashboard 