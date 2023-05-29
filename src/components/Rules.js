import imageRulesBonus from '../assets/images/image-rules-bonus.svg';
import iconClose from '../assets/images/icon-close.svg';

function Rules(props){


    return(
        <div className="rules-overlay" onClick={props.closeRules}>

            <div className="rules-window">
                <div className='rules-header'>
                    <div className='rules-title'>RULES</div>

                    <img src={iconClose} className='rules-icon-close' onClick={props.closeRules}></img>
                </div>


                <div className='rule-image-container'>
                    <img src={imageRulesBonus}></img>
                </div>
                
            </div>

        </div>
    )
}

export default Rules;