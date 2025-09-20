import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Settings: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] mx-auto">
                <OtherPagesHeader title="Settings" />
                <div className="w-full mx-auto mt-10 bg-gray-50 px-[70px] pt-6 pb-[50px] rounded-xl shadow-sm">
                    <h2 className="text-gray-700 font-medium mb-3">Company Information</h2>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value="+234"
                                className="w-20 border border-gray-300 rounded-md px-3 py-2 bg-gray-100 text-gray-600"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                            />
                        </div>
                    </div>

                    <h2 className="text-gray-700 font-medium mt-6 mb-3">Account Settings</h2>
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                        />
                        <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2">
                            <span className="text-gray-600">Account Status</span>
                            <span className="text-green-600 font-medium">Active</span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Settings 