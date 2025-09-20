import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Notification: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] mx-auto">
                <OtherPagesHeader title="Notification" />
            </div>
        </div>
    )
}

export default Notification 