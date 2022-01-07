import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Banner/>
            <Offer/>
            <Shop/>
            <Footer/>
            <ScrollToTop/>
        </div>
    );
}

export default App;
