import React, { useState } from 'react';
import CustomButton from '../components/CustomButton';
import Navbar from '../components/navbar';

// State variables for user inputs
const Account = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [universityId, setUniversityId] = useState('');
  const [phone, setPhone] = useState('');

  // Function to handle form submission
  const handleSave = (e) => {
    e.preventDefault();// Prevent the default form behavior (which reloads the page)
    // Print the data to console (simulate saving)
    console.log('البيانات المحفوظة:', { name, college, universityId, phone });
    alert('تم حفظ التغييرات بنجاح!');// Show confirmation message
  };
  
  return (
    <div dir="rtl">
     <Navbar />

      <div className="settings-page">
        <div className="settings-container">
          <div className="side-menu">
            <h3>الإعدادات</h3>
            <ul>
              <li className="active">الحساب</li>
            </ul>
          </div>

          <div className="settings-form">
            <h2>إعدادات الحساب</h2>

            <div className="profile-image-container">
            <img src="/image/profileee.png" alt="الصورة الشخصية" className="profile-img" />
              <span className="edit-icon">✎</span>
            </div>

            <form onSubmit={handleSave}>
              <div className="form-row">
                <div className="form-group">
                  <label>الاسم</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="أدخل اسمك" />
                </div>
                <div className="form-group">
                  <label>الكلية</label>
                  <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} placeholder="أدخل الكلية" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>الرقم الجامعي</label>
                  <input type="text" value={universityId} onChange={(e) => setUniversityId(e.target.value)} placeholder="أدخل الرقم الجامعي" />
                </div>
                <div className="form-group">
                  <label>رقم الجوال</label>
                  <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="أدخل رقم الجوال" />
                </div>
              </div>

              <div className="button-container">
              <CustomButton type="submit">حفظ التغيير</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
