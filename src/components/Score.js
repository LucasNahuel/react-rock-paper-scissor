
function Score(){


    return(
        <div className="score-container">
            <p className="score-title">
                SCORE
            </p>

            <p className="score-value">
                {localStorage.getItem("score")}
            </p>
        </div>
    );
}

export default Score;