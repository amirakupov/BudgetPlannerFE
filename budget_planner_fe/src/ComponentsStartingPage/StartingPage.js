import React from 'react'
import Navbar from './Navbar'
import {BudgeText} from './BudgeText'
import Footer from "../components/Footer";


const StartingPage = () => {
    return (
        <div className="starting-page" style={{ background: '#f5f5f5', margin: '0', padding: '0' }}>
            <Navbar/>
            <BudgeText/>
            <Footer />
        </div>
    )
}

export default StartingPage