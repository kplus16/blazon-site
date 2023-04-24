
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-black h-fit bottom-0">
            <div className="text-white container">
                <h1>Quick Links</h1>
                <ul>
                    <li>
                        <Link to="/quote">Get a quote</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}