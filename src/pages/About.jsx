import { motion } from "framer-motion"
export default function About(){
    return(
        <>
            <motion.div
                initial={{x: "100%"}}
                animate={{x: "0%"}}
                transition={{duration: 0.75, ease: "easeInOut"}}
                exit={{x:"-100%"}}
            >
                <h1>About</h1>
            </motion.div>
        </>
    )
}