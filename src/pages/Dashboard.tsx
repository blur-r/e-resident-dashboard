import Navigation from "../components/Navigation"
import DashboardHeader from "../components/DashboardHeader"

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard flex">
            <Navigation />
            <DashboardHeader />
        </div>
    )
}

export default Dashboard 