import React, { useState } from 'react';

// React component for the lost item report form
const Form = () => {
  // Initialize form state
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    location: '',
    date: '',
    time: '',
    description: '',
    image: null
  });

  // Handle input changes (text, select, file)
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      // Set the selected file if it's an image
      setFormData({ ...formData, image: files?.[0] || null });
    } else {
      // Update text-based input fields
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Prepare data for POST request
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === 'image' && val) {
        formDataToSend.append('image', val); // Append file if available
      } else {
        formDataToSend.append(key, val); // Append text inputs
      }
    });

    try {
      // Send data to the backend (Node.js Express server)
      const response = await fetch('http://localhost:5000/api/reports', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        alert('تم الإرسال بنجاح!'); // Show success alert
        // Reset form fields
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
        alert('فشل في الإرسال.'); // Show failure alert
      }
    } catch (error) {
      console.error('خطأ:', error);
      alert('حدث خطأ أثناء الإرسال.'); // Handle any unexpected errors
    }
  };

  // JSX for rendering the form
  return (
    <div dir="rtl">
      <div className="background"></div>
      <form className="report-form-container" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>اسم الغرض المفقود</label>
          <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} required />
        </div>

        <div className="form-field">
          <label>تاريخ إيجاد المفقود</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-field">
          <label>وقت إيجاد المفقود</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>

        <div className="form-field">
          <label>نوع الغرض المفقود</label>
          <select name="itemType" value={formData.itemType} onChange={handleChange} required>
            <option value="">اختر النوع</option>
            <option value="الأجهزة">الأجهزة</option>
            <option value="الملابس">الملابس</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div className="form-field">
          <label>مكان إيجاد المفقود</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="form-field">
          <label>إرفاق صورة</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
        </div>

        <div className="full-width">
          <button type="submit" className="submit-btn">إرسال</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
