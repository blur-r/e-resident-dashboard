import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Feeds: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <OtherPagesHeader title="Feeds" />
        </div>
    )
}

export default Feeds 