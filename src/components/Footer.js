import "../Assets/Styles/footer.scss";

function Footer() {
    return (
        <div className="Footer">
            <h1>SUBSCRIBE TO NEWSLETTER</h1>
            <div className="container">
                <div className="links">
                    <ul>
                        <li>About</li>
                        <li>Contact us</li>
                        <li>Menu</li>
                    </ul>
                </div>

                <div className="send-mail">
                    <p>Join Now And Get 20% Off</p>
                    <label>
                        <input type="text" placeholder="Your Email"/>
                        <button>Send</button>
                    </label>
                </div>

                <div className="socials">
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;