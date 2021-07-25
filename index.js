console.log("------------ RAHUL KUVLEKAR -------------");
// console.log(234343);
var chalk=require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var highscore={
                name  : "RAHUL KUVLEKAR ",
                score : 8 };
var userName = readlineSync.question("Your Name Please ? ");
console.log("\n\n");

console.log(chalk.red("Welcome " + chalk.red.bold.underline(userName) + ", Have Great Day Ahead \n\n"))


console.log(chalk.keyword("orange").bold("**** TRIANGLE QUIZ *****\n"));

//function to play quetsions
function play(question,answer)
{
    var userAns=readlineSync.question(chalk.cyan(chalk.blue.bold("Question :: ") + question));

    if(userAns.toUpperCase() === answer.toUpperCase())
    {
        console.log(chalk.green("ANSWER :: You are Right !!! "));
        score++;
    }
    else
    {
        console.log(chalk.redBright("ANSWER :: Sorry ! you are Wrong !!"));
    }

    console.log("SCORE till Now :: " + score );
    console.log("--------------------------------------");
}

//Question for Level 1
quetsionBankOne=[
    {
        question :"1) If a triangle has angles 135deg, 15deg, 30deg. Is it an obtuse triangle ?"+chalk.blueBright("\nA.YES\nB.NO\n"),
        answer:"A"
    },
    {
        question : "2) If a triangle has angles 115deg, 25deg, 40deg. Is it an acute triangle?" + chalk.blueBright("\nA.YES\nB.NO\n"),
        answer : "B"
    },
    {
        question : "3)If a triangle has angles 90deg, 60deg, 30deg. Is it a right angle triangle?" + chalk.blueBright("\nA.YES\nB.NO\n"),
        answer : "A"
    },
    {
        question : "4) A triangle has angles 60deg, 60deg, 60deg. Is it an equilateral triangle?" + chalk.blueBright("\nA.YES\nB.NO\n"),
        answer : "A"
    },
    {
        question : "If a triangle has angles 25deg, 75deg, 80deg. Is it an acute triangle?" + chalk.blueBright("\nA.YES\nB.NO\n"),
        answer : "A"
    }
]

//question for level 2
quetsionBankTwo=[
    {
        question : "If a triangle has 2 sides with equal lengths and 75deg angle between them. What is the type of triangle?" + chalk.blueBright("\nA. Equilateral\nB. Isosceles\nC. Right Angle traingle\n"),
        answer : "B"
    },
    {
        question : "2)If a triangle has 2 angles of 75deg. What is the measure of third angle in degree?" + chalk.blueBright("\nA. 25deg\nB. 30deg\nC. 15deg\n"),
        answer : "B"
    },
    {
        question : "3)If a triangle has 2 sides with equal lengths and 60deg angle between them. What is the type of triangle?" + chalk.blueBright("\nA. Equilateral\nB. Isosceles\nC. Both\n"),
        answer : "C"
    
    }]

// final question for level 3
quetsionBankThree={
    question : "If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?" + chalk.blueBright("\nA. Equilateral\nB. Isosceles\nC. Scalene\n"),
    answer : "C"
    }

//for loop-for level 1 Quiz 
console.log(chalk.inverse("-------------------------- LEVEL 1 --------------------------\n"));
for(var i=0;i<quetsionBankOne.length;i++)
{
    play(quetsionBankOne[i].question,quetsionBankOne[i].answer);
}

console.log("As Current Level SCORE is :: " + score);
//if qualified for level 2
if(score >= 3 )
{
    var currentScore=score;
    console.log(chalk.green.bold("\nYour Are Qualified For LEVEL 2 \n\n"));
    console.log(chalk.inverse("-------------------------- LEVEL 2 --------------------------\n"));
    //for loop-for level 2 quiz 
    for(var i=0;i<quetsionBankTwo.length;i++)
    {
        play(quetsionBankTwo[i].question,quetsionBankTwo[i].answer);
    }
    
    console.log("As Current level SCORE is :: " + (score-currentScore));

    // if qualified for level 3
    if((score-currentScore) >= 2 )
    {   
        var currentScore=score;
        console.log(chalk.green.bold("\nYour Are Qualified For LEVEL 3 \n\n"));
    console.log(chalk.inverse("-------------------------- LEVEL 3 --------------------------\n"));

        play(quetsionBankThree.question,quetsionBankThree.answer);

        // Win the Quiz or Not
        if((score-currentScore)==1)
        {
            console.log(chalk.yellow.bold("CONGRALATIONS ...... " + userName + ", You Won the Quiz ...." ));
            console.log("--------------------------------------");
        }
        else
        {
        console.log(chalk.redBright("Better Luck Next Time !!!! "));
        }
    }
    else
    {
        console.log(chalk.redBright("Better Luck Next Time !!!! "));
    }
}
else
{
    console.log(chalk.redBright("Better Luck Next Time !!!! "));
}

console.log("FINAL SCORE :: " + score);

if(score > highscore.score)
{
    console.log(chalk.yellowBright.bold("\n\n=>> Congratzz " + userName +".... You Have Beaten the previous Highscorer ....." + chalk.yellow.underline("\nPlease send the ScreenShot ")));
}
else
{
    console.log("\n\n=>> Current Highscorer :: " + highscore.name + "\nScore :: " + highscore.score );
}


console.log("\n\n\n------****** THANK YOU ******------");