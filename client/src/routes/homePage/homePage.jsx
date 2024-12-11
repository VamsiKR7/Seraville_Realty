import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

    const {currentUser} = useContext(AuthContext)

    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">Your Home, Our Commitment</h1>
                    <p>
                        We provide expert guidance and dependable solutions, 
                        fostering trust and ensuring seamless experiences in every realty transaction. 
                        Discover a partnership defined by professionalism and reliability.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>20+</h1>
                            <h2 className="edit">Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>150+</h1>
                            <h2 className="edit">Honors and Accolades Bestowed</h2>
                        </div>
                        <div className="box">
                            <h1>350+</h1>
                            <h2 className="edit">Satisfied and Valued Clientele</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="./bg.png" alt=""/>
            </div>
        </div>
    )
}

export default HomePage;