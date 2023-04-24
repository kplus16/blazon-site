import React, { useEffect } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { useState } from "react";


export default function Navbar(){
    const [ lastScroll, setLastScroll ] = useState(0);
    
    const changeBackground = () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0){
            document.getElementById("navbar").classList.remove("scroll-up")
        }

        if (currentScroll > lastScroll && !document.getElementById("navbar").classList.contains("scroll-down")){
            document.getElementById("navbar").classList.remove("scroll-up")
            document.getElementById("navbar").classList.add("scroll-down")
        }

        if (currentScroll < lastScroll && document.getElementById("navbar").classList.contains("scroll-down")){
            document.getElementById("navbar").classList.remove("scroll-down")
            document.getElementById("navbar").classList.add("scroll-up")
        }

        setLastScroll(currentScroll)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        return () => window.removeEventListener('scroll', changeBackground)
    })
    
    return(
        <nav className="bg-white navbar h-16" id="navbar">
            <div className="text-black max-w-7xl mx-auto h-full justify-stretch">
                <div className="flex justify-between align-middle">
                        <Link to="/" className="p-2">
                            <img width="220" className="hero-heading" src="https://weareblazon.com/wp-content/uploads/2021/02/logo.svg"/>
                        </Link>
                    <ul className="flex list-none gap-4 align-middle m-4 link-container">
                        <CustomLink to="/about" >About</CustomLink>
                        <CustomLink to="/quote" >Get a Quote!</CustomLink>
                    </ul>
                </div>
            </div>
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