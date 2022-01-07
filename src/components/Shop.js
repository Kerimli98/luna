import "../Assets/Styles/shop.scss";

function Shop(props) {
    return (
        <div className="Shop">
            <h1>ONLINE COFFEE SHOP</h1>
            <p className="shop-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
                dolore
            </p>
            <div className="cards">
                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon">
                        </div>
                        <h3 className="card-title">NICARAGUA</h3>
                        <p className="card-text">$15.00</p>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon">
                        </div>
                        <h3 className="card-title">HONDURAS</h3>
                        <p className="card-text">$15.00</p>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon">
                        </div>
                        <h3 className="card-title">COLOMBIA</h3>
                        <p className="card-text">$15.00</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon"></div>
                        <h3 className="card-title">PERU</h3>
                        <p className="card-text">$15.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;