import "../Assets/Styles/offer.scss";

function Offer(props) {
    return (
        <div className="Offer">
            <h1>OUR DELICIOUS OFFER</h1>
            <p className="offer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et
                dolore
            </p>
            <div className="cards">
                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon card-1">
                        </div>
                        <h3 className="card-title">TYPES OF COFFEE</h3>
                        <p className="card-text">Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos
                            commodo</p>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon card-2">
                        </div>
                        <h3 className="card-title">COFFEE TO GO</h3>
                        <p className="card-text">Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos
                            commodo</p>
                    </div>
                </div>

                <div className="grid-item">
                    <div className="card">
                        <div className="card-icon card-3">
                        </div>
                        <h3 className="card-title">BEAN VARIETIES</h3>
                        <p className="card-text">Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos
                            commodo</p>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default Offer;