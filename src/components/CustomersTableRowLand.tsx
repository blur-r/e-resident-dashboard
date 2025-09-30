import { useState } from "react";

const CustomersTableRowLand: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <tr>
            <td className="">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                />
            </td>
            <td className="p-3">1</td>
            <td className="p-3">
                <div className="flex items-center gap-2">
                    <span className="bg-[#E8E8E8] rounded-full w-7 h-7 flex items-center justify-center">
                        <i className="fas fa-user"></i>
                    </span>
                    <span>Darren Beahan DDS</span>
                </div>
            </td>
            <td className="p-3">327-514-1454 x3053</td>
            <td className="p-3">Davin.Koss@hotmail.com</td>
            <td className="p-3">869 Raynor Canyon</td>

            <td className="p-3 text-center">
                {isChecked && (
                    <button className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                    </button>
                )}
            </td>
        </tr>
    );
};

export default CustomersTableRowLand;
