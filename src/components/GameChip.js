
import iconLizard from '../assets/images/icon-lizard.svg';
import iconScissor from '../assets/images/icon-scissors.svg';
import iconPaper from '../assets/images/icon-paper.svg';
import iconRock from '../assets/images/icon-rock.svg';
import iconSpock from '../assets/images/icon-spock.svg';
import { useEffect, useState } from 'react';

function GameChip(props){

    const [chipType, setChipType] = useState(null);
    const [chipStyle, setChipStyle] = useState(null);
    const [chipIcon, setChipIcon] = useState(null);

    useEffect(()=>{
        setChipType(props.chipType);
        setChipStyle(props.chipStyle);

        if(chipType == "scissor"){
            setChipIcon(iconScissor);
        }else if(chipType == "paper"){
            setChipIcon(iconPaper);
        }else if(chipType == "rock"){
            setChipIcon(iconRock);
        }else if(chipType == "lizard"){
            setChipIcon(iconLizard);
        }else{
            setChipIcon(iconSpock);
        }
    });

    return(
        <div className="radial-option-container" id={chipType} style={chipStyle} onClick={() => props.onClick()}>
            <div className="radial-option-inner">
                <img src={chipIcon}></img>
            </div>
        </div>
    )
}

export default GameChip;

