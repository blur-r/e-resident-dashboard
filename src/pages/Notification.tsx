import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Notification: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <OtherPagesHeader title="Notification" />
        </div>
    )
}

export default Notification 