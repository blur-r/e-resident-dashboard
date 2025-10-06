import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"
import FeedCard from "../components/FeedCard"
import { useState } from "react"

const Feeds: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Rent");

    const tabs = ["Rent", "Shortlets", "Sale"];

    const [files, setFiles] = useState<File[]>([]);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
        }
    };

    const handleUpload = () => {
        if (!files.length) return;
        setUploading(true);
        let progressValue = 0;
        const uploadInterval = setInterval(() => {
            progressValue += 10;
            setProgress(progressValue);
            if (progressValue >= 100) {
                clearInterval(uploadInterval);
                setUploading(false);
            }
        }, 500);
    };

    const handleCancel = () => {
        setUploading(false);
        setProgress(0);
        setFiles([]);
    };
    const inputBase = "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#2BB0EE]";


    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] ml-auto pr-7">
                <OtherPagesHeader title="Feeds" />
                <div className="flex gap-2.5 mt-4">
                    <div className="w-[70%] h-full bg-white p-5 rounded-lg">
                        <div className="bg-white rounded-lg p-6">
                            <h2 className="font-bold text-lg mb-4">Apartment Listings</h2>

                            <div className="flex border-b mb-6 justify-between">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`relative px-6 py-2 text-lg font-medium transition-colors duration-200 ${activeTab === tab
                                            ? "text-black"
                                            : "text-gray-500 hover:text-black"
                                            }`}
                                    >
                                        {tab}
                                        {activeTab === tab && (
                                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black rounded-t-md"></span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {activeTab === "Rent" && (
                                    <>
                                        <FeedCard />
                                        <FeedCard />
                                        <FeedCard />
                                    </>
                                )}

                                {activeTab === "Shortlets" && (
                                    <>
                                        <FeedCard />
                                        <FeedCard />
                                    </>
                                )}

                                {activeTab === "Sale" && (
                                    <>
                                        <FeedCard />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-[30%] h-full bg-white py-5 px-3 rounded-lg">
                        <div className="bg-white p-6 rounded-xl shadow-sm max-w-sm mx-auto">
                            <h2 className="font-semibold text-lg mb-3">
                                Add image <span className="text-red-500">*</span>
                            </h2>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <div className="flex flex-col items-center gap-2">
                                    <i className="fas fa-upload text-gray-400 text-3xl"></i>
                                    <p className="text-sm font-medium text-gray-600">
                                        Upload your files here
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        supported: JPG, PNG (Transparent images)
                                    </p>
                                    <label className="mt-3 inline-block cursor-pointer bg-[#2BB0EE] text-white text-sm px-4 py-1.5 rounded-md">
                                        Browse
                                        <input
                                            type="file"
                                            multiple
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Upload Progress */}
                            {files.length > 0 && (
                                <div className="mt-4 bg-gray-50 p-3 rounded-md border">
                                    <p className="text-sm text-gray-700 mb-2">
                                        Uploading {files.length} file{files.length > 1 ? "s" : ""}
                                    </p>

                                    <div className="flex gap-2 mb-2 overflow-x-auto">
                                        {files.map((file, i) => (
                                            <img
                                                key={i}
                                                src={URL.createObjectURL(file)}
                                                alt={file.name}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        ))}
                                    </div>

                                    {uploading ? (
                                        <div className="space-y-1">
                                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                                                <div
                                                    className="bg-[#2BB0EE] h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                            <div className="flex justify-between text-xs text-gray-500">
                                                <span>Time remaining: 30 sec.</span>
                                                <div className="flex gap-2">
                                                    <button onClick={handleCancel}>
                                                        <i className="fas fa-pause"></i>
                                                    </button>
                                                    <button onClick={handleCancel}>
                                                        <i className="fas fa-times text-red-500"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={handleUpload}
                                            className="text-xs text-[#2BB0EE] mt-2"
                                        >
                                            Start Upload
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Form Fields */}
                            <form className="space-y-3 mt-5">
                                <input type="text" placeholder="Property Title" className={inputBase} />
                                <input type="text" placeholder="Price" className={inputBase} />
                                <input type="text" placeholder="No of Rooms" className={inputBase} />
                                <input type="text" placeholder="Category" className={inputBase} />
                                <input type="text" placeholder="Select Landlord" className={inputBase} />
                                <textarea
                                    placeholder="Description"
                                    rows={3}
                                    className={inputBase}
                                ></textarea>

                                <button
                                    type="submit"
                                    className="w-full bg-[#2BB0EE] text-white py-2 rounded-md font-medium"
                                >
                                    Upload
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feeds 
