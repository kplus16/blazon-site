export default function Deadline(){
    return (
        <div className="mt-6">
            <label>Do you have a firm deadline for receiving your completed order?</label>
            <div className="w-full text-left mt-4">
                <input type="checkbox" id="answer1" name="answer1" value="answer1" className=""></input>
                <label for="answer1"> Standard 2 week turn around is great</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer2" name="answer2" value="answer2"></input>
                <label for="answer2"> Upgrade to Rush - Ready 1 Week</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer3" name="answer3" value="answer3"></input>
                <label for="answer3"> Upgrade to Rush - 3-Day Super Rush</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer3" name="answer3" value="answer3"></input>
                <label for="answer3"> Need Shirts ASAP? Call Today at 803.796.9100</label>
            </div>
        </div>
    )
}