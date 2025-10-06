

const FeedCard: React.FC = () => {
    return (
        <div className="property-card">
            <div className="image-container">
                <img src="/images/Rectangle 203.png" alt="Luxury 3 Bedroom Detached Duplex" />
                <div className="image-overlay">
                    <button className="nav-button left">&lt;</button>
                    <button className="nav-button right">&gt;</button>
                </div>
            </div>


            <div className="details">
                <h3>Luxury 3 Bedroom Detached Duplex</h3>
                <p className="rent">Price: N1,500,000/Annum</p>
                <div className="flex justify-between">
                    <p className="location">Lekki, Lagos.</p>
                    <button className="text-red-500 hover:text-red-400">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default FeedCard