import React from "react";
import "./BudgeText.css";
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'


export const BudgeText = () => {
  return (
  <div>
    <div className="BudgeText">
        <span className="text-wrapper">Welcome to Accountable: </span>
        <span className="span">Your Personal Budget Planner! </span>
    </div>

    <div className="image-container">
      <img src={image1} alt="Income Chart" />
      <img src={image2} alt="Expense Chart" />
    </div>

    <div className="believe-section" id="what-we-believe">
      <div className="label1">
        <div className="label-text1">WHAT WE BELIEVE</div>
      </div>
        
      <div className="label2">
        <p className="label-text2">
          At Accountable, we understand that managing personal finances can be <br/> a challenge, especially for students and young professionals. That's why <br/> we've created a user-friendly application that simplifies the process of <br/> tracking your expenses, setting financial goals, and creating personalized budgets.
        </p>
      </div>
    </div>

    <div className="believe-section" id="features-tailored-for-you">
      <div className="label1">
        <div className="label-text1">Features Tailored for You</div>
      </div>
        
      <div className="label2">
        <p className="label-text2">
        <strong>Smart Budgeting:</strong> Create and adjust budgets that align with your financial goals.<br/>
        <strong>Expense Tracking: </strong> Log and categorize your daily expenses for better control.<br/>
        <strong>Income Management:</strong> Keep track of your earnings and financial inflows.<br/>
        <strong>Goal Setting:</strong> Set and track your financial targets with ease.<br/>
        <strong> Reminders & Notifications:</strong> Get timely reminders for bill payments and other important financial commitments.<br/>
        <strong>Secure & Private:</strong> Your financial data is encrypted and stored securely, ensuring privacy and peace of mind.<br/>
        </p>
      </div>

    </div>

    <div className="believe-section" id="who-we-are">
      <div className="label1">
        <div className="label-text1">Who We Are</div>
      </div>
        
      <div className="label2">
        <p className="label-text2">
        At Accountable, we are a dedicated team of individuals with a shared passion for <br/> financial empowerment. We believe that managing personal finances should be <br/> straightforward, accessible, and tailored to your unique needs. Our mission is to <br/> provide you with the tools and resources to take control of your financial journey.
        </p>
      </div>
      
    </div>

    <div className="believe-section" id="about-us">
      <div className="label1">
        <div className="label-text1">About us</div>
      </div>
        
      <div className="label2">
        <p className="label-text2">
        Accountable was founded by a group of Fh-campus students who understand the challenges <br/> of budgeting and financial planning, especially for students and young professionals. <br/> We've experienced the frustration of complex budgeting apps and their intrusive subscription <br/> models. That's why we came together to create a user-friendly budget planner that puts<br/> you in charge.<br/><br/>
        
        Our commitment is to deliver a budgeting solution that simplifies expense tracking, helps <br/> you set and achieve financial goals, and allows you to create personalized budget plans. We <br/> want to empower you to make informed financial decisions, save for the things that matter <br/> most to you, and build a secure financial future.
        </p>
      </div>
      
    </div>

    

    


  </div>
  );
};

export default BudgeText;
