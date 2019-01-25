var questions = [{
  question: "What was the first year that Orange County, California voted Democrat since the Great Depression (1929-1939)?",
  choices: ["1992 : Bill Clinton", "2008 : Barack Obama", "2016 : Donald Trump", "2000 : George W. Bush"],
  answer: "2016 : Donald Trump",
}, {
  question: "Eating how many bananas would give you a radiation dose equal to a dental X-ray?",
  choices: ["100,000", "50", "253", "200,000,000 "],
  answer: "50",
}, {
  question: "  What day is National Trivia Day?",
  choices: ["January 4", "May 5", "June 21", "April 1"],
  answer: "January 4",
}, {
  question: "How many milisieverts of radiation are you exposed to during a flight from Los Angeles to New York?",
  choices: ["0.1 mSv (same as a chest X-ray!)", "0.35 mSv", "1.0 mSv", "7.0 mSv"],
  answer: "0.35 mSv",
}];


var i = 0;

var wins=0;

var questionsRemaining=questions.length;

var showQuestion;

var count = 30;

var intervalId;


function displayQuestion(i) {
  $("#Questions").html("<h2>" + questions[i].question + "</h2>");
  $("#choices").append("<li>" + questions[i].choices[0] + "</li>");
  $("#choices").append("<li>" + questions[i].choices[1] + "</li>");
  $("#choices").append("<li>" + questions[i].choices[2] + "</li>");
  $("#choices").append("<li>" + questions[i].choices[3] + "</li>");
};

function nextQuestion() {
 
  questions++;

  setTimeout(displayQuestion, 1000);

};


function decrement() {
    
  count--;

  $("#timer").html("<h2> Time Remaining:" + " " + count + "</h2>");

  if (count === 0) {
    stop();
    alert("Time Up!");
  }
};

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
};

function stop() {
  clearInterval(intervalId);
  nextQuestion();
};

displayQuestion(0);
run();

/*function question(i) {
  $('#Questions').fadeOut("slow");
      '<h1>Question ' + (i + 1) + '<h1>' +
      '<h2>' + allQuestions[i].question + '</h2>' +
      '<input type="radio" name="questionChoices" value="' + questions[i].choices[0] + '" checked="yes">' + questions[i].choices[0] + '</input>' +
      '<input type="radio" name="questionChoices" value="' + questions[i].choices[1] + '">' + questions[i].choices[1] + '</input>' +
      '<input type="radio" name="questionChoices" value="' + questions[i].choices[2] + '">' + questions[i].choices[2] + '</input>' +
      '<input type="radio" name="questionChoices" value="' + questions[i].choices[3] + '">' + questions[i].choices[3] + '</input>' +
      '<button id="submitButton">Submit</button>' +
      '</div>'
  );
  $('#Questions').fadeIn("slow");
*/

/*function displayQuestion() {
        $("#Questions").html(questions[question]);
      }
      
function nextQuestion() {
       
        question++;
      
        setTimeout(displayQuestion, 1000);
      
        if (question === questions.length) {
          question = 0;
        }
      }

function correctAnswer() {

  if ($("#answer").click()){
    nextQuestion;
  }
  else {
    stopSlideshow;
  }
}
      
function startSlideshow() {
      
        showQuestion = setInterval(nextQuestion, 3000);
      
      }
function stopSlideshow() {
      
        clearInterval(showQuestion);
      
      }
      displayQuestion();

    
    */


