

export default function Questions(){
    return (
        <>
        <div className="mt-6">
            <label>Which of the following best describes you:</label>
            <div className="w-full text-left mt-4">
                <input type="checkbox" id="answer1" name="answer1" value="answer1" className=""></input>
                <label for="answer1"> I have a pretty clear idea of what tee shirts / apparel I need (quantities, brands, etc.)</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer2" name="answer2" value="answer2"></input>
                <label for="answer2"> I'm new at the tee shirt process, and I'm just looking for basic information/ need a general quote</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer3" name="answer3" value="answer3"></input>
                <label for="answer3"> Other</label>
            </div>
        </div>
        </>
    )
}