import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {

    width:'200px',
    margin:'20px auto'

};

const Game = () => {
    
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
            const timeInHistory = history.slice(0, stepNumber + 1);
            const current = timeInHistory[stepNumber];
            const squares = [...current];
            
            if(winner || squares[i]) return;
            
            squares[i] = xIsNext ? 'X' : 'O';
            setHistory([...timeInHistory, squares]);
            setStepNumber(timeInHistory.length);
            setXisNext(!xIsNext);   
    }

    const checkForTie = squares => {
        return squares.every(square => square !== null);
      };
      

    const jumpTo = move => {
            setStepNumber(move);
            setXisNext(move === 0)
    }

    const restartGame = () => {
            setHistory([Array(9).fill(null)]);
            setStepNumber(0);
            setXisNext(true);
      };

    const renderMoves = () => (
            history.map((_step, move) => {
                const destination = move ? `Go to move #${ move }`: 'Starting';
                return (
                <li key={ move }>
                    <button onClick = {() => jumpTo( move )}>{destination}</button>
                </li>
                ) 
            })
        )

    return (
        <>
            < Board squares={history[stepNumber]} onClick = {handleClick} /> 
            <div style={ styles }>
                <p>
                    {winner ? (
                        <p>Winner: {winner}</p>
                    ) : checkForTie(history[stepNumber]) ? (
                        <p>It's a tie!</p>
                    ) : (
                        <p>Next Player: {xIsNext ? 'X' : 'O'}</p>
                    )}
                </p>
                <p>
                    {winner && (
                        <button onClick={restartGame}>Restart</button>
                )}
                </p>
                {renderMoves()}
            </div>
        </>   
        )
    }

export default Game;