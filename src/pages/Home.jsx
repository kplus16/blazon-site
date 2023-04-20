import Hero from "../components/Hero"
import Services from "../components/Services"
import Blazon from "../components/Blazon"
import { motion } from "framer-motion"


export default function Home(){
    return(
        <>
        <motion.div 
            initial={{x: "100%"}}
            animate={{x: "0%"}}
            transition={{duration: 0.75, ease: "easeOut"}}
            exit={{x: "-100%"}}
        >
            <Hero />
            <Services />
            <Blazon />
        </motion.div>
        </>
    )
}