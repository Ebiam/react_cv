import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.css';
import jsLogo from '../../assets/js-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import javaLogo from '../../assets/java-logo.png';
import bugImage from '../../assets/bug.png';

const SnakeGame = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [bugs, setBugs] = useState([{ x: 5, y: 5 }, { x: 20, y: 20 }]);
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.setTransform(10, 0, 0, 10, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    snake.forEach(({ x, y }) => context.fillRect(x, y, 1, 1));
    context.drawImage(jsLogo, food.x, food.y, 1, 1);
    context.drawImage(pythonLogo, food.x, food.y, 1, 1);
    context.drawImage(javaLogo, food.x, food.y, 1, 1);
    bugs.forEach(({ x, y }) => context.drawImage(bugImage, x, y, 1, 1));
  }, [snake, food, bugs]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const { clientX, clientY } = touch;
      const { innerWidth, innerHeight } = window;

      if (clientX < innerWidth / 2 && clientY < innerHeight / 2) {
        setDirection('UP');
      } else if (clientX < innerWidth / 2 && clientY > innerHeight / 2) {
        setDirection('DOWN');
      } else if (clientX > innerWidth / 2 && clientY < innerHeight / 2) {
        setDirection('LEFT');
      } else {
        setDirection('RIGHT');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        switch (direction) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
          default:
            break;
        }

        newSnake.unshift(head);
        newSnake.pop();

        if (head.x === food.x && head.y === food.y) {
          newSnake.push({});
          setFood({ x: Math.floor(Math.random() * 30), y: Math.floor(Math.random() * 30) });
        }

        if (bugs.some((bug) => bug.x === head.x && bug.y === head.y)) {
          setGameOver(true);
        }

        return newSnake;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction, food, bugs, gameOver]);

  return (
    <div className="snake-game">
      <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default SnakeGame;
