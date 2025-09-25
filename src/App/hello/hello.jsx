import { useEffect, useRef, useState } from 'react';
import './hello.css';
import { useDispatch, useSelector } from 'react-redux';
import { eatFood, resetFood } from '../../componentsSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const KeyBoard = ()=>{
	return(
		<div className='flex justify-center items-center rounded-xl bg-[rgba(0,0,0,0.18)] border border-custom-gray/40 backdrop-blur-[1px] shadow-[0_4px_16px_rgba(0,0,0,0.35)] w-full h-[9rem] xl:h-[10rem] 2xl:h-[11rem] 3xl:h-[12rem]'>
			<div className='w-[88%] h-[88%] flex flex-col gap-3 xl:gap-4'>
				<div className='flex flex-col'>
					<span className='text-xs xl:text-sm 2xl:text-base 3xl:text-lg text-white/90'>// arrows to play</span>
					<span className='text-xs xl:text-sm 2xl:text-base 3xl:text-lg text-white/90'>// use Keyboard</span>
				</div>
				<div className='h-full w-full flex items-center flex-col justify-between'>
					{/* Up */}
					<div className='w-fit'>
						<div className='w-[32px] h-[22px] xl:w-[36px] xl:h-[24px] 2xl:w-[40px] 2xl:h-[26px] 3xl:w-[44px] 3xl:h-[28px] bg-dark-blue/80 border border-custom-gray/60 rounded-lg flex justify-center items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),_0_2px_6px_rgba(0,0,0,0.35)] hover:bg-custom-gray/50 transition-colors duration-150'>
							<img className="rotate-270 w-[10px] h-[10px] xl:w-[12px] xl:h-[12px] 2xl:w-[14px] 2xl:h-[14px]" src="/assets/playIcon.svg" alt=""/>
						</div>
					</div>
					{/* Left, Down, Right */}
					<div className='flex gap-2 xl:gap-3'>
						<div className='w-[32px] h-[22px] xl:w-[36px] xl:h-[24px] 2xl:w-[40px] 2xl:h-[26px] 3xl:w-[44px] 3xl:h-[28px] bg-dark-blue/80 border border-custom-gray/60 rounded-lg flex justify-center items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),_0_2px_6px_rgba(0,0,0,0.35)] hover:bg-custom-gray/50 active:translate-y-[1px] transition duration-150'>
							<img className="rotate-180 w-[10px] h-[10px] xl:w-[12px] xl:h-[12px] 2xl:w-[14px] 2xl:h-[14px]" src="/assets/playIcon.svg" alt=""/>
						</div>
						<div className='w-[32px] h-[22px] xl:w-[36px] xl:h-[24px] 2xl:w-[40px] 2xl:h-[26px] 3xl:w-[44px] 3xl:h-[28px] bg-dark-blue/80 border border-custom-gray/60 rounded-lg flex justify-center items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),_0_2px_6px_rgba(0,0,0,0.35)] hover:bg-custom-gray/50 active:translate-y-[1px] transition duration-150'>
							<img className="rotate-90 w-[10px] h-[10px] xl:w-[12px] xl:h-[12px] 2xl:w-[14px] 2xl:h-[14px]" src="/assets/playIcon.svg" alt=""/>
						</div>
						<div className='w-[32px] h-[22px] xl:w-[36px] xl:h-[24px] 2xl:w-[40px] 2xl:h-[26px] 3xl:w-[44px] 3xl:h-[28px] bg-dark-blue/80 border border-custom-gray/60 rounded-lg flex justify-center items-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.06),_0_2px_6px_rgba(0,0,0,0.35)] hover:bg-custom-gray/50 active:translate-y-[1px] transition duration-150'>
							<img className='w-[10px] h-[10px] xl:w-[12px] xl:h-[12px] 2xl:w-[14px] 2xl:h-[14px]' src="/assets/playIcon.svg" alt=""/>
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
					<div className='flex justify-center items-center w-[16px] h-[16px] xl:w-[18px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[22px] 3xl:h-[22px] rounded-full bg-[rgba(67,217,173,0.15)]'>
						<div className='flex justify-center items-center w-[70%] h-[70%] rounded-full bg-[rgba(67,217,173,0.40)]'>
							<div className='w-[60%] h-[60%] rounded-full bg-light-green'>
							</div>
						</div>
					</div>
				) : (
					<div className='flex justify-center items-center w-[16px] h-[16px] xl:w-[18px] xl:h-[18px] 2xl:w-[20px] 2xl:h-[20px] 3xl:w-[22px] 3xl:h-[22px] rounded-full bg-[rgba(67,217,173,0.04)]'>
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
	const total = 10;
	const percent = Math.max(0, Math.min(100, Math.round((food / total) * 100)));
	return(
		<div className='flex justify-center items-center w-full h-[9rem] xl:h-[10rem] 2xl:h-[11rem]'>
			<div className='w-[90%] h-[85%] flex flex-col gap-2.5'>
				{/* Header */}
				<div className='flex items-center justify-between'>
					<span className='text-[11px] xl:text-xs 2xl:text-sm text-white'>// food left</span>
					<span className='text-[11px] xl:text-xs 2xl:text-sm text-light-gray'>{food}/{total}</span>
				</div>
				{/* Dots grid */}
				<div className='w-full grid grid-cols-5 gap-3 xl:gap-3.5'>
				{
					Array.from(({length: total}), (_, index) =>{
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
		<div className='w-full h-[25%] flex justify-end items-end'>
			<div className='flex justify-center items-center w-[58px] h-[36px] xl:w-[66px] xl:h-[40px] 2xl:w-[74px] 2xl:h-[46px] border-[1px] border-white rounded-xl'>
				<span onClick={handleSkip} className='text-white text-sm xl:text-md 2xl:text-lg cursor-pointer'>skip</span>
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

		{/* Framed play area */}
		<div
			className="relative w-full h-full rounded-xl border border-custom-gray/60 bg-custom-blue/60 shadow-[0_10px_30px_rgba(0,0,0,0.45)] overflow-hidden"
			style={{
				backgroundImage:
					"linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px)," +
					"linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
				backgroundSize: '24px 24px'
			}}
		>
			{/* Canvas */}
		<canvas
		ref={canvasRef}
		width={canvasSizeX}
		height={canvasSizeY}
				className="w-full h-full block"
			/>

			{/* Vignette overlay */}
			<div className="pointer-events-none absolute inset-0" style={{
				background:
					"radial-gradient(120% 80% at 50% 20%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.5) 100%)"
			}}></div>
		</div>

		{/* Status + controls overlay */}
		<div className="absolute bottom-0 right-0 w-full h-[48%] xl:h-[46%] 2xl:h-[44%] flex flex-col justify-evenly items-center">
			{
				gameOver ? (
					<div className="w-[98%] h-[2.6rem] xl:h-[3rem] 2xl:h-[3.4rem] bg-custom-gray/80 backdrop-blur-[1px] flex flex-col items-center justify-center rounded-lg shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
						<p className="text-light-green text-base xl:text-lg 2xl:text-xl">Game Over!</p>
					</div>
				): youWon ? (
					<div className="w-[98%] h-[2.6rem] xl:h-[3rem] 2xl:h-[3.4rem] bg-custom-gray/80 backdrop-blur-[1px] flex flex-col items-center justify-center rounded-lg shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
						<p className="text-light-green text-base xl:text-lg 2xl:text-xl">You Won!</p>
					</div>
				): (
					<></>
				)
			}
			<button
				onClick={gameOver || youWon ? resetGame : () => setIsMoving((prev) => !prev)}
				className={(!gameOver || youWon) && isMoving
					? "hidden"
					: gameOver || youWon
						? "text-xs xl:text-sm 2xl:text-base px-2 xl:px-3 2xl:px-4 text-light-gray rounded-lg bg-transparent border-0"
						: "absolute text-xs xl:text-sm 2xl:text-base px-3 xl:px-4 2xl:px-5 py-1 xl:py-1.5 2xl:py-2 bg-sunset-orange text-black rounded-lg shadow-[0_6px_14px_rgba(0,0,0,0.35)] hover:brightness-110 transition"}
			>
			{gameOver ? "start-agin" : "start-game"}
			</button>
		</div>
	</div>
	);
};
// gameOver ? ()=>resetGame() : !isMoving ? () => setIsMoving((prev) => !prev) : ``} className={!gameOver && isMoving ? "hidden" : gameOver ? "text-sm 2xl:text-lg  px-4 text-light-gray rounded-lg transparent bg-transparent border-0" : "absolute text-sm 2xl:text-lg  px-4 bg-sunset-orange text-black rounded-lg"

const GameContainer = () => {
    return (
		<div className='hidden xl:flex xl:basis-[42%] xl:max-w-[42%] h-full flex-1 items-center'>
			<div className='bg-gradient-to-br from-dark-green border-t-[1px] border-t-light-gray rounded-xl w-[26rem] h-[24rem] 2xl:w-[34rem] 2xl:h-[32rem] 3xl:w-[40rem] 3xl:h-[38rem] flex flex-col items-center justify-center shadow-black shadow-sm'>
				<div className='flex w-[90%] h-[90%]'>
					<div className='flex flex-1 w-full h-full bg-custom-blue rounded-xl'>
						<SnakeGame/>
					</div>
					<div className='flex flex-1 w-full h-full justify-end'>
						<div className='w-[85%] h-full flex flex-col gap-2 2xl:gap-3'>
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
	const [isTypingComplete, setIsTypingComplete] = useState(false);
  
	useEffect(() => {
	  if (index < text.length) {
		const timeout = setTimeout(() => {
		  setCurrentText((prev) => prev + text[index]);
		  setIndex((prev) => prev + 1);
		}, 80); // Slightly faster typing
  
		return () => clearTimeout(timeout);
	  } else {
		setIsTypingComplete(true);
	  }
	}, [index, text]);
  
	// Toggle cursor visibility with VS Code-style timing
	useEffect(() => {
	  const cursorInterval = setInterval(() => {
		setShowCursor((prev) => !prev);
	  }, isTypingComplete ? 1000 : 500); // Slower blink when typing is complete
  
	  return () => clearInterval(cursorInterval);
	}, [isTypingComplete]);
  
	return (
	  <div className="inline-flex items-center">
		<span className="relative">
			{currentText}
			{/* Subtle glow effect */}
			<span className="absolute inset-0 text-light-green/20 blur-sm">
				{currentText}
			</span>
		</span>
		{showCursor && (
		  <span className="ml-1 w-0.5 h-6 bg-light-green relative">
			{/* VS Code-style cursor glow */}
			<span className="absolute inset-0 bg-light-green/60 blur-sm"></span>
			<span className="absolute inset-0 bg-light-green animate-pulse"></span>
		  </span>
		)}
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
			className="w-[95%] md:w-[90%] h-full flex flex-col xl:flex-row justify-center items-center xl:items-stretch xl:gap-10 2xl:gap-14 3xl:gap-20 relative px-4 md:px-0"
		>
				<div className='flex xl:basis-[58%] xl:max-w-[58%] flex-1 justify-center xl:justify-start items-center xl:items-center'>
					<div className='flex flex-col gap-5 md:gap-8 lg:gap-12 xl:gap-14 2xl:gap-16 max-w-[48rem] xl:max-w-[44rem] 2xl:max-w-[52rem]'>
						<div className="flex flex-col gap-2 md:gap-3">
							<motion.p 
								className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.35rem] 2xl:text-[1.6rem] leading-snug font-medium text-light-gray'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2, duration: 0.6 }}
							>
								Hello, World! I am
							</motion.p>
							<motion.p 
								className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[3.2rem] 2xl:text-[3.6rem] 3xl:text-[4.25rem] font-bold leading-tight tracking-tight text-white'
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
							>
								Nourdine Ouakhroun
							</motion.p>
							<motion.p 
								className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.35rem] 2xl:text-[1.6rem] leading-snug text-light-green xl:text-purple"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.6, duration: 0.6 }}
							>
								<span className='mr-1'>{'>'}</span>
								<TypingEffect text="Full Stack Developer" />
							</motion.p>
						</div>
						<motion.div 
							className='flex flex-col gap-2 md:gap-3'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.6 }}
						>
							<span className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.05rem] 2xl:text-[1.25rem] text-light-gray'>
								// find my profile on GitHub:
							</span>
							<motion.div 
								className='w-full max-w-[36rem] xl:max-w-[34rem] 2xl:max-w-[38rem] bg-gradient-to-br from-dark-blue/60 via-dark-blue/70 to-dark-blue/60 border border-custom-gray rounded-lg px-3 py-2 xl:px-3.5 xl:py-3 shadow-[0_6px_14px_rgba(0,0,0,0.25)] relative overflow-hidden'
								whileTap={{ scale: 0.98 }}
								animate={{ 
									background: [
										'linear-gradient(135deg, rgba(1,18,33,0.6), rgba(1,18,33,0.7), rgba(1,18,33,0.6))',
										'linear-gradient(135deg, rgba(1,18,33,0.7), rgba(1,18,33,0.8), rgba(1,18,33,0.7))',
										'linear-gradient(135deg, rgba(1,18,33,0.6), rgba(1,18,33,0.7), rgba(1,18,33,0.6))'
									]
								}}
								transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
							>
								{/* VS Code window controls */}
								<div className='absolute top-2 left-3 flex gap-1.5'>
									<div className='w-2 h-2 rounded-full bg-red-500/80'></div>
									<div className='w-2 h-2 rounded-full bg-yellow-500/80'></div>
									<div className='w-2 h-2 rounded-full bg-green-500/80'></div>
								</div>
								
								{/* Terminal prompt */}
								<div className='absolute top-2 right-3 flex items-center gap-1'>
									<span className='text-xs text-light-gray/60'>$</span>
									<span className='text-xs text-light-green animate-pulse'>npm run dev</span>
								</div>
								
								<div className='flex flex-col gap-1 mt-6'>
									{/* Line 01 */}
									<div className='flex items-center gap-3'>
										<span className='select-none text-light-gray/60 text-[10px] xl:text-xs w-6 text-right'>01</span>
										<span className='text-light-gray text-[11px] xl:text-xs 2xl:text-sm'>// open in a new tab</span>
									</div>
									{/* Line 02 */}
									<div className='flex items-center gap-3 flex-wrap'>
										<span className='select-none text-light-gray/60 text-[10px] xl:text-xs w-6 text-right'>02</span>
										<span className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.05rem] 2xl:text-[1.25rem] text-purple'>const </span>
										<span className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.05rem] 2xl:text-[1.25rem] text-light-green'>github</span>
										<span className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.05rem] 2xl:text-[1.25rem]'> = </span>
										<a className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-[1.05rem] 2xl:text-[1.25rem] text-dark-orange hover:text-orange-400 transition-colors break-all underline-offset-4 hover:underline' href="https://github.com/nourdine-ouakhroun" target="_blank" rel="noreferrer">"https://github.com/nourdine-ouakhroun"</a>
									</div>
								</div>
								
								{/* Subtle pulsing border */}
								<div className='absolute inset-0 rounded-lg border border-light-green/20 animate-pulse'></div>
							</motion.div>
						</motion.div>
						
						{/* Swipe Hint Animation */}
						<motion.div 
							className='md:hidden flex items-center justify-center gap-2 text-light-gray/60 text-sm mt-4'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.8, duration: 0.8 }}
						>
							<span>Swipe for more</span>
							<motion.div
								animate={{
									x: [0, 8, 0],
									opacity: [0.6, 1, 0.6]
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							>
								<svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
									<path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' />
								</svg>
							</motion.div>
						</motion.div>
					</div>
				</div>
				<GameContainer />
		</motion.div>

	);
}

export default Hello;