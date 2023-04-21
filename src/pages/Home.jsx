import Hero from "../components/Hero"
import Services from "../components/Services"
import Blazon from "../components/Blazon"
import Gmap from "../components/Gmap"
import { motion } from "framer-motion"
import { useEffect } from "react"

import Aos from "aos"



export default function Home(){
    useEffect(() => {
        Aos.init({})
    }, [])
    return(
        <>
        <motion.div 
            initial={{x: "100%" , opacity: 0}}
            animate={{x: "0%", opacity: 1}}
            transition={{duration: 0.75, ease: "easeOut"}}
            exit={{x: "-100%", opacity: 0}}
        >
            <Hero />
            <Services />
            <Blazon />
            <Gmap/>
        </motion.div>
        </>
    )
}