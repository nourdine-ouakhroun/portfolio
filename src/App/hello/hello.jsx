import { useEffect, useRef, useState } from 'react';
import './hello.css';
const KeyBoard = ()=>{
	return(
		<div className='flex justify-center items-center rounded-xl bg-[rgba(0,0,0,0.15)] w-full h-[12rem]'>
			<div className='w-[85%] h-[85%] flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-xl text-white'>// arrows to play</span>
					<span className='text-xl text-white'>// use Keyboard</span>
				</div>
				<div className='h-full w-full flex items-center flex-col justify-between'>
					<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
						<img className="rotate-270" src="/assets/playIcon.svg" alt=""/>
					</div>
					<div className='flex gap-4'>
						<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img className="rotate-180" src="/assets/playIcon.svg" alt=""/>
						</div>
						<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img className="rotate-90" src="/assets/playIcon.svg" alt=""/>
						</div>
						<div className='border-[2px] border-custom-gray w-[70px] h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img src="/assets/playIcon.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Food = ()=>{
	return (
		<div className='flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[rgba(67,217,173,0.15)]'>
			<div className='flex justify-center items-center w-[70%] h-[70%] rounded-full bg-[rgba(67,217,173,0.40)]'>
				<div className='w-[60%] h-[60%] rounded-full bg-light-green'>
				</div>
			</div>
		</div>
	)
}

const FoodContainer = () => {
	return(
		<div className='flex justify-center items-center w-full h-[12rem]'>
			<div className='w-[85%] h-[85%] flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-xl text-white'>// food left</span>
				</div>
				<div className='w-full flex flex-wrap gap-4'>
				{
					Array.from(({length: 10}), (_, index) =>{
						return (<Food key={index}/>)
					})
				}
				</div>
			</div>
		</div>
	)
}

const Skip = () => {
	return (
		<div className='w-full h-[30%] flex justify-end items-end'>
			<div className='flex justify-center items-center w-[80px] h-[50px] border-[1px] border-white rounded-xl'>
				<span className=''>Skip</span>
			</div>
		</div>
	)
}

const SnakeGame = () => {
	const canvasRef = useRef(null);
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);

	const canvasSizeX = 550;
	const canvasSizeY = 1000;
	const gridSize = 15;
	const totalCells = canvasSizeX / gridSize;


	const [snake, setSnake] = useState([
	{ x: 300, y: 475 },
	{ x: 300, y: 490 },
	{ x: 300, y: 505 },
	{ x: 300, y: 520 },
	{ x: 300, y: 535 },
	{ x: 300, y: 550 },
	{ x: 300, y: 565 },
	{ x: 300, y: 580 },
	{ x: 300, y: 595 },
	{ x: 300, y: 610 },
	{ x: 300, y: 625 },
	{ x: 300, y: 640 },
	{ x: 300, y: 655 },
	{ x: 300, y: 670 },
	{ x: 300, y: 685 },
	{ x: 300, y: 700 },
	{ x: 300, y: 715 },
	{ x: 300, y: 730 },
	{ x: 300, y: 745 },
	{ x: 300, y: 760 },
	{ x: 300, y: 775 },
	{ x: 300, y: 790 },
	{ x: 300, y: 805 },
	{ x: 300, y: 820 },
	{ x: 300, y: 835 },
	{ x: 300, y: 850 },
	{ x: 300, y: 865 },
	{ x: 300, y: 880 },
	{ x: 300, y: 895 },
	{ x: 300, y: 910 },
	{ x: 300, y: 925 },
	{ x: 300, y: 940 },
	{ x: 300, y: 955 },
	{ x: 300, y: 970 },
	{ x: 300, y: 985 },
	{ x: 300, y: 1000 },
	]);
	const [food, setFood] = useState({ x: 450, y: 450 });
	const [direction, setDirection] = useState("UP");
	const [isMoving, setIsMoving] = useState(false);

	const moveSnake = () => {
	const newSnake = [...snake];
	const head = { ...newSnake[0] };

	switch (direction) {
		case "UP":
		head.y -= gridSize;
		break;
		case "DOWN":
		head.y += gridSize;
		break;
		case "LEFT":
		head.x -= gridSize;
		break;
		case "RIGHT":
		head.x += gridSize;
		break;
		default:
		break;
	}

	newSnake.unshift(head);

	// Check for collisions with food
	if (head.x >= food.x && head.x < food.x + gridSize && head.y >= food.y && head.y < food.y + gridSize) {
		setScore(score + 1);
		setFood({
		x: Math.floor(Math.random() * totalCells) * gridSize,
		y: Math.floor(Math.random() * totalCells) * gridSize,
		});
	} else {
		newSnake.pop();
	}

	// Check for collisions with walls or itself
	if (
		head.x < 0 ||
		head.x >= canvasSizeX ||
		head.y < 0 ||
		head.y >= canvasSizeY ||
		newSnake.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
	) {
		setGameOver(true);
		return;
	}

	setSnake(newSnake);
	};

	const Circle = ({ctx, x, y}) => {
		ctx.beginPath();
		ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize * 1.2, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(67, 217, 173, 0.15)"; // Outer circle
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize * 0.9, 0, 2 * Math.PI);
		ctx.fillStyle = "rgba(67, 217, 173, 0.4)"; // Middle circle
		ctx.fill();
		
		ctx.beginPath();
		ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize * 0.5 , 0, 2 * Math.PI);
		ctx.fillStyle = "#43D9AD"; // Inner circle
		ctx.fill();
	}
	const snackHead = ({ ctx, x, y }) => {
		// Draw the body of the head
		ctx.fillStyle = "#43D9AD"; // Snake body color
		ctx.fillRect(x, y, gridSize, gridSize);
	
		// Draw the semi-circular cap above the head
		ctx.beginPath();
		if (direction === "UP") {
			ctx.arc(
				x + gridSize / 2,
				y,                
				gridSize / 2,     
				Math.PI,          
				2 * Math.PI       
			);
		}
		else if (direction === "DOWN") {
			ctx.arc(
				x + gridSize / 2,
				y + gridSize,     
				gridSize / 2,     
				0,                
				Math.PI           
			);
		}
		else if (direction === "LEFT") {
			ctx.arc(
				x,                
				y + gridSize / 2, 
				gridSize / 2,     
				Math.PI * 0.5,    
				Math.PI * 1.5     
			);
		}
		else if (direction === "RIGHT") {
			ctx.arc(
				x + gridSize,     
				y + gridSize / 2, 
				gridSize / 2,     
				Math.PI * 1.5,    
				Math.PI * 0.5     
			);
		}
		ctx.closePath();
		ctx.fillStyle = "#67D9AD"; // Slightly different color for the cap
		ctx.fill();
	};
	const drawCanvas = () => {
		const ctx = canvasRef.current.getContext("2d");

		ctx.clearRect(0, 0, canvasSizeX, canvasSizeY);
	
		ctx.fillStyle = "#43D9AD"; // Green color for the snake
		var opacity = 1;
		snake.forEach((segment, index) => {
			if (index === 0) {
				snackHead({ctx, x: segment.x , y: segment.y});
			} else {
				
				ctx.fillStyle = `rgba(67, 217, 173, ${opacity})`;
				ctx.fillRect(segment.x, segment.y, gridSize , gridSize);
				opacity -= 0.03;
			}
		});
		Circle({ctx, x: food.x, y: food.y});
	};

	const handleKeyDown = (event) => {
		if (gameOver) return;

		if (event.key === "ArrowUp" && direction !== "DOWN") {
			setDirection("UP");
		} else if (event.key === "ArrowDown" && direction !== "UP") {
			setDirection("DOWN");
		} else if (event.key === "ArrowLeft" && direction !== "RIGHT") {
			setDirection("LEFT");
		} else if (event.key === "ArrowRight" && direction !== "LEFT") {
			setDirection("RIGHT");
		}
	};

	useEffect(() => {
	if (gameOver) return;

	const gameInterval = setInterval(() => {
		if (isMoving) {
		moveSnake();
		drawCanvas();
		}
	}, 30);

	window.addEventListener("keydown", handleKeyDown);

	return () => {
		clearInterval(gameInterval);
		window.removeEventListener("keydown", handleKeyDown);
	};
	}, [snake, direction, gameOver, food, isMoving]);

	const resetGame = () => {
	setSnake([
		{ x: 300, y: 475 },
		{ x: 300, y: 490 },
		{ x: 300, y: 505 },
		{ x: 300, y: 520 },
		{ x: 300, y: 535 },
		{ x: 300, y: 550 },
		{ x: 300, y: 565 },
		{ x: 300, y: 580 },
		{ x: 300, y: 595 },
		{ x: 300, y: 610 },
		{ x: 300, y: 625 },
		{ x: 300, y: 640 },
		{ x: 300, y: 655 },
		{ x: 300, y: 670 },
		{ x: 300, y: 685 },
		{ x: 300, y: 700 },
		{ x: 300, y: 715 },
		{ x: 300, y: 730 },
		{ x: 300, y: 745 },
		{ x: 300, y: 760 },
		{ x: 300, y: 775 },
		{ x: 300, y: 790 },
		{ x: 300, y: 805 },
		{ x: 300, y: 820 },
		{ x: 300, y: 835 },
		{ x: 300, y: 850 },
		{ x: 300, y: 865 },
		{ x: 300, y: 880 },
		{ x: 300, y: 895 },
		{ x: 300, y: 910 },
		{ x: 300, y: 925 },
		{ x: 300, y: 940 },
		{ x: 300, y: 955 },
		{ x: 300, y: 970 },
		{ x: 300, y: 985 },
		{ x: 300, y: 1000 },
	]);
	setFood({ x: 450, y: 450 });
	setDirection("UP");
	setIsMoving(false);
	setGameOver(false);
	setScore(0);
	}
	return (
	<div className="flex flex-col items-center justify-center w-full h-full relative">

		<canvas
		ref={canvasRef}
		width={canvasSizeX}
		height={canvasSizeY}
		className="border-[1px] border-white w-full h-full"
		/>
		<div className="absolute bottom-0 right-0 w-full h-[50%] flex flex-col justify-evenly items-center">
			{
				gameOver && (
					<div className="w-[98%] h-[4rem] bg-custom-gray bg-opacity-70 flex flex-col items-center justify-center rounded-lg">
						<p className="text-light-green text-4xl">Game Over!</p>
					</div>
				)
			}
			<button onClick={gameOver ? ()=>resetGame() : !isMoving ? () => setIsMoving((prev) => !prev) : ``} className={!gameOver && isMoving ? "hidden" : gameOver ? "px-4 text-light-gray rounded-lg transparent bg-transparent border-0" : "absolute px-4 bg-sunset-orange text-black rounded-lg"}>
			{gameOver ? "start-agin" : "start-game"}
			</button>
		</div>
	</div>
	);
};
  

