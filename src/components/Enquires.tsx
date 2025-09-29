const Enquires: React.FC = () => {
    return (
        <div className="flex items-start justify-between p-2 bg-[#F8F8F8]">

            <div className="flex items-start gap-3 w-[35%]">
                <input type="checkbox" className="mt-2" />
                <span className="bg-[#E8E8E8] rounded-full  w-10 h-10 flex items-center justify-center">
                    <i className="fas fa-user"></i>
                </span>
                <div className="flex flex-col items-center gap-2 justify-evenly">
                    <p className="font-semibold">Joseph O.T</p>
                    <p className="text-xs text-gray-500">July 20, 2025</p>
                </div>
            </div>
            <div className="w-[65%] flex">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-700">
                        Hi, Please i made payment for an apartment but I’m yet to receive an email, kindly help..
                    </p>
                    <button className="self-end px-3 py-1 text-xs text-white bg-blue-500 rounded mr-5">
                        Reply
                    </button>
                </div>
                <div className="flex flex-col items-center gap-2 justify-evenly">
                    <i className="fas fa-trash text-red-500 cursor-pointer"></i>
                    <i className="fas fa-expand text-gray-500 cursor-pointer"></i>
                </div>
            </div>

        </div>

    )
}

export default Enquires 