import iconLizard from '../assets/images/icon-lizard.svg';
import iconScissor from '../assets/images/icon-scissors.svg';
import iconPaper from '../assets/images/icon-paper.svg';
import iconRock from '../assets/images/icon-rock.svg';
import iconSpock from '../assets/images/icon-spock.svg';
import { useEffect, useState } from 'react';


function RadialSelection(){

    const [isFirstLoad, setFirstLoad] = useState(true);

    const [radialContainerStyles, setRadialContainerStyles] = useState({
        scissorContainerStyle : {
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

    useEffect(() => {

        setTimeout(()=>{
            setRadialContainerStyles({
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
        setRadialContainerStyles({
            scissorContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '5',
                
            },
            scissorInnerContainerStyle : {
                'transform' : 'rotate(90deg) scale(2)'
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
            }
        });
    }

    function handlePaperSelect(){
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
                'transform' : 'rotate(90deg) scale(2)'
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
            }
        });
    }

    function handleRockSelect(){
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
                'transform' : 'rotate(90deg) scale(2)'
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
            }
        });
    }

    function handleLizardSelect(){
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
                'transform' : 'rotate(90deg) scale(2)'
            },
            spockContainerStyle : {
                'transform' : 'rotate(-90deg)',
                'z-index' : '1'
            }
        });
    }

    function handleSpockSelect(){
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
                'transform' : 'rotate(90deg) scale(2)'
            }
        });
    }


    return(
        <div className="radial-selection-container">

            <div className="radial-selection-column" style={radialContainerStyles.scissorContainerStyle}>
                <div className="radial-option-container" id="scissor" style={radialContainerStyles.scissorInnerContainerStyle} onClick={() => handleScissorSelect()}>
                    <div className="radial-option-inner">
                        <img src={iconScissor}></img>
                    </div>
                </div>
            </div>

            <div className="radial-selection-column" style={radialContainerStyles.paperContainerStyle}>
                <div className="radial-option-container" id="paper" style={radialContainerStyles.paperInnerContainerStyle} onClick={()=> handlePaperSelect()}>
                    <div className="radial-option-inner">
                        <div className="radial-option-inner">
                            <img src={iconPaper}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="radial-selection-column" style={radialContainerStyles.rockContainerStyle}>
                <div className="radial-option-container" id="rock" style={radialContainerStyles.rockInnerContainerStyle} onClick={()=> handleRockSelect()}>
                    <div className="radial-option-inner">
                        <div className="radial-option-inner">
                            <img src={iconRock}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="radial-selection-column" style={radialContainerStyles.lizardContainerStyle}>
                <div className="radial-option-container" id="lizzard" style={radialContainerStyles.lizardInnerContainerStyle} onClick={() => handleLizardSelect()}>
                    <div className="radial-option-inner">
                        <div className="radial-option-inner">
                            <img src={iconLizard}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="radial-selection-column" style={radialContainerStyles.spockContainerStyle}>
                <div className="radial-option-container" id="spock" style={radialContainerStyles.spockInnerContainerStyle} onClick={() => handleSpockSelect()}>
                    <div className="radial-option-inner">
                        <div className="radial-option-inner">
                            <img src={iconSpock}></img>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RadialSelection;