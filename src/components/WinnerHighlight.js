

function WinnerHighlight(props){
    return(
        <div className="winner-highlight" style={props.style}>


            <div style={{'width': '75%', 'height' : '75%', 'borderRadius': '50%', 'backgroundColor':'rgba(255,255,255,0.1)', 'display': 'flex', 'alignItems': 'center', 'justifyContent' : 'center'}}>

                <div style={{'width': '75%', 'height' : '75%', 'borderRadius': '50%', 'backgroundColor':'rgba(255,255,255,0.1)', 'display': 'flex', 'alignItems': 'center', 'justifyContent' : 'center'}}>

                </div>
            </div>

        </div>
    )
}

export default WinnerHighlight;