

function GameResults(props){

    function playAgain(){
        
        window.location.reload(false);
    }

    return(
        <div className="game-results" style={props.style}>
            <p className="game-result-title">{props.result}</p>
            <button className="play-again-button" onClick={() => playAgain()}>PLAY AGAIN</button>
        </div>
    )
}

export default GameResults;