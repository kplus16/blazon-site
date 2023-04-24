
// components
import Hero from "../components/Hero"
import Services from "../components/Services"
import Blazon from "../components/Blazon"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"


// dependencies
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
            <ContactForm />
            {/* <AboutVideo/> */}
        </motion.div>
        </>
    )
}