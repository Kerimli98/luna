import {useState, useEffect} from "react";
import "../Assets/Styles/btn.scss";

function ScrollToTop(props) {
    const [visible, setVisible] = useState(false);
    const Visibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', Visibility);
        return () => {
            window.removeEventListener('scroll', Visibility);
        }
    }, [])
    return (
        <div className={(visible ? "btn-container" : "opacity")}>
            <button className="btn" type="button" onClick={toTop}>
                <i className="fas fa-chevron-up"></i>
            </button>
        </div>
    )
        ;
}

export default ScrollToTop;