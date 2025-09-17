import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Analytics: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <OtherPagesHeader title="Analytics" />
        </div>
    )
}

export default Analytics