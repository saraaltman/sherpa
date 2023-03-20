import skiLft from '../../assets/ski-lift.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './HomePage.css'
import TrailListItem from '../future/TrailListItem/TrailListItem';

const HomePage = () => {
    let states = ["Colorado", "Utah", "North Carolina", "Vermont", "New Hampshire", "Wyoming"]
    let snowflakes = ["❄️❄️❄️❄️❄️", "❄️❄️❄️❄️", "❄️❄️❄️"]
    let mountain = {
        id: "12345",
        name: "Beech Mountain",
        numLifts: 5,
        trails: [],
        locationTown: "Beech Mountain",
        locationState: "NC",
        rating: 3,
        websiteURL: ""
    }
    let trail = {
        id: "123",
        name: "The Oz",
        mountain: "12345",
        trailLevel: "Blue",
        rating: 4,
        mountainMapURL: ""
    }

    return (
        <div className="body">
            <div className="top">
                <img src={skiLft} alt="ski lift"></img>
                <div className="search">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                    <input type="text" placeholder="Search Mountains" className="searchInput" />
                </div>
            </div>
            <TrailListItem trail={trail}></TrailListItem>
        </div>
    );
}
export default HomePage;