const GameContainer = () => {

    return (
		<div className='hidden 2xl:flex h-full flex-1 items-center'>
			<div className='bg-gradient-to-br from-dark-green  border-t-[1px] border-t-light-gray rounded-xl w-[44rem] h-[42rem] flex flex-col items-center justify-center shadow-black shadow-sm'>
				<div className='flex w-[90%] h-[90%]'>
					<div className='flex flex-1 w-full h-full bg-custom-blue rounded-xl'>
						<SnakeGame/>
					</div>
					<div className='flex flex-1 w-full h-full justify-end'>
						<div className='w-[85%] h-full flex flex-col gap-3'>
							<KeyBoard/>
							<FoodContainer/>
							<Skip/>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};


function Hello() {
	return (
		<div className='w-[90%] h-full flex justify-center items-center gap-28 relative'>
			<div className='flex flex-1 justify-center 2xl:justify-end items-center 2xl:items-end'>
				<div className='flex flex-col gap-20'>
					<div className="flex flex-col gap-3">
						<p className='md:text-2xl'>Hello, World! I am</p>
						<p className='text-6xl md:text-8xl lg:text-7xl' >Nourdine Ouakhroun</p>
						<p className='text-1xl md:text-3xl lg:text-5xl text-light-green 2xl:text-purple'> {'>'} Full Stack Developer</p>
					</div>
					<p className='gap-3 flex flex-col'>
						<span className='md:text-2xl text-light-gray'>
							// find my profile on GitHub:
						</span>
						<span>
							<span className='md:text-2xl text-purple'>const </span>
							<span className='md:text-2xl text-light-green'>github</span>
							<span className='md:text-2xl'> = </span>
							<a className='md:text-2xl text-dark-orange' href="https://github.com/nourdine-ouakhroun" target="_blank" rel="noreferrer">
								<span>
									"https://github.com/nourdine-ouakhroun" 
								</span>
							</a>
						</span>
					</p>
				</div>
			</div>
			<GameContainer />
		</div>
	);
}

export default Hello;