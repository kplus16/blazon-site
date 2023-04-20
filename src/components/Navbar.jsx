import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="navbar">
        <Link to="/" className="site-title">Blazon</Link>
            <ul>
                <CustomLink to="/about" >About</CustomLink>
                <CustomLink to="/quote" >Quote</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }){
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to= {to} {...props}>
                {children}
            </Link>
        </li>
    )
}