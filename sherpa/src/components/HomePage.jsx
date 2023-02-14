import Header from "./base/header"
import './HomePage.css'
import skiLft from '../assets/ski-lift.jpeg';

const HomePage = () => {
    return (
        <div className="body">
            <Header></Header>
            <div className="skiLift">
                <img src={skiLft} alt="ski lift"></img>
            </div>
            <div className="search">

            </div>
            <div className="findBy">
                <div className="state">
                    <h2>Find By State</h2>
                </div>
                <div className="rating">
                    <h2>Find By Rating</h2>
                </div>
            </div>
        </div>
    );
}
export default HomePage;