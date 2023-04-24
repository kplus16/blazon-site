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

    useEffect(() => {
        if(isScreenprintOpen || isPromoitemsOpen || isEmbroideryOpen || isDTGOpen){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = null;
        }
    }, [isScreenprintOpen, isPromoitemsOpen, isEmbroideryOpen, isDTGOpen])
    

    return (
        <>
            <section className="section-services">
                <div className="services-container">
                    <div onClick={() => setIsScreenprintOpen(true)} data-aos="fade-left">
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/screenprinting3.svg"></img>
                    </div>
                    <div onClick={() => setPromoitemsOpen(true)} data-aos="fade-left" data-aos-delay="100">
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/embroidery3.svg"></img>
                    </div>
                    <div onClick={() => setEmbroideryOpen(true)} data-aos="fade-left" data-aos-delay="200">
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/promoitems3.svg"></img>
                        
                    </div>
                    <div onClick={() => setDTGOpen(true)} data-aos="fade-left" data-aos-delay="300">
                        <img src="https://weareblazon.com/wp-content/uploads/2022/02/directtogarment3-1.svg"></img>
                    </div>
                </div>
            </section>
            <AnimatePresence mode="wait">
                {isScreenprintOpen && <Screenprinting open={isScreenprintOpen} onClose={() => setIsScreenprintOpen(false)} key="screenprint"/>}
                {isPromoitemsOpen && <Promoitems open={isPromoitemsOpen} onClose={() => setPromoitemsOpen(false)} key="promoitem"/>}
                {isEmbroideryOpen && <Embroidery open={isEmbroideryOpen} onClose={() => setEmbroideryOpen(false)} key="embroidery"/>}
                {isDTGOpen && <Directtogarment open={isDTGOpen} onClose={() => setDTGOpen(false)} key="dtg"/>}
            </AnimatePresence>
        </>
    )
}

// {/* <Screenprinting open={isScreenprintOpen} onClose={() => setIsScreenprintOpen(false)} key="screenprint"/>
//                 <Promoitems open={isPromoitemsOpen} onClose={() => setPromoitemsOpen(false)} key="promoitem"/>
//                 <Embroidery open={isEmbroideryOpen} onClose={() => setEmbroideryOpen(false)} key="embroidery"/>
//                 <Directtogarment open={isDTGOpen} onClose={() => setDTGOpen(false)} key="dtg"/> */}