import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"
import DateRangeSelector from "../components/DateRangeSelector"
import RecentTransactionTableRow from "../components/RecentTransactionTableRow"

const Sales: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] ml-auto pr-7">
                <OtherPagesHeader title="Sales" />
                <div className="bg-white flex flex-col mt-4 rounded-md p-4">
                    <div className="ml-auto mb-4">
                        <DateRangeSelector />
                    </div>
                    <div className="overflow-x-auto">
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
                                <RecentTransactionTableRow />
                                <RecentTransactionTableRow />
                                <RecentTransactionTableRow />
                                <RecentTransactionTableRow />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales 