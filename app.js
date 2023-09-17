const questions = [{
	'que': 'Which of the following is a markup language?',
	'a': 'HTML',
	'b': 'CSS',
	'c': 'JavaScript',
	'd': 'PHP',
	'correct': 'a'
},
{
  'que': 'What is the correct way to declare a variable in C#?',
  'a': 'var myVariable;',
  'b': 'let myVariable;',
  'c': 'const myVariable = 5;',
  'd': 'int myVariable;',
  'correct': 'd'
},
{	'que': 'Which of the following programming languages is a statically-typed language?',
	'a': 'Python',
	'b': 'JavaScript',
	'c': 'Java',
	'd': 'Ruby',
	'correct': 'c'
},
{	'que': 'Which of the following is a server-side web application framework?',
	'a': 'React',
	'b': 'Angular',
	'c': 'Express',
	'd': 'Vue.js',
	'correct': 'c'
},
{
  'que': 'Which of the following is a relational database management system?',
  'a': 'MongoDB',
  'b': 'MySQL',
  'c': 'Redis',
  'd': 'Elasticsearch',
  'correct': 'b'
}
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll(".options");

const loadQuestion = () => {
	if (index == total) {
		return endQuiz();
	}
	reset();
	const data = questions[index];
	quesBox.innerText = `${index+1}) ${data.que}`
	optionInput[0].nextElementSibling.innerText = data.a;
	optionInput[1].nextElementSibling.innerText = data.b;
	optionInput[2].nextElementSibling.innerText = data.c;
	optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
	const data = questions[index];
	const ans = getAnswer();
	if (ans == data.correct) {
		right++;
	} else {
		wrong++;
	}
	index++;
	loadQuestion();
	return;
};

const getAnswer = () => {
	let answer;
	optionInput.forEach(
		(input) => {
			if (input.checked) {
				answer = input.value;
			}

		});
	return answer;
}

const reset = () => {
	optionInput.forEach(
		(input) => {
			input.checked = false
		})
}

const submit = document.getElementById("btn");
btn.addEventListener("click", function(){
	//console.log("working");
	//give the name of the function that you want to call on click();
	//getAnswer();
	submitQuiz();
});

const endQuiz = () => {
	end = document.getElementById("box").innerHTML = `
	<div style="text-align: center;"> 
	<h3>Thank You! For Playing the Quiz. </h3>
	<h2><span style="color: green;"> You Score! </span> <br> ${right} / ${total} </h2>
	</div>
	`
}

loadQuestion();