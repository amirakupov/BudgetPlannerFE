import Navbar from './Navbar'
import {BudgeText} from './BudgeText'
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import Loader from "../components/Loader";


const StartingPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const simulateLoading = async () => {

            await new Promise((resolve) => setTimeout(resolve, 2500));
            setLoading(false);
        };

        simulateLoading();
    }, []);

    return (
        <div className="starting-page" style={{ background: '#f5f5f5', margin: '0', padding: '0' }}>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Navbar/>
                    <BudgeText/>
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default StartingPage