import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Settings: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <OtherPagesHeader title="Settings" />
        </div>
    )
}

export default Settings 