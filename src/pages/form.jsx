// Import necessary React hooks and components
import React, { useState } from 'react';
import FormInput from '../components/Forminput'; // Reusable input component
import CustomButton from '../components/CustomButton'; // Reusable button component
import Navbar from '../components/navbar'; // Navigation bar component

// React component for submitting a lost item report
const Form = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    location: '',
    date: '',
    time: '',
    description: '',
    image: null
  });

  // Handles changes to input fields and updates state
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // Special handling for file input (image)
    if (name === 'image') {
      setFormData({ ...formData, image: files?.[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Create FormData object to handle file uploads
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === 'image' && val) {
        formDataToSend.append('image', val);
      } else {
        formDataToSend.append(key, val);
      }
    });

    // Send POST request to the server
    try {
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('تم الإرسال بنجاح!'); // Success message
        // Reset form
        setFormData({
          itemName: '',
          itemType: '',
          location: '',
          date: '',
          time: '',
          description: '',
          image: null
        });
      } else {
        alert('فشل في الإرسال.'); // Error message
      }
    } catch (error) {
      console.error('خطأ:', error);
      alert('حدث خطأ أثناء الإرسال.');
    }
  };

  // JSX for the form UI
  return (
    <div dir="rtl"> {/* Right-to-left layout for Arabic */}
      <Navbar />
      <div className="background"></div>
      <form className="report-form-container" onSubmit={handleSubmit}>
        {/* Input for item name */}
        <FormInput
          label="اسم الغرض المفقود"
          type="text"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          required
        />

        {/* Input for date found */}
        <FormInput
          label="تاريخ إيجاد المفقود"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        {/* Input for time found */}
        <FormInput
          label="وقت إيجاد المفقود"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        {/* Dropdown for item type */}
        <div className="form-field">
          <label>نوع الغرض المفقود</label>
          <select
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            required
          >
            <option value="">اختر النوع</option>
            <option value="الأجهزة">الأجهزة</option>
            <option value="الملابس">الملابس</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        {/* Input for location found */}
        <FormInput
          label="مكان إيجاد المفقود"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        {/* File input for image upload */}
        <div className="form-field">
          <label>إرفاق صورة</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        {/* Submit button */}
        <div className="full-width">
          <CustomButton type="submit">إرسال</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Form;
