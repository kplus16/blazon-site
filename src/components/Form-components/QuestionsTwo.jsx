

export default function QuestionsTwo(){
    return (
        <>
        <div>
            <label className="mb-10">Tell us about the design you want to put on your apparel (*if possible, include a photo of your artwork).</label>
            <div className="w-full text-left mt-4">
                <input type="checkbox" id="answer1" name="answer1" value="answer1" className=""></input>
                <label for="answer1"> It's my company or event logo</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer2" name="answer2" value="answer2"></input>
                <label for="answer2"> I have rough sketches that I need a professional to finish</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer3" name="answer3" value="answer3"></input>
                <label for="answer3"> Print ready artwork (.ai or .eps file)</label>
            </div>
            <div className="w-full text-left mt-2">
                <input type="checkbox" id="answer4" name="answer3" value="answer3"></input>
                <label for="answer4"> Other</label>
            </div>
        </div>
        </>
    )
}