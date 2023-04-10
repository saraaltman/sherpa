import Header from "../common/header"
import skiLft from '../../assets/ski-lift.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { searchByState, searchByRating, searchByInput } from '../../services/MountainService'
import { useNavigate } from 'react-router-dom'

import './HomePage.css'
import TrailListItem from '../future/TrailListItem/TrailListItem';
import SearchButton from "./SearchButton";

const HomePage = () => {
    const navigate = useNavigate();
    let states = { "Colorado": "CA", "Utah": "UT", "North Carolina": "NC", "Vermont": "VT", "New Hampshire": "NH", "Wyoming": "WY" }
    let snowflakes = { "❄️❄️❄️❄️❄️": 5, "❄️❄️❄️❄️": 4, "❄️❄️❄️": 3 }

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

    const stateSearch = (state) => {
        searchByState(state)
            .then(response => {
                console.log(response);
                navigate('/mountains', { state: { mountains: response } });
            }).catch(e => {
                console.log(e)
            });
    }

    const ratingSearch = (rating) => {
        searchByRating(rating)
            .then(response => {
                console.log(response);
                navigate('/mountains', { state: { mountains: response } });
            }).catch(e => {
                console.log(e)
            });
    }

    const searchBarSearch = (input) => {
        if (input.keyCode == 13) {
            searchByInput(input.target.value)
                .then(response => {
                    console.log(response);
                    navigate('/mountains', { state: { mountains: response } });
                }).catch(e => {
                    console.log(e)
                });
        }
    }

    return (
        <div>
            <Header></Header>
            <div className="top">
                <img src={skiLft} alt="ski lift"></img>
                <div className="search">
                    <FontAwesomeIcon className="searchIcon" icon={faSearch} />
                    <input type="text" placeholder="Search Mountains" className="searchInput" onKeyDown={(e) => searchBarSearch(e)} />
                </div>
            </div>
            <div className="findBy">
                <div className="state">
                    <h2>Find By State</h2>
                    <ul className="stateList">
                        <li>
                            {Object.entries(states).map(([state, abr]) => <SearchButton buttonLabel={state} onClickProp={() => stateSearch(abr)}></SearchButton>)}
                        </li>
                    </ul>
                </div>
                <div className="rating">
                    <h2>Find By Rating</h2>
                    <ul className="ratingList">
                        <li>
                            {Object.entries(snowflakes).map(([snowflake, rating]) => <SearchButton buttonLabel={snowflake} onClickProp={() => ratingSearch(rating)}></SearchButton>)}
                        </li>
                    </ul>
                </div>
            </div>
            <TrailListItem trail={trail}></TrailListItem>
        </div >
    );
}
export default HomePage;
