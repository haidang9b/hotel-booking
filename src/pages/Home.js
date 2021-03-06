import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Home;