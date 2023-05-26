

function GameResults(props){

    return(
        <div className="game-results" style={props.style}>
            <p className="game-result-title">{props.result}</p>
            <button className="play-again-button">PLAY AGAIN</button>
        </div>
    )
}

export default GameResults;