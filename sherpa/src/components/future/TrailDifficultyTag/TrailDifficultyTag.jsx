import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import './TrailDifficultyTag.css'

const TrailDifficultyTag = ({level}) => {

    return (
        <div className="Tag">
            {level === "Green" && <FontAwesomeIcon className="GreenCircle" icon={faCircle} />}
            {level === "Blue" && <FontAwesomeIcon className="BlueCircle" icon={faCircle} />}
            {level === "Black" && <FontAwesomeIcon className="BlackCircle" icon={faCircle} />}
            {level === "Double Black" &&
                <div className="doubleBlack">
                    <FontAwesomeIcon className="BlackCircle" icon={faCircle} />
                    <FontAwesomeIcon className="BlackCircle" icon={faCircle} />
                </div>}
            <span className="level">{level}</span>
        </div>
    );
}
export default TrailDifficultyTag;