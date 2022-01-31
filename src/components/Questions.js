import React, { useState } from 'react';
import './Questions.css';

export default function Questions() {
	const questions = [
		{
			questionText: '2021 Bahrain Grand Prix: Which driver received a 10-second time penalty for causing a collision with Esteban Ocon?',
			answerOptions: [
				{ answerText: 'Pierre Gasly', isCorrect: false },
				{ answerText: 'Antonio Giovinazzi', isCorrect: false },
				{ answerText: 'Carlos Sainz', isCorrect: false },
				{ answerText: 'Sebastian Vettel', isCorrect: true },
			],
		},
		{
			questionText: 'In Bahrain, Lewis Hamilton managed to win the opening race of the season for the first time since…?',
			answerOptions: [
				{ answerText: '2014', isCorrect: false },
				{ answerText: '2015', isCorrect: true },
				{ answerText: '2016', isCorrect: false },
				{ answerText: '2017', isCorrect: false },
			],
		},
		{
			questionText: '2021 Emilia Romagna Grand Prix: Which of the following teams did not score a double points finish at Autodromo Imola?',
			answerOptions: [
				{ answerText: 'Alpine', isCorrect: false },
				{ answerText: 'Ferrari', isCorrect: false },
				{ answerText: 'McLaren', isCorrect: false },
				{ answerText: 'Red Bull', isCorrect: true },
			],
		},
		{
			questionText: '2021 Portuguese Grand Prix: Who held third place in the drivers’ standings after the race at Portimão?',
			answerOptions: [
				{ answerText: 'Valtteri Bottas', isCorrect: false },
				{ answerText: 'Charles Leclerc', isCorrect: false },
				{ answerText: 'Lando Norris', isCorrect: true },
				{ answerText: 'Sergio Perez', isCorrect: false },
			],
		},
		{
			questionText: '2021 Monaco Grand Prix: Which team ran a one-off livery for the race at Circuit de Monaco?',
			answerOptions: [
				{ answerText: 'McLaren', isCorrect: true },
				{ answerText: 'Mercedes', isCorrect: false },
				{ answerText: 'Red Bull', isCorrect: false },
				{ answerText: 'Williams', isCorrect: false },
			],
		},
		{
			questionText: 'Charles Leclerc took a stunning pole position at his home Grand Prix, becoming the first Ferrari driver since whom to take pole at Monaco?',
			answerOptions: [
				{ answerText: 'Michael Schumacher', isCorrect: false },
				{ answerText: 'Felipe Massa', isCorrect: false },
				{ answerText: 'Kimi Raikkonen', isCorrect: true },
				{ answerText: 'Sebastian Vettel', isCorrect: false },
			],
		},
		{
			questionText: '2021 Azerbaijan Grand Prix: Max Verstappen and which other driver suffered tyre blowouts during the race in Baku?',
			answerOptions: [
				{ answerText: 'Nicholas Latifi', isCorrect: false },
				{ answerText: 'Esteban Ocon', isCorrect: false },
				{ answerText: 'George Russell', isCorrect: false },
				{ answerText: 'Lance Stroll', isCorrect: true },
			],
		},
		{
			questionText: 'What feature cost Hamilton a likely win in the final restart at Baku?',
			answerOptions: [
				{ answerText: 'DAS', isCorrect: false },
				{ answerText: 'Brake magic', isCorrect: true },
				{ answerText: 'DRS', isCorrect: false },
				{ answerText: 'Puncture', isCorrect: false },
			],
		},
    {
			questionText: '2021 French Grand Prix: How many drivers retired from the race at Circuit Paul Ricard?',
			answerOptions: [
				{ answerText: '0', isCorrect: true },
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
			],
		},
  {
			questionText: 'France 2021 was the first time Perez and Verstappen shared the podium. How many MORE times would they share the podium in 2021?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '3', isCorrect: true },
				{ answerText: '2', isCorrect: false },
				{ answerText: '1', isCorrect: false },
			],
		},
    {
			questionText: '2021 Austrian Grand Prix: Which two drivers collided on the final lap at the Red Bull Ring?',
			answerOptions: [
				{ answerText: 'Antonio Giovinazzi & Esteban Ocon', isCorrect: false },
				{ answerText: 'Kimi Räikkönen & Sebastian Vettel', isCorrect: true },
				{ answerText: 'Kimi Räikkönen & Yuki Tsunoda', isCorrect: false },
				{ answerText: 'Nikita Mazepin & Sebastian Vettel', isCorrect: false },
			],
		},
    {
			questionText: '2021 British Grand Prix: At which corner did Max Verstappen and Lewis Hamilton collide on the opening lap at Silverstone?',
			answerOptions: [
				{ answerText: 'Abbey', isCorrect: false },
				{ answerText: 'Club', isCorrect: false },
				{ answerText: 'Copse', isCorrect: true },
				{ answerText: 'Woodcote', isCorrect: false },
			],
		},
    {
			questionText: 'Who was the last Williams driver to qualify on the front row for the team, before George Russell took P2 on the grid for the 2021 Belgian GP?',
			answerOptions: [
				{ answerText: 'Lance Stroll', isCorrect: true },
				{ answerText: 'Valtteri Bottas', isCorrect: false },
				{ answerText: 'Pastor Maldonado', isCorrect: false },
				{ answerText: 'Damon Hill', isCorrect: false },
			],
		},
    {
			questionText: '2021 Dutch Grand Prix: Which driver missed the race at Circuit Zandvoort due to a positive COVID-19 test result?',
			answerOptions: [
				{ answerText: 'Robert Kubica', isCorrect: false },
				{ answerText: 'Sergio Perez', isCorrect: false },
				{ answerText: 'Kimi Räikkönen', isCorrect: true },
				{ answerText: 'Lance Stroll', isCorrect: false },
			],
		},
    {
			questionText: '2021 Italian Grand Prix: Daniel Ricciardo and Lando Norris scored a popular 1-2 for McLaren at Monza, but who joined them on the podium?',
			answerOptions: [
				{ answerText: 'Valtteri Bottas', isCorrect: true },
				{ answerText: 'Pierre Gasly', isCorrect: false },
				{ answerText: 'Sergio Perez', isCorrect: false },
				{ answerText: 'Carlos Sainz', isCorrect: false },
			],
		},
    {
			questionText: 'Lando Norris took an epic pole position for McLaren in Russia. Who started on the front row alongside him?',
			answerOptions: [
				{ answerText: 'Sainz', isCorrect: true },
				{ answerText: 'Hamilton', isCorrect: false },
				{ answerText: 'Russell', isCorrect: false },
				{ answerText: 'Verstappen', isCorrect: false },
			],
		},
    {
			questionText: '2021 Russian Grand Prix: Which of the following is not true about the race at Sochi Autodrom?',
			answerOptions: [
				{ answerText: 'Max Verstappen finished second after starting from the back of the grid', isCorrect: false },
				{ answerText: 'Lewis Hamilton scored his 100th Formula 1 victory', isCorrect: false },
				{ answerText: 'Lando Norris finished sixth after leading for much of the race', isCorrect: true },
				{ answerText: 'Carlos Sainz led for the first 12 laps', isCorrect: false },
			],
		},
    {
			questionText: '2021 Turkish Grand Prix: Which driver completed the entire race at Istanbul Park on one set of intermediate tyres?',
			answerOptions: [
				{ answerText: 'Esteban Ocon', isCorrect: true },
				{ answerText: 'George Russell', isCorrect: false },
				{ answerText: 'Mick Schumacher', isCorrect: false },
				{ answerText: 'Lance Stroll', isCorrect: false },
			],
		},
    {
			questionText: 'Verstappen won the United States Grand Prix making it a Honda-powered first US win for two decades. At which circuit did Honda win their last US F1 Grand Prix?',
			answerOptions: [
				{ answerText: 'Dallas', isCorrect: false },
				{ answerText: 'Long Beach', isCorrect: false },
				{ answerText: 'Watkins Glen', isCorrect: false },
				{ answerText: 'Phoenix', isCorrect: true },
			],
		},
    {
			questionText: '2021 Sao Paulo Grand Prix: Which two teams were level on points in the constructors’ standings after the race at Interlagos?',
			answerOptions: [
				{ answerText: 'Alfa Romeo & Williams', isCorrect: false },
				{ answerText: 'AlphaTauri & Alpine', isCorrect: true },
				{ answerText: 'Ferrari & McLaren', isCorrect: false },
				{ answerText: 'Mercedes & Red Bull', isCorrect: false },
			],
		},
    {
			questionText: 'Hamilton was disqualified from Sao Paulo GP qualifying. The FIA rules state: "When DRS is activated...the gap must be between 10mm and __mm". Fill in the blank.',
			answerOptions: [
				{ answerText: '15mm', isCorrect: false },
				{ answerText: '70mm', isCorrect: false },
				{ answerText: '85mm', isCorrect: true },
				{ answerText: '100mm', isCorrect: false },
			],
		},
    {
			questionText: '2021 Saudi Arabian Grand Prix: The chaotic inaugural race in Jeddah had how many virtual safety car periods?',
			answerOptions: [
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '5', isCorrect: false },
			],
		},
    {
			questionText: 'Esteban Ocon missed out on a podium to Valtteri Bottas by what margin in Saudi Arabia?',
			answerOptions: [
				{ answerText: '0.001s', isCorrect: false },
				{ answerText: '0.012s', isCorrect: false },
				{ answerText: '0.102s', isCorrect: true },
				{ answerText: '1.102s', isCorrect: false },
			],
		},
    {
			questionText: '2021 Abu Dhabi Grand Prix: After a controversial final race, how many points separated Max Verstappen and Lewis Hamilton in the drivers championship standings?',
			answerOptions: [
				{ answerText: '5', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '12', isCorrect: false },
			],
		},
    {
			questionText: 'Max Verstappen is the first Dutch champion, the first non-Mercedes champion of the hybrid era and Hondas first since 1991. What % of race laps did he lead in 2021?',
			answerOptions: [
				{ answerText: '33%', isCorrect: false },
				{ answerText: '40%', isCorrect: false },
				{ answerText: '50%', isCorrect: true },
				{ answerText: '60%', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const[scoreList, setScoreList] = useState(0);

	const handleAnswerButton = (isCorrect) => {
		if(isCorrect === true) {
			setScore(score +1);
		}

		const nextQuestion = currentQuestion +1;
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}else{
			setShowScore(true);
		}
	}

	const handleResetButton = (score) => {
		setScoreList(scoreList+score);
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	return (
		<div className = 'bod'>
		<div className='app'>
			{showScore ? (
				<div className='score-section'><h2>You scored {score} out of {questions.length}</h2>
				<button onClick={() => handleResetButton(score)}>Play Again!</button></div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}