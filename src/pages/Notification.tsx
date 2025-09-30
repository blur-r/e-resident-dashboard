import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"
import DateRangeSelector from "../components/DateRangeSelector"
import NotificationComp from "../components/NotificationComp"

const Notification: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] ml-auto pr-7">
                <OtherPagesHeader title="Notification" />
                <div className="bg-white flex flex-col mt-4 rounded-md p-4">
                    <div className="ml-auto mb-7">
                        <DateRangeSelector />
                    </div>
                    <NotificationComp />
                    <NotificationComp />
                    <NotificationComp />
                </div>

            </div>
        </div>
    )
}

export default Notification 