import { motion } from "framer-motion"
export default function Quote(){
    return(
        <>
            <motion.div
                initial={{x: "100%"}}
                animate={{x: "0%"}}
                transition={{duration: 0.75, ease: "easeOut"}}
                exit={{x: "-100%"}}
            >
                <h1>Quote</h1>
            </motion.div>
        </>
    )
}