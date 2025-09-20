import Navigation from "../components/Navigation"
import OtherPagesHeader from "../components/OtherPagesHeader"

const Sales: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <div className=" w-[77%] mx-auto">
                <OtherPagesHeader title="Sales" />
            </div>
        </div>
    )
}

export default Sales 