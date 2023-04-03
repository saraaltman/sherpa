import React from 'react';
import Header from "../common/header"
import { useLocation } from 'react-router-dom';
import './MountainSearchResults.css'

const MountainSearchResults = () => {

    const location = useLocation();

    return (
        <div>
            <Header></Header>
            Mountains Search Results
            <ul className="list">
                <li>
                    {location.state.mountains.map((mountain) => <div>{mountain.name}</div>)}
                </li>
            </ul>
        </div>

    );
}
export default MountainSearchResults;