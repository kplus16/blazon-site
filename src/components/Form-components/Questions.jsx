

export default function Questions(){
    return (
        <div>
            <h1>Questions</h1>
            <label>Which of the following best describes you:</label>
            <input type="checkbox" id="answer1" name="answer1" value="answer1"></input>
            <label for="vehicle1"> I have a bike</label>
            <input type="checkbox" id="answer2" name="answer2" value="answer2"></input>
            <label for="vehicle2"> I have a car</label>
            <input type="checkbox" id="answer3" name="answer3" value="answer3"></input>
            <label for="vehicle3"> I have a boat</label>
            <input type="checkbox" id="answer4" name="answer4" value="answer4"></input>
            <label for="vehicle3">Other</label>
        </div>
    )
}