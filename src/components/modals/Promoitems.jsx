import { motion } from "framer-motion"

export default function Promoitems({open, onClose}){
   
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
                Promo Items
                <button className="btn-close rounded-full" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </motion.div>
    )
}