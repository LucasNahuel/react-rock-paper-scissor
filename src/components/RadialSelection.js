import pentagon from '../assets/images/bg-pentagon.svg';
import GameChip from './GameChip';
import GameResults from './GameResults';
import { useEffect, useState } from 'react';


function RadialSelection(props){

    const gameRules = {
        "scissor" : {
            beats : ["paper", "lizard"]
        },
        "paper" : {
            beats : ["rock", "spock"]
        },
        "rock" : {
            beats : ["scissor", "lizard"]
        },
        "lizard" : {
            beats : ["paper", "spock"]
        },
        "spock" : {
            beats : ["rock", "scissor"]
        }
    }

    const [isFirstLoad, setFirstLoad] = useState(true);

    const [rivalChip, setRivalChip] = useState(null);

    const [radialSpacer, setRadialSpacer] = useState('');

    const [radialContainerStyles, setRadialContainerStyles] = useState({
        scissorContainerStyle : {
            'transform' : 'rotate(0)',
            'z-index': '5'
        },
        scissorInnerContainerStyle : {
            'transform' : 'rotate(0)'
        },
        paperContainerStyle : {
            'transform' : 'rotate(0deg)',
            'z-index' : '4'
        },
        paperInnerContainerStyle : {
            'transform': 'rotate(-72deg)'
        },
        rockContainerStyle : {
            'transform' : 'rotate(0deg)',
            'z-index' : '3'
        },
        rockInnerContainerStyle : {
            'transform': 'rotate(-144deg)'
        },
        lizardContainerStyle : {
            'transform' : 'rotate(0deg)',
            'z-index' : '2'
        },

        lizardInnerContainerStyle : {
            'transform': 'rotate(-216deg)'
        },
        spockContainerStyle : {
            'transform' : 'rotate(0deg)',
            'z-index' : '1'
        }

    });

    const [gameResult, setGameResult] = useState(<GameResults result="YOU WIN"></GameResults>);

    const [pentagonStyle, setPentagonStyle] = useState(null);

    

    useEffect(() => {

        setTimeout(()=>{
            setRadialContainerStyles({
                scissorContainerStyle : {
                    'transform' : 'rotate(0)',
                    'z-index': '5'
                },
                paperContainerStyle : {
                    'transform' : 'rotate(72deg)',
                    'z-index' : '4'
                },
                rockContainerStyle : {
                    'transform' : 'rotate(144deg)',
                    'z-index' : '3'
                },
                lizardContainerStyle : {
                    'transform' : 'rotate(216deg)',
                    'z-index' : '2'
                },
                spockContainerStyle : {
                    'transform' : 'rotate(288deg)',
                    'z-index' : '1'
                },
                scissorInnerContainerStyle : {
                    'transform' : 'rotate(0)'
                },
                paperInnerContainerStyle : {
                    'transform': 'rotate(-72deg)'
                },
                rockInnerContainerStyle : {
                    'transform': 'rotate(-144deg)'
                },
                lizardInnerContainerStyle : {
                    'transform': 'rotate(-216deg)'
                },
                spockInnerContainerStyle : {
                    'transform': 'rotate(-288deg)'
                }
            })
        }, 500);

    }, [isFirstLoad]);

    function handleScissorSelect(){

        let relativeScale = window.innerWidth > 768 ? 'rotate(90deg) scale(2)' : 'rotate(90deg) scale(1.5)';

        setRadialContainerStyles({
            scissorContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '5',
                
            },
            scissorInnerContainerStyle : {
                'transform' : relativeScale
            },
            paperContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '4'
            },
            rockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '3'
            },
            lizardContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '2'
            },
            spockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '1'
            },
            playTitleStyle : {
                'display' : 'flex',
                'transform' : 'scaleY(1)'
            },
            scissorRivalShadow : {
                'display' : 'flex'
            }
        });

        throwRivalChip("scissor");
    }

    function handlePaperSelect(){

        let relativeScale = window.innerWidth > 768 ? 'rotate(90deg) scale(2)' : 'rotate(90deg) scale(1.5)';

        setRadialContainerStyles({
            scissorContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '4'
            },
            paperContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '5'
            },
            paperInnerContainerStyle : {
                'transform' : relativeScale
            },
            rockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '3'
            },
            lizardContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '2'
            },
            spockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '1'
            },
            playTitleStyle : {
                'display' : 'flex',
                'transform' : 'scaleY(1)'
            },
            paperRivalShadow : {
                'display' : 'flex'
            }
        });
        throwRivalChip("paper");
    }

    function handleRockSelect(){

        let relativeScale = window.innerWidth > 768 ? 'rotate(90deg) scale(2)' : 'rotate(90deg) scale(1.5)';

        setRadialContainerStyles({
            scissorContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '4'
            },
            paperContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '3'
            },
            rockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '5'
            },
            rockInnerContainerStyle : {
                'transform' : relativeScale
            },
            lizardContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '2'
            },
            spockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '1'
            },
            spockInnerContainerStyle : {
                'transform': 'rotate(-288deg)'
            },
            playTitleStyle : {
                'display' : 'flex',
                'transform' : 'scaleY(1)'
            },
            rockRivalShadow : {
                'display' : 'flex'
            }
        });

        
        throwRivalChip("rock");
    }

    function handleLizardSelect(){

        let relativeScale = window.innerWidth > 768 ? 'rotate(90deg) scale(2)' : 'rotate(90deg) scale(1.5)';

        setRadialContainerStyles({
            scissorContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '4'
            },
            paperContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '3'
            },
            rockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '2'
            },
            lizardContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '5'
            },
            lizardInnerContainerStyle : {
                'transform' : relativeScale
            },
            spockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '1'
            },
            playTitleStyle : {
                'display' : 'flex',
                'transform' : 'scaleY(1)'
            },
            lizardRivalShadow : {
                'display' : 'flex'
            }
        });

        
        throwRivalChip("lizard");
    }

    function handleSpockSelect(){

        let relativeScale = window.innerWidth > 768 ? 'rotate(90deg) scale(2)' : 'rotate(90deg) scale(1.5)';

        setRadialContainerStyles({
            scissorContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '4'
            },
            paperContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '3'
            },
            rockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '2'
            },
            lizardContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '1'
            },
            spockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '5'
            },
            spockInnerContainerStyle : {
                'transform' : relativeScale
            },
            playTitleStyle : {
                'display' : 'flex',
                'transform' : 'scaleY(1)'
            },
            spockRivalShadow : {
                'display' : 'flex'
            }
        });
        
        throwRivalChip("spock");
    }

    function throwRivalChip(playerSelectedChip){

        setPentagonStyle({'display' : 'none'});



        let rivalSelection;
        do{
            let randomNumber = Math.floor(Math.random() * 5);
            switch(randomNumber){
                case 0 : rivalSelection = "scissor" ;break;
                case 1 : rivalSelection = "paper" ;break;
                case 2 : rivalSelection = "rock" ;break;
                case 3 : rivalSelection = "lizard" ;break;
                case 4 : rivalSelection = "spock" ;break;
                default : console.log("error");
            }
        }while( rivalSelection == playerSelectedChip)

        if(window.innerWidth <= 768){
            
            setRadialSpacer(" mobile");
        }

        setTimeout(() => {
            setRivalChip(<GameChip chipType={rivalSelection} chipStyle = {{'transform' : 'rotate(90deg)'}}/>);

            spaceOutChips();

            if(gameRules[playerSelectedChip].beats.includes(rivalSelection)){
                setGameResult(<GameResults result="YOU WIN" style={{'visibility' : 'visible'}}/>);
                localStorage.setItem("score", Number.parseInt(localStorage.getItem("score")) + 1);
            }else{
                setGameResult(<GameResults result="YOU LOOSE" style={{'visibility' : 'visible'}}/>);
                localStorage.setItem("score", Number.parseInt(localStorage.getItem("score")) - 1);
            }

            props.setScore();


        }, 2000);
    }

    function spaceOutChips(){
        if(window.innerWidth > 768){
            
            setRadialSpacer(" spaced-out");
        }
    }


    return(
        <div className="radial-selection-container">

            

            

            <div className='radial-selection-inner-container'>

                <img className='pentagon' src={pentagon} style={pentagonStyle}></img>

                <div className={"radial-selection-column" + radialSpacer} style={radialContainerStyles.scissorContainerStyle} >
                    
                    <GameChip chipType="scissor" chipStyle={radialContainerStyles.scissorInnerContainerStyle} onClick={() => handleScissorSelect()}/>
                        
                    <div className='rival-shadow' style={radialContainerStyles.scissorRivalShadow}>
                        {rivalChip}
                    </div>
                </div>

                <div className={"radial-selection-column" + radialSpacer} style={radialContainerStyles.paperContainerStyle}>
                    <GameChip chipType="paper" chipStyle={radialContainerStyles.paperInnerContainerStyle} onClick={() => handlePaperSelect()}/>
                    <div className='rival-shadow' style={radialContainerStyles.paperRivalShadow}>
                        {rivalChip}
                    </div>
                </div>

                <div className={"radial-selection-column" + radialSpacer} style={radialContainerStyles.rockContainerStyle}>
                    <GameChip chipType="rock" chipStyle={radialContainerStyles.rockInnerContainerStyle} onClick={() => handleRockSelect()}/>
                    <div className='rival-shadow' style={radialContainerStyles.rockRivalShadow}>
                        {rivalChip}
                    </div>
                </div>

                <div className={"radial-selection-column" + radialSpacer} style={radialContainerStyles.lizardContainerStyle}>
                    <GameChip chipType="lizard" chipStyle={radialContainerStyles.lizardInnerContainerStyle} onClick={() => handleLizardSelect()} />
                    <div className='rival-shadow' style={radialContainerStyles.lizardRivalShadow}>
                        {rivalChip}
                    </div>
                </div>

                <div className={"radial-selection-column" + radialSpacer} style={radialContainerStyles.spockContainerStyle}>
                    <GameChip chipType="spock" chipStyle={radialContainerStyles.spockInnerContainerStyle} onClick={() => handleSpockSelect()} />
                    <div className='rival-shadow' style={radialContainerStyles.spockRivalShadow}>
                        {rivalChip}
                    </div>
                </div>

            </div>

            <div className='play-title-container' style={radialContainerStyles.playTitleStyle}>
                <p className='play-title'>YOU PICKED</p>
                <p className='play-title'>THE HOUSE PICKED</p>
            </div>

            {gameResult}

        </div>
    );
}

export default RadialSelection;