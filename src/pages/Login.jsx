import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Used for navigation after login

// Login component
const Login = () => {
  const [username, setUsername] = useState(''); // Store username input
  const [password, setPassword] = useState(''); // Store password input
  const navigate = useNavigate(); // Hook for redirecting after login

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior (page reload)

    // Validate that both fields are filled
    if (!username.trim() || !password.trim()) {
      alert('يرجى إدخال اسم المستخدم وكلمة المرور'); // Show alert if either field is empty
      return;
    }

    // Ensure username is exactly 7 digits
    if (!/^\d{7}$/.test(username)) {
      alert('يجب أن يكون اسم المستخدم مكونًا من 7 أرقام');
      return;
    }

    // ✅ Fake login without server for testing purposes
    localStorage.setItem('isAuthenticated', 'true'); // Store login status in browser
    navigate('/home'); // Redirect to home page
  };

  return (
    <div dir="rtl" className="login-page"> {/* Right-to-left layout for Arabic UI */}
      <div className="background"></div> {/* Optional background design */}

      {/* Logo and header */}
      <div className="branding-text">
        <h1>مُسترد</h1>
        <p>حيث تجد المفقودات طريقها</p>
      </div>

      {/* Login form box */}
      <div className="login-box">
        <img src="/image/KAU.png" alt="شعار الجامعة" /> {/* University logo */}

        <h2>تسجيل الدخول</h2>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="اسم المستخدم"
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="كلمة المرور"
            />
          </div>
          <button type="submit">تسجيل الدخول</button> {/* Submit button */}
        </form>
      </div>
    </div>
  );
};

export default Login;