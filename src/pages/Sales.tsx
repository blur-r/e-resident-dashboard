import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Sales: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <OtherPagesHeader title="Sales" />
        </div>
    )
}

export default Sales 