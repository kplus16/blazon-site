import { useState, useEffect } from "react"
import Screenprinting from "./modals/Screenprinting"
import Promoitems from "./modals/Promoitems"
import Embroidery from "./modals/Embroidery"
import Directtogarment from "./modals/Directtogarment"
import { AnimatePresence } from "framer-motion"

export default function Services(){

    const [ isScreenprintOpen, setIsScreenprintOpen ] = useState(false)
    const [ isPromoitemsOpen, setPromoitemsOpen ] = useState(false)
    const [ isEmbroideryOpen, setEmbroideryOpen ] = useState(false)
    const [ isDTGOpen, setDTGOpen ] = useState(false)

    return (
        <>
            <section className="section-services">
                <div className="services-container">
                    <div onClick={() => setIsScreenprintOpen(true)}>
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/screenprinting3.svg"></img>
                    </div>
                    <div onClick={() => setPromoitemsOpen(true)}>
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/embroidery3.svg"></img>
                    </div>
                    <div onClick={() => setEmbroideryOpen(true)}>
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/promoitems3.svg"></img>
                        
                    </div>
                    <div onClick={() => setDTGOpen(true)}>
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/directtogarment3-1.svg"></img>
                    </div>
                </div>
            </section>
            <AnimatePresence initial={false} onExitComplete={() => console.log("finished?")}>
                <Screenprinting open={isScreenprintOpen} onClose={() => setIsScreenprintOpen(false)} key="screenprint"/>
                <Promoitems open={isPromoitemsOpen} onClose={() => setPromoitemsOpen(false)} key="promoitem"/>
                <Embroidery open={isEmbroideryOpen} onClose={() => setEmbroideryOpen(false)} key="embroidery"/>
                <Directtogarment open={isDTGOpen} onClose={() => setDTGOpen(false)} key="dtg"/>
            </AnimatePresence>
        </>
    )
}