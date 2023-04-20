import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <section className="hero-container">
            <div className="video-container">
                <video autoPlay muted loop src="https://weareblazon.com/wp-content/uploads/2022/01/Blazon_HomepageLoop.mp4"></video>
            </div>
            <div className="header-container">
                <img className="hero-heading" src="https://weareblazon.com/wp-content/uploads/2021/02/logo.svg"/>
                <Link to="/quote" className="btn-heading"></Link>
            </div>
        </section>
    )
}