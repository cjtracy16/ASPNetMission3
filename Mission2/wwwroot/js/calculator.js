$("#calculate").click(function () {

    const displayOutput = document.querySelector('#display');

    let assignments = parseFloat($("#Assignments").val());
    let projects = parseFloat($("#Projects").val());
    let quizzes = parseFloat($("#Quizzes").val());
    let exams = parseFloat($("#Exams").val());
    let intex = parseFloat($("#INTEX").val());
    let finalscore = ((assignments * .55) + (projects * .05) + (quizzes * .10) + (exams * .20) + (intex * .10)).toFixed(2);
    let finalgrade = "N";

    /*alert(`Your final score is ${finalscore}!`);*/

    //if (isNaN(assignments) || isNaN(projects) || isNaN(quizzes) || isNaN(exams) || isNaN(intex)) {
    //    displayOutput.textContent = `Please Input a Valid Integer in all Fields`;
    //}

    //else {
    if (finalscore >= 94) {
        finalgrade = "A";
    }
    else if (finalscore >= 90) {
        finalgrade = "A-";
    }
    else if (finalscore >= 87) {
        finalgrade = "B+";
    }
    else if (finalscore >= 84) {
        finalgrade = "B";
    }
    else if (finalscore >= 80) {
        finalgrade = "B-";
    }
    else if (finalscore >= 77) {
        finalgrade = "C+";
    }
    else if (finalscore >= 74) {
        finalgrade = "C";
    }
    else if (finalscore >= 70) {
        finalgrade = "C-";
    }
    else if (finalscore >= 67) {
        finalgrade = "D+";
    }
    else if (finalscore >= 64) {
        finalgrade = "D";
    }
    else if (finalscore >= 60) {
        finalgrade = "D-";
    }
    else {
        finalgrade = "E";
    }

    displayOutput.textContent = `Final Score: ${finalscore} \n Final Grade: ${finalgrade}`
    //}
    
})