import Header from "../common/header"
import skiLft from '../../assets/ski-lift.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './HomePage.css'
import SearchButton from "./SearchButton";

const HomePage = () => {
    let states = ["Colorado", "Utah", "North Carolina", "Vermont", "New Hampshire", "Wyoming"]
    let snowflakes = ["❄️❄️❄️❄️❄️", "❄️❄️❄️❄️", "❄️❄️❄️"]

    return (
        <div className="body">
            <Header></Header>
            <div className="top">
                <img src={skiLft} alt="ski lift"></img>
                <div className="search">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                    <input type="text" placeholder="Search Mountains" className="searchInput" />
                </div>
            </div>
            <div className="findBy">
                <div className="state">
                    <h2>Find By State</h2>
                    <ul className="stateList">
                        <li>
                        {states.map((state) => <SearchButton buttonLabel={state}></SearchButton>)}
                        </li>
                    </ul>
                </div>
                <div className="rating">
                    <h2>Find By Rating</h2>
                    <ul className="ratingList">
                        <li>
                        {snowflakes.map((snowflake) => <SearchButton buttonLabel={snowflake}></SearchButton>)}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default HomePage;