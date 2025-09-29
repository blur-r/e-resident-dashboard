import './App.css'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import Sales from './pages/Sales';
import Feeds from './pages/Feed';
import Settings from './pages/Settings';
import Notification from './pages/Notification';
import { Routes, Route } from "react-router-dom";
import { DateRangeProvider } from './context/AppContext';
function App() {

    return (
        <DateRangeProvider>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/sales" element={<Sales />} />
                <Route path="/feed" element={<Feeds />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notification" element={<Notification />} />
            </Routes>
        </DateRangeProvider>

    )
}

export default App
