import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"
import DateRangeSelector from "../components/DateRangeSelector"

const Notification: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] ml-auto pr-7">
                <OtherPagesHeader title="Notification" />
                <DateRangeSelector />
            </div>
        </div>
    )
}

export default Notification 