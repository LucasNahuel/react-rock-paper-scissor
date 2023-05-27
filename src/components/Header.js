
import Score from './Score';

function Header(){

    

    return(
        <div className="header">
            <ul className="title-list">
                <li>ROCK</li>
                <li>PAPER</li>
                <li>SCISSORS</li>
                <li>LIZARD</li>
                <li>SPOCK</li>
            </ul>

            <Score/>
        </div>
    );
}

export default Header;