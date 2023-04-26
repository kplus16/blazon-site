

export default function CustomerDetails(){
    return (
        <>
        <h1>Contact Us!</h1>
        <div className="form-container mt-6">
            <input type="text" placeholder="First Name..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100 focus:shadow-outline mb-3"></input>
            <input type="text" placeholder="Last Name..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100 focus:shadow-outline mb-3"></input>
            <input type="email" placeholder="Email..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100 focus:shadow-outline mb-3"></input>
            <input type="number" placeholder="Phone..." className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-100 focus:shadow-outline mb-3" min="1"></input>
        </div>
        </>
    )
}