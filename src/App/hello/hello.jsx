import { useEffect, useRef, useState } from 'react';
import './hello.css';
import { useDispatch, useSelector } from 'react-redux';
import { eatFood, resetFood } from '../../componentsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const KeyBoard = ()=>{
	return(
		<div className='flex justify-center items-center rounded-xl bg-[rgba(0,0,0,0.15)] w-full h-[12rem]'>
			<div className='w-[85%] h-[85%] flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-sm 2xl:text-xl text-white'>// arrows to play</span>
					<span className='text-sm 2xl:text-xl text-white'>// use Keyboard</span>
				</div>
				<div className='h-full w-full flex items-center flex-col justify-between'>
					<div className='border-[2px] border-custom-gray lg:w-[45px] h-[30px] 2xl:w-[75px] 2xl:h-[40px] bg-black rounded-lg flex justify-center items-center'>
						<img className="rotate-270" src="/assets/playIcon.svg" alt=""/>
					</div>
					<div className='flex gap-4'>
						<div className='border-[2px] border-custom-gray lg:w-[45px] h-[30px] 2xl:w-[75px] 2xl:h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img className="rotate-180" src="/assets/playIcon.svg" alt=""/>
						</div>
						<div className='border-[2px] border-custom-gray lg:w-[45px] h-[30px] 2xl:w-[75px] 2xl:h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img className="rotate-90" src="/assets/playIcon.svg" alt=""/>
						</div>
						<div className='border-[2px] border-custom-gray lg:w-[45px] h-[30px] 2xl:w-[75px] 2xl:h-[40px] bg-black rounded-lg flex justify-center items-center'>
							<img src="/assets/playIcon.svg" alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const Food = ({state})=>{
	return (
		<>
			{
				state === 'eaten' ? (
					<div className='flex justify-center items-center w-[20px] h-[20px]  2xl:w-[30px] 2xl:h-[30px] rounded-full bg-[rgba(67,217,173,0.15)]'>
						<div className='flex justify-center items-center w-[70%] h-[70%] rounded-full bg-[rgba(67,217,173,0.40)]'>
							<div className='w-[60%] h-[60%] rounded-full bg-light-green'>
							</div>
						</div>
					</div>
				) : (
					<div className='flex justify-center items-center w-[20px] h-[20px]  2xl:w-[30px] 2xl:h-[30px] rounded-full bg-[rgba(67,217,173,0.04)]'>
						<div className='flex justify-center items-center w-[70%] h-[70%] rounded-full bg-[rgba(67,217,173,0.13)]'>
							<div className='w-[60%] h-[60%] rounded-full bg-[rgba(67,217,173,0.3)]'>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}

const FoodContainer = () => {
	const food = useSelector((state) => state.components.snakeFood);
	return(
		<div className='flex justify-center items-center w-full h-[12rem]'>
			<div className='w-[90%] h-[85%] flex flex-col gap-4'>
				<div className='flex flex-col'>
					<span className='text-sm 2xl:text-xl text-white'>// food left</span>
				</div>
				<div className='w-full flex flex-wrap gap-4'>
				{
					Array.from(({length: 10}), (_, index) =>{
						if(index < food) return (<Food key={index} state='eaten'/>)
						else
							return (<Food key={index} state='not-eaten'/>)
					})
				}
				</div>
			</div>
		</div>
	)
}

const Skip = () => {
	const navigate = useNavigate();
	const handleSkip = () => {
		navigate('/about-me');
	}
	return (
		<div className='w-full h-[30%] flex justify-end items-end'>
			<div className='flex justify-center items-center w-[65px] h-[40px] 2xl:w-[75px] 2xl:h-[50px] border-[1px] border-white rounded-xl'>
				<span onClick={handleSkip} className='text-white text-md 2xl:text-xl cursor-pointer'>skip</span>
			</div>
		</div>
	)
}

const SnakeGame = () => {
	const disapatch = useDispatch();
	const canvasRef = useRef(null);
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);
	const location = useLocation();
	const canvasSizeX = 550;
	const canvasSizeY = 1000;
	const gridSize = 15;
	const totalWidth = canvasSizeX / gridSize;
	const totalHeight = canvasSizeY / gridSize;
	const eatfood = useSelector((state) => state.components.snakeFood);
	const [snake, setSnake] = useState(
		Array.from({ length: 50 }, (_, index) => ({
			x: 300,
			y: 400 + index * gridSize,
		}))	
	);
	const [food, setFood] = useState({ x: 200, y: 455 });
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
	if (head.x < food.x + gridSize && head.x + gridSize > food.x && head.y < food.y + gridSize && head.y + gridSize > food.y) {
		setScore(score + 1);
		disapatch(eatFood());
		setFood({
		x: Math.floor(Math.random() * totalWidth) * gridSize,
		y: Math.floor(Math.random() * totalHeight) * gridSize,
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
				opacity -= 0.02;
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

	const [youWon, setYouWon] = useState(false);
	useEffect(() => {
		if (eatfood >= 10) {
			setYouWon(true);
			setIsMoving(false);
		}
		if (gameOver) return;
		if (!isMoving) {
			drawCanvas();
			disapatch(resetFood());
		}
		const gameInterval = setInterval(() => {
			if (isMoving) {
			moveSnake();
			drawCanvas();
			}
		}, 50);

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			clearInterval(gameInterval);
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [snake, direction, gameOver, food, isMoving]);

	const resetGame = () => {
		setSnake(
			Array.from({ length: 50 }, (_, index) => ({
				x: 300,
				y: 400 + index * gridSize,
			}))
		);
		setFood({ x: 450, y: 450 });
		setDirection("UP");
		setIsMoving(false);
		setGameOver(false);
		setYouWon(false);
		setScore(0);
		disapatch(resetFood());
	}
	return (
	<div className="flex flex-col items-center justify-center w-full h-full relative">

		<canvas
		ref={canvasRef}
		width={canvasSizeX}
		height={canvasSizeY}
		className="w-full h-full"
		/>
		<div className="absolute bottom-0 right-0 w-full h-[50%] flex flex-col justify-evenly items-center">
			{
				gameOver ? (
					<div className="w-[98%] h-[3rem] 2xl:h-[4rem] bg-custom-gray bg-opacity-70 flex flex-col items-center justify-center rounded-lg">
						<p className="text-light-green text-lg 2xl:text-2xl">Game Over!</p>
					</div>
				): youWon ? (
					<div className="w-[98%] h-[3rem] 2xl:h-[4rem] bg-custom-gray bg-opacity-70 flex flex-col items-center justify-center rounded-lg">
						<p className="text-light-green text-lg 2xl:text-2xl">You Won!</p>
					</div>
				): (
					<></>
				)
			}
			<button onClick={gameOver || youWon ? resetGame : () => setIsMoving((prev) => !prev)} className={(!gameOver || youWon) && isMoving ? "hidden" : gameOver || youWon ? "text-sm 2xl:text-lg px-2 2xl:px-4 text-light-gray rounded-lg transparent bg-transparent border-0" : "absolute text-sm 2xl:text-lg px-2 2xl:px-4 bg-sunset-orange text-black rounded-lg"}>
			{gameOver ? "start-agin" : "start-game"}
			</button>
		</div>
	</div>
	);
};
// gameOver ? ()=>resetGame() : !isMoving ? () => setIsMoving((prev) => !prev) : ``} className={!gameOver && isMoving ? "hidden" : gameOver ? "text-sm 2xl:text-lg  px-4 text-light-gray rounded-lg transparent bg-transparent border-0" : "absolute text-sm 2xl:text-lg  px-4 bg-sunset-orange text-black rounded-lg"

const GameContainer = () => {


    return (
		<div className='hidden lg:flex h-full flex-1 items-center'>
			<div className='bg-gradient-to-br from-dark-green  border-t-[1px] border-t-light-gray rounded-xl w-[30rem] h-[28rem] 2xl:w-[44rem] 2xl:h-[42rem] flex flex-col items-center justify-center shadow-black shadow-sm'>
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



const TypingEffect = ({ text }) => {
	const [currentText, setCurrentText] = useState("");
	const [index, setIndex] = useState(0);
	const [showCursor, setShowCursor] = useState(true);
  
	useEffect(() => {
	  if (index < text.length) {
		const timeout = setTimeout(() => {
		  setCurrentText((prev) => prev + text[index]);
		  setIndex((prev) => prev + 1);
		}, 100);
  
		return () => clearTimeout(timeout);
	  }
	}, [index, text]);
  
	// Toggle cursor visibility
	useEffect(() => {
	  const cursorInterval = setInterval(() => {
		setShowCursor((prev) => !prev);
	  }, 500); // Cursor blinks every 500ms
  
	  return () => clearInterval(cursorInterval);
	}, []);
  
	return (
	  <div style={{ display: "inline-flex", alignItems: "center" }}>
		<span>{currentText}</span>
		{showCursor && <span style={{ marginLeft: "2px", borderLeft: "2px solid", height: "1em" }}></span>}
	  </div>
	);
  };

  import { motion } from 'framer-motion';

const pageVariants = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
};

  
function Hello() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={pageVariants}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="w-[90%] h-full flex justify-center items-center 2xl:gap-20 3xl:gap-28 relative"
		>
				<div className='flex flex-1 justify-center 2xl:justify-end items-center 2xl:items-end'>
					<div className='flex flex-col gap-20'>
						<div className="flex flex-col gap-3">
							<p className='text-xl md:text-lg 2xl:text-2xl 3xl:text-3xl'>Hello, World! I am</p>
							<p className='text-6xl 2xl:text-6xl 3xl:text-7xl md:text-5xl' >Nourdine Ouakhroun</p>
							<p className="text-xl 2xl:text-4xl 3xl:text-5xl md:text-3xl text-light-green 2xl:text-purple">
							{'>'} <TypingEffect text="Full Stack Developer" />
							</p>
						</div>
						<p className='gap-3 flex flex-col'>
							<span className='md:text-lg 2xl:text-2xl text-light-gray'>
								// find my profile on GitHub:
							</span>
							<span>
								<span className='md:text-lg 2xl:text-2xl text-purple'>const </span>
								<span className='md:text-lg 2xl:text-2xl text-light-green'>github</span>
								<span className='md:text-lg 2xl:text-2xl'> = </span>
								<a className='md:text-lg 2xl:text-2xl text-dark-orange' href="https://github.com/nourdine-ouakhroun" target="_blank" rel="noreferrer">
									<span>
										"https://github.com/nourdine-ouakhroun" 
									</span>
								</a>
							</span>
						</p>
					</div>
				</div>
				<GameContainer />
		</motion.div>

	);
}

export default Hello;