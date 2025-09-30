const RecentTransactionTableRow: React.FC = () => {
    return (
        <tr className="hover:bg-[#E8E8E8]">
            <td className="p-3">#003842</td>
            <td className="p-3">
                <div className="flex items-center gap-2">
                    <span className="bg-[#E8E8E8] rounded-full  w-7 h-7 flex items-center justify-center">
                        <i className="fas fa-user"></i>
                    </span>
                    <span>Boyd Hegmann IV</span>
                </div>
            </td>
            <td className="p-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#D2FFDB] text-[#04C72B]">
                    Completed
                </span>
            </td>
            <td className="p-3 font-bold">₦1,500,000</td>

            <td className="p-3">Rent</td>
            <td className="p-3">Luxury 2 Bedroom Apartment</td>
            <td className="p-3">2287 Ena Via</td>

        </tr>
    )
}

export default RecentTransactionTableRow