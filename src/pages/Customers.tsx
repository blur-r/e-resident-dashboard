import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"
import CustomersTableRowOcc from "../components/CustomersTableRowOcc"
import CustomersTableRowLand from "../components/CustomersTableRowLand"

import { useState } from "react"

const Customers: React.FC = () => {
    const [landlordActive, setLandlordActive] = useState(true)
    const [occupantsActive, setOccupantsActive] = useState(false)
    const handleLandlord: () => void = () => {
        setLandlordActive((prev) => !prev);
        setOccupantsActive((prev) => !prev);
    };

    const handleOccupants: () => void = () => {
        setLandlordActive((prev) => !prev);
        setOccupantsActive((prev) => !prev);
    };

    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] ml-auto pr-7">
                <OtherPagesHeader title="Customers" />
                <div className="bg-white mt-4 rounded-lg px-4 py-8">
                    <div className="flex justify-between">
                        <div className="flex gap-2.5">
                            <button className={`py-1.5 px-6 rounded-md font-semibold cursor-pointer ${landlordActive ? "bg-[#2BB0EE] text-white" : "text-black"}`}
                                onClick={handleLandlord}
                            >
                                Landlords
                            </button>
                            <button className={`py-1.5 px-6 rounded-md font-semibold cursor-pointer ${occupantsActive ? "bg-[#2BB0EE] text-white" : "text-black"}`}
                                onClick={handleOccupants}
                            >
                                Occupants
                            </button>
                        </div>

                        <button className="bg-[#2BB0EE] text-white py-1.5 px-6  rounded-md">
                            <i className="fas fa-plus pr-2"></i>
                            Add
                        </button>
                    </div>

                    {landlordActive && <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th><input type="checkbox" name="" id="" /></th>
                                    <th className="p-3">No</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Phone No</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Home Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CustomersTableRowLand />
                            </tbody>
                        </table>
                    </div>}

                    {occupantsActive && <div className="overflow-x-auto mt-4">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th><input type="checkbox" name="" id="" /></th>
                                    <th className="p-3">Noo</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Phone No</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Home Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <CustomersTableRowOcc />
                            </tbody>
                        </table>
                    </div>}

                </div>
            </div>
        </div>
    )
}

export default Customers 