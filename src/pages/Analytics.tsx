import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Analytics: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] mx-auto">
                <OtherPagesHeader title="Analytics" />
            </div>
        </div>
    )
}

export default Analytics