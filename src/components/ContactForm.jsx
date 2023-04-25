import { useEffect, useState } from "react"
import CustomerDetails from "./Form-components/CustomerDetails";
import Questions from "./Form-components/Questions";
import QuestionsTwo from "./Form-components/QuestionsTwo";
import Quantity from "./Form-components/Quantity";
import Deadline from "./Form-components/Deadline";
import Other from "./Form-components/Other";



export default function ContactForm(){

    const [page, setPage] = useState(0);
    const [width, setWidth] = useState("");

    const FormTitles = ["Customer Details", "Questions", "QuestionsTwo", "Quantity", "Deadline", "Other"]

    useEffect(() => {
        if(page === 0){
            setWidth("16%")
        }else if(page === 1){
            setWidth("32%")
        }else if(page === 2){
            setWidth("48%")
        }else if(page === 3){
            setWidth("64%")
        }else if(page === 4){
            setWidth("80%")
        }else if(page === 5){
            setWidth("100%")
        }
    }, [page])

    const PageDisplay = () => {
        if(page === 0){
            return <CustomerDetails/>
        }else if(page === 1){
            return <Questions/>
        }else if(page === 2){
            return <QuestionsTwo/>
        }else if(page === 3){
            return <Quantity/>
        }else if(page === 4){
            return <Deadline/>
        }else {
            return <Other />
        }
        
    }

    

    return (
        <>
        <section className="text-center flex justify-center align-middle">
            <div className="form bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 w-2/5 text-center h-96 flex flex-col justify-between">
                <div className="progressbar">
                    <div className="w-full h-5 bg-gray-200 rounded-full dark:bg-gray-700">
                        <div className="bg-green-600 text-xs font-medium text-blue-100 text-center h-full p-0.5 leading-none rounded-full" style={{width: width}}></div>
                        </div>
                </div>
                <div className="form-container w-full h-4/6">
                    <div className="form-body">
                        {PageDisplay()}
                    </div>
                </div>
                <div className="bottom-8">
                        <button 
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-l disabled:bg-gray-200"
                        disabled = {page ==  0}
                        onClick={() => setPage((prevCount) => prevCount-1)}>Prev</button>
                        <button 
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-r disabled:bg-gray-200"
                        disabled = {page ==  FormTitles.length -1}
                        onClick={() => setPage((prevCount) => prevCount+1)}>Next</button>
                    </div>
            </div>
        </section>
        </>
    )
}
    
