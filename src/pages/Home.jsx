import React from 'react';
import Navbar from '../components/navbar';

// Home component (main landing page after login)
const Home = () => {
  return (
    <div dir="rtl"> 
    <Navbar />
    {/* Right-to-left layout for Arabic content */}
      <div className="background"></div> {/* Optional background styling */}

      {/* Main content container */}
      <div className="main-container">

        {/* Text area with heading and description */}
        <div className="text-section">
          <h1>مُسترد، الحل الذكي لاستعادة مفقوداتك!</h1>
          <p>
            يسهل <strong>مُسترد</strong> الإبلاغ عن المفقودات والعثور عليها داخل الحرم الجامعي بسهولة وأمان.
            من خلال منصة رقمية ذكية، يمكنك البحث عن أغراضك، الإبلاغ عن المفقودات، والتواصل مباشرة مع الآخرين
            <strong> لاستعادتها بسرعة وكفاءة</strong>.
          </p>
        </div>

        {/* Image section on the side */}
        <div className="image-section">
          <img src="/image/bag.png" alt="صورة مفقودات" />
        </div>
        
      </div>
    </div>
  );
};

export default Home;