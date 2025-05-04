import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

function Login() {
  const [username, setUsername] = useState(''); // Store username input
  const [password, setPassword] = useState(''); // Store password input
  const navigate = useNavigate(); // Hook for redirecting after login

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form behavior (page reload)
  
    // Validate that both fields are filled
    if (!username.trim() || !password.trim()) {
      alert('يرجى إدخال اسم المستخدم وكلمة المرور');
      return;
    }

    // Ensure username is exactly 7 digits
    if (!/^\d{7}$/.test(username)) {
      alert('يجب أن يكون اسم المستخدم مكونًا من 7 أرقام');
      return;
    }
   

    try {
      // Send login data to backend PHP 
      const response = await fetch('http://localhost/login/login1.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();// Parse JSON response

      // If login is successful store status and redirect to home page
      if (data.success) {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/home');
      } else {
        alert(data.message);// Show error message from backend
      }
    } catch (error) {
      alert('حدث خطأ أثناء الاتصال بالخادم');
      console.error('Login error:', error);
    }
  };


  return (
    <div dir="rtl" className="login-page">
      <div className="background"></div>

      <div className="branding-text">
        <h1>مُسترد</h1>
        <p>حيث تجد المفقودات طريقها</p>
      </div>

      <div className="login-box">
        <img src="/image/KAU.png" alt="شعار الجامعة" />

        <h2>تسجيل الدخول</h2>

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
          <CustomButton type="submit">تسجيل الدخول</CustomButton>
        </form>
      </div>
    </div>
  );
}

export default Login;
