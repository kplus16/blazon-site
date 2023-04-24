
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-black h-fit top-full w-full footer">
            <div className="text-white container">
                <h1>Footer</h1>
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