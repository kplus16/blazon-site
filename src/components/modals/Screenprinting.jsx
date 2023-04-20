import { motion } from "framer-motion"

export default function Screenprinting({open, onClose}){
   
    if(!open){
        return null
    }
    return ( 
        <motion.div className="modalpage"
            initial={{x: "100%", opacity: 1}}
            animate={{x: "0%", opacity: 1}}
            exit={{x: "100%"}}
            transition={{duration: .75, ease: "easeIn"}}
        >
            <div>
                Screenprinting Modal
                <button className="btn-close" onClick={onClose}>
                    close
                </button>
            </div>
        </motion.div>
    )
}