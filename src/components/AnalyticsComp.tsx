import { format } from "date-fns";
import { PieChart, Pie, Cell } from "recharts";
import { useDateRange } from "../context/AppContext";

const data = [
    { name: "Visits", value: 65, color: "#3b82f6" },
    { name: "Registration", value: 35, color: "#22c55e" },
];

const AnalyticsComp: React.FC = () => {
    const { range } = useDateRange();

    return (
        <div className="flex flex-col items justify-center">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Activities</h2>
                <span className="text-sm text-gray-500">
                    {format(range.startDate, "MMM dd")} - {format(range.endDate, "MMM dd")}
                </span>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-center">
                    <p className="text-lg font-semibold">65%</p>
                    <p className="text-gray-400 text-sm">Visits</p>
                </div>

                <PieChart width={120} height={120}>
                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius={40}
                        outerRadius={55}
                        startAngle={90}
                        endAngle={-270}
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>

                <div className="text-center">
                    <p className="text-lg font-semibold">35%</p>
                    <p className="text-gray-400 text-sm">Registration</p>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsComp